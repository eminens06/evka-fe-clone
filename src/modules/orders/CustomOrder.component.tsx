import { Breadcrumb, Form } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent } from 'react';
import CustomerCard from '../../molecules/CustomerCard';
import CustomOrderCard from '../../molecules/CustomOrderCard';
import CustomProductCard from '../../molecules/CustomProductCard';

const CustomOrderPage: FunctionComponent = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Siparişler</Breadcrumb.Item>
          <Breadcrumb.Item>Özel Sipariş</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <CustomProductCard />
        <CustomOrderCard />
        <CustomerCard form={form} />
      </Form>
    </>
  );
};

export default CustomOrderPage;
