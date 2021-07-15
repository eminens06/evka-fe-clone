import { Breadcrumb, Button, Divider, Form, message, Row } from 'antd';
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

const NormalOrderPage: FunctionComponent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [productOrderIds, setProductOrderIds] = useState<string[]>([]);

  const [initialValues, setInitialValues] = useState<any>();

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
  };

  const isAdmin = useMemo(() => {
    return userRoles.indexOf('admin') !== -1;
  }, [userRoles]);

  useEffect(() => {
    if (router?.query?.id) {
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

  const onFinish = (values: any) => {
    let saveControl = true;
    values.products.forEach((product: any) => {
      if (product === undefined || !product.productId) {
        saveControl = false;
      }
    });
    if (saveControl) {
      if (isEdit) {
        const orderData = orderEditMapper(
          values,
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
          form={form}
          initialValues={initialValues}
          isDisabled={!isAdmin && isEdit}
        />
        <CustomerCard
          form={form}
          initialValues={initialValues}
          isDisabled={!isAdmin && isEdit}
        />
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
    </>
  );
};

export default NormalOrderPage;
