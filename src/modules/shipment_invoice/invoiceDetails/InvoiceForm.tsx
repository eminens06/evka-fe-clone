import { Row, Col, Form, Input, DatePicker, FormInstance, Card } from 'antd';
import React, { FC, useEffect } from 'react';

interface Props {
  form: FormInstance<any>;
  onSubmit: Function;
}

const InvoiceForm: FC<Props> = ({ form, onSubmit }) => {
  const onFormFinish = (values: any) => {
    onSubmit(values);
  };

  useEffect(() => form.resetFields());

  return (
    <Form form={form} name="basic" layout="vertical" onFinish={onFormFinish}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="invoiceDate"
            label="Fatura Tarihi"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder=""
              format={'DD-MM-YYYY'}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="invoiceNo"
            label="Fatura Numarası"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default InvoiceForm;
