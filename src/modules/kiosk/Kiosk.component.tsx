import React, { FunctionComponent, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Breadcrumb,
  Steps,
  Card,
} from 'antd';
import { Header, Content } from 'antd/lib/layout/layout';

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
          <Breadcrumb.Item>Ana Sayfa</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Card
        title="Sipariş Bilgileri"
        bordered={false}
        className="content-container"
      >
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
