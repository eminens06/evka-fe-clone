import React, { FunctionComponent, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch,
  Breadcrumb,
  Steps,
  Card,
} from 'antd';
import { Header } from 'antd/lib/layout/layout';

type SizeType = Parameters<typeof Form>[0]['size'];

const KioskPage: FunctionComponent = () => {
  const { Step } = Steps;

  const [componentSize, setComponentSize] = useState<SizeType | 'default'>(
    'default',
  );
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>KIOSK</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Card
        title="Sipariş Bilgileri"
        bordered={false}
        className="content-container"
      >
        <Button
          target="_blank"
          href={`/template?id=VXNlck9yZGVyTm9kZTpmOGU4ZjIwOC1mODRlLTQxNDAtYjBmOC1hZDQwYzJmMzQ5ZWI%3D`}
          type="primary"
        >
          Sablon Olustur
        </Button>
        <Steps
          size="small"
          current={1}
          style={{ width: '50%', marginBottom: 30 }}
        >
          <Step title="Hazırlanıyor" />
          <Step title="Tamamlandı" />
          <Step title="Teslim Edildi" />
        </Steps>

        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize as SizeType}
          layout="vertical"
        >
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Tarih Seçimi">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Numara Input">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Switch">
            <Switch />
          </Form.Item>
          <Form.Item label="Buton">
            <Button type="primary">Button</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default KioskPage;
