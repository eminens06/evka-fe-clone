import {
  Breadcrumb,
  Button,
  Card,
  Divider,
  Form,
  message,
  Row,
  Skeleton,
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
import { orderSaveMapper } from '../../mappers';
import { useRouter } from 'next/router';
import USER_ORDER, {
  OrdersGetUserOrderQuery,
} from '../../__generated__/OrdersGetUserOrderQuery.graphql';
import { getUserRoles } from '../auth/utils/session.utils';

interface CustomerDTO {
  tc: string;
  name: string;
  surname?: string;
  phone_number: string;
  invoice_address: string;
  delivery_address: string;
  is_corporate?: boolean;
}

const NormalOrderPage: FunctionComponent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      const customer: CustomerDTO = JSON.parse(
        userOrder?.customerInfo as string,
      );
      const mapped = {
        commissionRate: userOrder?.commissionRate,
        notes: userOrder?.notes,
        tc: customer.tc,
        name: customer.name,
        surname: customer.surname,
        phoneNumber: customer.phone_number,
        invoiceAddress: customer.invoice_address,
        deliveryAddress: customer.delivery_address,
        orderDeliveryTime: userOrder.orderDeliveryTime,
        marketplaceOrderId: userOrder.marketplaceOrderId,
        marketplaceId: JSON.stringify(userOrder.marketplace),
        products: productCardMapper(userOrder.products),
        isSameAddress: customer.delivery_address === customer.invoice_address,
        isCorporate: customer.is_corporate,
      };
      setInitialValues(mapped);
    }
  };

  const productCardMapper = (data: any) => {
    const products = data.edges.map((item: any) => {
      return {
        sku: item.node.product.sku,
        count: item.node.orderCount,
        price: item.node.price,
        productData: item.node.product,
      };
    });
    return products;
  };

  const isAdmin = useMemo(() => {
    return userRoles.indexOf('admin') !== -1;
  }, [userRoles]);

  useEffect(() => {
    if (router?.query?.id) {
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

  const onFinish = (values: any) => {
    let saveControl = true;
    values.products.forEach((product: any) => {
      if (product === undefined || !product.productId) {
        saveControl = false;
      }
    });
    if (saveControl) {
      const orderData = orderSaveMapper(values);
      createOrder({
        variables: {
          input: { ...orderData },
        },
      });
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
                    isAdmin={isAdmin}
                  />
                );
              })}

              <Divider>
                <Button
                  type="primary"
                  shape="circle"
                  onClick={() => add()}
                  disabled={!isAdmin && !!initialValues}
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
          isAdmin={isAdmin}
        />
        <CustomerCard
          form={form}
          initialValues={initialValues}
          isAdmin={isAdmin}
        />
        <Row className="buttons-row">
          <Form.Item>
            {!isAdmin && !!initialValues ? (
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
