import { Breadcrumb, Button, Divider, Form, message, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import CustomerCard from '../../molecules/CustomerCard';
import OrderCard from '../../molecules/OrderCard';
import ProductCard from '../../molecules/ProductCard';
import CREATE_ORDER, {
  OrdersCreateOrderMutation,
} from '../../__generated__/OrdersCreateOrderMutation.graphql';
import { useMutation } from 'relay-hooks';
import { orderSaveMapper } from '../../mappers';
import { useRouter } from 'next/router';

const NormalOrderPage: FunctionComponent = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [createOrder] = useMutation<OrdersCreateOrderMutation>(CREATE_ORDER, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      console.log(res);
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
        onValuesChange={() => console.log(form.getFieldsValue())}
        initialValues={{
          orderDate: moment(),
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
                  />
                );
              })}

              <Divider>
                <Button type="primary" shape="circle" onClick={() => add()}>
                  <PlusOutlined />
                </Button>
              </Divider>
            </>
          )}
        </Form.List>
        <OrderCard form={form} />
        <CustomerCard form={form} />
        <Row className="buttons-row">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default NormalOrderPage;
