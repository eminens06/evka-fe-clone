import { Card, Form, Row, Col, Input, DatePicker, FormInstance } from 'antd';
import React, { FC, useEffect, useMemo } from 'react';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const InvoiceCard: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card title="Fatura Bilgileri" bordered={false} className="form-card">
      <Row gutter={24}>
        <Col span={12} key={2}>
          <Form.Item
            name="invoiceNo"
            label="Fatura Numarası"
            rules={[{ required: false }]}
            style={{ width: '100%' }}
          >
            <Input disabled={isDisabled} />
          </Form.Item>
        </Col>
        <Col span={12} key={3}>
          <Form.Item
            name="invoiceDate"
            label="Fatura Tarihi"
            rules={[{ required: false }]}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder=""
              format={'DD-MM-YYYY'}
              disabled={isDisabled}
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default InvoiceCard;
