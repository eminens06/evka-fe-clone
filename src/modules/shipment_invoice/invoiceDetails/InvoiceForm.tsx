import React, { FC, useEffect } from 'react';
import { Form, Row, Col, DatePicker, Input } from 'antd';
import moment from 'moment';
import { FormInstance } from 'antd/lib/form';

interface Props {
  form: FormInstance<any>;
  onSubmit: Function;
}

const InvoiceForm: FC<Props> = ({ form, onSubmit }) => {
  const onFormFinish = (values: any) => {
    onSubmit(values);
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({ invoiceDate: moment() });
  }, [form]);

  return (
    <Form form={form} name="basic" layout="vertical" onFinish={onFormFinish}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="invoiceNo"
            label="Fatura Numarası"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="invoiceDate"
            label=""
            rules={[{ required: false, message: 'Zorunlu alan' }]}
          >
            <DatePicker
              style={{ width: '100%', display: 'none' }}
              placeholder=""
              format={'DD-MM-YYYY'}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default InvoiceForm;
