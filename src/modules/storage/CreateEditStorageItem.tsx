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
import { RoleOptions } from '../../layout/roles';
import { SingleSelect } from '../../atoms';
import TextArea from 'antd/lib/input/TextArea';
import GET_STORAGE_ITEM, {
  StorageItemQuery,
} from '../../__generated__/StorageItemQuery.graphql';
import { DeleteOutlined } from '@ant-design/icons';
import mappers from '../../mappers';
import ADD_TO_STORAGE, {
  StorageAddToStorageMutation,
  StorageCreateInput,
} from '../../__generated__/StorageAddToStorageMutation.graphql';
import UPDATE_STORAGE_ITEM, {
  StorageUpdateStorageMutation,
} from '../../__generated__/StorageUpdateStorageMutation.graphql';
import DELETE_STORAGE_ITEM, {
  StorageDeleteStorageMutation,
} from '../../__generated__/StorageDeleteStorageMutation.graphql';

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
  const environment = useRelayEnvironment();
  const [isEdit, setIsEdit] = useState<boolean>(false);

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
      const mp = mapped.missingParts.map((item: any) => ({
        value: item,
        text: item,
      }));
      // Bu mp gelmesine rağmen garip bir şekilde hata atıyor o nedenle kaldırdım şu an editte gözükmğyor missing Partlar
      console.log('MAP ! ', mp);
      setInitialValues(mapped);
    }
    closeLoader();
  };

  useEffect(() => {
    if (router?.query?.id) {
      openLoader();
      setIsEdit(true);
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
        message.success('Siparişiniz başarıyla oluşturuldu');
        router.back();
      },
    },
  );

  const [updateOrder] = useMutation<StorageUpdateStorageMutation>(
    UPDATE_STORAGE_ITEM,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Siparişiniz başarıyla güncellendi');
        router.back();
      },
    },
  );

  const [deleteOrder] = useMutation<StorageDeleteStorageMutation>(
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
    console.log('Values ! ', values);
    if (values.productId) {
      const storageItem = {
        productId: values.productId,
        note: values.note,
        count: values.count,
        missingParts: values.missingParts,
      };
      if (isEdit) {
        // Edit Mutation
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
    /* let saveControl = true;
    values.products.forEach((product: any) => {
      if (product === undefined || !product.productId) {
        saveControl = false;
      }
    });
    values.orderType = orderType;
    if (saveControl) {
      if (isEdit) {
        const orderData = orderEditMapper(
          { values },
          productOrderIds,
          router?.query?.id as string,
        );
        updateOrder({
          variables: {
            input: { ...orderData },
          },
        });
      } else {
        const orderData = orderSaveMapper(values);
        createOrder({
          variables: {
            input: { ...orderData },
          },
        });
      }
    } else {
      message.error('Lütfen ürün bilgilerini kontrol ediniz');
    } */
  };

  /*const deleteUserOrder = (id: string) => {
    deleteOrder({
      variables: {
        input: {
          id,
        },
      },
    });
  }; */

  useEffect(() => form.resetFields(), [initialValues]);

  /*const openCancelModal = () => {
    setCancelModalVisible(true);
  }; */

  /* const openDeleteModal = () => {
    setDeleteModalVisible(true);
  }; */

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
              onClick={() => {}}
              icon={<DeleteOutlined />}
              danger
              disabled={
                form.getFieldValue('count') && form.getFieldValue('count') > 1
              }
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
              <Form.Item label="Notlar" name={'notes'}>
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
      {loader}
    </>
  );
};

export default CreateEditStorageItem;
