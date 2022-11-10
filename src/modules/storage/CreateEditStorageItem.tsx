import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Typography,
} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useMutation, fetchQuery, useRelayEnvironment } from 'relay-hooks';
import { useRouter } from 'next/router';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import StorageProduct from './StorageProduct';
import { SingleSelect } from '../../atoms';
import TextArea from 'antd/lib/input/TextArea';
import GET_STORAGE_ITEM, {
  StorageItemQuery,
} from '../../__generated__/StorageItemQuery.graphql';
import { DeleteOutlined } from '@ant-design/icons';
import mappers from '../../mappers';
import ADD_TO_STORAGE, {
  StorageAddToStorageMutation,
} from '../../__generated__/StorageAddToStorageMutation.graphql';
import UPDATE_STORAGE_ITEM, {
  StorageUpdateStorageMutation,
} from '../../__generated__/StorageUpdateStorageMutation.graphql';
import DELETE_STORAGE_ITEM, {
  StorageDeleteStorageMutation,
} from '../../__generated__/StorageDeleteStorageMutation.graphql';
import { getUserRoles } from '../auth/utils/session.utils';

const PartOptions = [
  'Ayak',
  'Tabla',
  'Boya',
  'Mermer',
  'Kumaş',
  'Cam',
  'Paketleme',
];

const CreateEditStorageItem: FunctionComponent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [userRoles, setUserRoles] = useState<string[]>();
  const environment = useRelayEnvironment();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [initialValues, setInitialValues] = useState<any>();

  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const getStorageItem = async () => {
    const { storageItem } = await fetchQuery<StorageItemQuery>(
      environment,
      GET_STORAGE_ITEM,
      {
        id: router.query.id as string,
      },
    );

    if (storageItem) {
      const mapped = mappers.mapStorageItem(storageItem);
      setInitialValues(mapped);
    }
    closeLoader();
  };

  useEffect(() => {
    if (router?.query?.id) {
      openLoader();
      setIsEdit(true);
      const getRoles = async () => {
        const data = await getUserRoles();
        setUserRoles(data);
      };
      getRoles();
      getStorageItem();
    }
  }, [router]);

  const [addToStorage] = useMutation<StorageAddToStorageMutation>(
    ADD_TO_STORAGE,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Depo kaydı başarıyla oluşturuldu');
        router.back();
      },
    },
  );

  const [updateStorage] = useMutation<StorageUpdateStorageMutation>(
    UPDATE_STORAGE_ITEM,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Depo başarıyla güncellendi');
        router.back();
      },
    },
  );

  const [deleteStorage] = useMutation<StorageDeleteStorageMutation>(
    DELETE_STORAGE_ITEM,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Siparişiniz başarıyla silindi');
        router.back();
      },
    },
  );

  const onFinish = (values: any) => {
    if (values.product) {
      const storageItem: any = {
        productId: values.product.id,
        note: values.note,
        count: values.count,
        missingParts: values.missingParts,
        location: values.location,
      };
      if (isEdit) {
        // Edit Mutation
        storageItem.id = router?.query?.id;
        updateStorage({
          variables: {
            input: { storageItem },
          },
        });
      } else {
        // Create Mutation
        addToStorage({
          variables: {
            input: { storageItem },
          },
        });
      }
    } else {
      message.error('Lütfen ürün bilgilerini kontrol ediniz');
    }
  };

  useEffect(() => form.resetFields(), [initialValues]);

  const deleteItem = () => {
    if (router?.query?.id) {
      deleteStorage({
        variables: {
          input: {
            id: router.query.id as string,
          },
        },
      });
    }
  };

  const isAdmin = useMemo(() => {
    if (userRoles) return userRoles.indexOf('admin') !== -1;
  }, [userRoles]);

  const isStorage = useMemo(() => {
    if (userRoles) return userRoles.indexOf('storage') !== -1;
  }, [userRoles]);


  const deleteEnabled = useMemo(() => {
    return isAdmin || isStorage || (isEdit && initialValues?.count == 1) ? true : false;
  }, [isEdit, initialValues, isAdmin]);

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Depo</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Card
          title="Depo Ürünü"
          extra={
            <Button
              onClick={() => setModalVisible(true)}
              icon={<DeleteOutlined />}
              danger
              disabled={!deleteEnabled}
            />
          }
          bordered={false}
          className="form-card"
        >
          <StorageProduct form={form} isDisabled={false} />
          <Row gutter={24}>
            <Col span={4}>
              <Form.Item
                label="Adet"
                name={'count'}
                rules={[{ required: true, message: 'Lütfen Adet Giriniz' }]}
              >
                <InputNumber
                  min={1}
                  style={{ width: '100%' }}
                  disabled={false}
                  decimalSeparator=","
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Konum"
                name={'location'}
                rules={[{ required: true, message: 'Lütfen Konum Giriniz' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Eksik Parçalar" name="missingParts">
                <SingleSelect
                  options={PartOptions.map((op) => ({ value: op, text: op }))}
                  multiple
                  defaultValue={initialValues?.missingParts}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Notlar" name={'note'}>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row className="buttons-row">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Kaydet
              </Button>
            </Form.Item>
          </Row>
        </Card>
      </Form>

      <Modal
        visible={modalVisible}
        title={'Uyarı'}
        width={'70%'}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            Vazgeç
          </Button>,
          <Button key="submit" type="primary" onClick={() => deleteItem()}>
            Sil
          </Button>,
        ]}
      >
        <Typography>
          Depodaki ürünü silmek istediğinizden emin misiniz ?
        </Typography>
      </Modal>
      {loader}
    </>
  );
};

export default CreateEditStorageItem;
