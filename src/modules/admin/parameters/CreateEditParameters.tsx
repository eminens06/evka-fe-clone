import { Breadcrumb, Form, Row, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useState } from 'react';
import LaborCard from './LaborCard';
import MetalCard from './MetalCard';
import OtherCard from './OtherCard';
import OtherWorkshopCard from './OtherWorkshopCard';
import WoodCard from './WoodCard';

const CreateEditParameters: FunctionComponent = () => {
  const [initialValues, setInitialValues] = useState<any>();

  const [form] = Form.useForm();
  const onFinish = () => {
    console.log('TODO: create update system params');
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Sistem Parametreleri</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <MetalCard form={form} initialValues={initialValues} />
        <WoodCard form={form} initialValues={initialValues} />
        <OtherWorkshopCard form={form} initialValues={initialValues} />
        <LaborCard form={form} initialValues={initialValues} />
        <OtherCard form={form} initialValues={initialValues} />
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

export default CreateEditParameters;
