import {
  Breadcrumb,
  Button,
  Divider,
  Form,
  message,
  Modal,
  Row,
  Typography,
} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

import CustomerCard from '../../molecules/CustomerCard';
import OrderCard from '../../molecules/OrderCard';
import ProductCard from '../../molecules/ProductCard';
import CREATE_ORDER, {
  OrdersCreateOrderMutation,
} from '../../__generated__/OrdersCreateOrderMutation.graphql';
import { useMutation, fetchQuery, useRelayEnvironment } from 'relay-hooks';
import {
  orderEditMapper,
  orderSaveMapper,
  userOrderMapper,
} from '../../mappers';
import { useRouter } from 'next/router';
import USER_ORDER, {
  OrdersGetUserOrderQuery,
} from '../../__generated__/OrdersGetUserOrderQuery.graphql';
import { getUserRoles } from '../auth/utils/session.utils';
import UPDATE_ORDER, {
  OrdersUpdateOrderMutation,
} from '../../__generated__/OrdersUpdateOrderMutation.graphql';
import { OrderTypes } from './types';
import InvoiceCard from '../../molecules/InvoiceCard';
import CancelOrderModal from './CancelOrderModal';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import DELETE_ORDER, {
  OrdersDeleteOrderMutation,
} from '../../__generated__/OrdersDeleteOrderMutation.graphql';

interface Props {
  orderType: OrderTypes;
}

const CreateEditOrder: FunctionComponent<Props> = (props) => {
  const { orderType } = props;
  const [form] = Form.useForm();
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [productOrderIds, setProductOrderIds] = useState<string[]>([]);

  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [initialValues, setInitialValues] = useState<any>();

  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const getOrderDetail = async () => {
    const { userOrder } = await fetchQuery<OrdersGetUserOrderQuery>(
      environment,
      USER_ORDER,
      {
        id: router.query.id as string,
      },
    );

    if (userOrder) {
      const mapped = userOrderMapper(userOrder);
      const mappedIds = userOrder.products.edges.map((item: any) => {
        return item.node.id;
      });
      setProductOrderIds(mappedIds);
      setInitialValues(mapped);
    }
    closeLoader();
  };

  const isAdmin = useMemo(() => {
    return userRoles.indexOf('admin') !== -1;
  }, [userRoles]);

  useEffect(() => {
    if (router?.query?.id) {
      openLoader();
      setIsEdit(true);
      const getRoles = async () => {
        const data = await getUserRoles();
        setUserRoles(data);
      };
      getRoles();
      getOrderDetail();
    }
  }, [router]);

  const [createOrder] = useMutation<OrdersCreateOrderMutation>(CREATE_ORDER, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      message.success('Siparişiniz başarıyla oluşturuldu');
      router.back();
    },
  });

  const [updateOrder] = useMutation<OrdersUpdateOrderMutation>(UPDATE_ORDER, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      message.success('Siparişiniz başarıyla güncellendi');
      router.back();
    },
  });

  const [deleteOrder] = useMutation<OrdersDeleteOrderMutation>(DELETE_ORDER, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      message.success('Siparişiniz başarıyla silindi');
      router.back();
    },
  });

  const onFinish = (values: any) => {
    let saveControl = true;
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
    }
  };

  const deleteUserOrder = (id: string) => {
    deleteOrder({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const openCancelModal = () => {
    setCancelModalVisible(true);
  };

  const openDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
          <Breadcrumb.Item>Normal Sipariş</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          orderDate: moment(),
          invoiceDate: moment(),
          ...initialValues,
        }}
      >
        <Form.List
          name="products"
          initialValue={[{ sku: '', count: '', price: '' }]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => {
                return (
                  <ProductCard
                    remove={() => remove(field.name)}
                    field={field}
                    form={form}
                    key={field.fieldKey}
                    isDisabled={!isAdmin && isEdit}
                    orderType={orderType}
                  />
                );
              })}

              <Divider>
                <Button
                  type="primary"
                  shape="circle"
                  onClick={() => add()}
                  disabled={!isAdmin && isEdit}
                >
                  <PlusOutlined />
                </Button>
              </Divider>
            </>
          )}
        </Form.List>
        <OrderCard
          orderType={orderType}
          form={form}
          initialValues={initialValues}
          isDisabled={!isAdmin && isEdit}
        />
        <CustomerCard
          form={form}
          initialValues={initialValues}
          isDisabled={!isAdmin && isEdit}
        />
        {orderType === 'ST' && (
          <InvoiceCard
            form={form}
            initialValues={initialValues}
            isDisabled={!isAdmin && isEdit}
          />
        )}
        <Row
          style={{
            float: 'left',
          }}
        >
          {isEdit && (
            <Button
              type="primary"
              className="cancel-button"
              danger
              onClick={openCancelModal}
            >
              İptal Et
            </Button>
          )}
          {isAdmin && (
            <Button
              type="primary"
              className="cancel-button"
              danger
              onClick={openDeleteModal}
            >
              Sil
            </Button>
          )}
        </Row>
        <Row className="buttons-row">
          <Form.Item>
            {!isAdmin && isEdit ? (
              <Button type="default" onClick={() => router.back()}>
                Vazgeç
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                Kaydet
              </Button>
            )}
          </Form.Item>
        </Row>
      </Form>
      {isEdit && initialValues && (
        <CancelOrderModal
          isVisible={cancelModalVisible}
          closeModal={() => setCancelModalVisible(false)}
          orderId={router?.query?.id}
          products={initialValues.cancelModalProducts}
        />
      )}
      {isAdmin && (
        <Modal
          visible={deleteModalVisible}
          title={'Uyarı'}
          width={'70%'}
          onCancel={() => setDeleteModalVisible(false)}
          footer={[
            <Button key="back" onClick={() => setDeleteModalVisible(false)}>
              Vazgeç
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => deleteUserOrder(router?.query?.id)}
            >
              Sil
            </Button>,
          ]}
        >
          <Typography>Siparişi silmek istediğinizden emin misiniz ?</Typography>
        </Modal>
      )}
      {loader}
    </>
  );
};

export default CreateEditOrder;
