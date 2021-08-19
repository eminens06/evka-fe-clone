import { Card, Form, Row, Col, Checkbox, Input, FormInstance } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const CustomerCard: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  const [isCorporate, setIsCorporate] = useState<boolean>(
    initialValues?.isCorporate || false,
  );
  const [isSameAddress, setIsSameAddress] = useState<boolean>(
    initialValues?.isSameAddress || false,
  );

  useEffect(() => {
    setIsCorporate(initialValues?.isCorporate);
    setIsSameAddress(initialValues?.isSameAddress);
  }, [initialValues]);

  const individualCustomer = (
    <Row gutter={24}>
      <Col span={6} key={1}>
        <Form.Item
          name="name"
          label="Adı"
          rules={[
            {
              required: true,
              message: 'Geçersiz Müşteri Adı',
            },
          ]}
        >
          <Input disabled={isDisabled} />
        </Form.Item>
      </Col>
      <Col span={6} key={2}>
        <Form.Item
          name="surname"
          label="Soyadı"
          rules={[
            {
              required: true,
              message: 'Geçersiz Müşteri Soyadı',
            },
          ]}
        >
          <Input disabled={isDisabled} />
        </Form.Item>
      </Col>
      <Col span={6} key={3}>
        <Form.Item
          name="tc"
          label="TC Kimlik No"
          rules={[
            {
              required: false,
              message: 'Geçersiz TC Kimlik No',
            },
          ]}
        >
          <Input disabled={isDisabled} />
        </Form.Item>
      </Col>
      <Col span={6} key={4}>
        <Form.Item
          name="phoneNumber"
          label="Telefon"
          rules={[
            {
              required: false,
              message: 'Geçersiz Telefon No',
            },
          ]}
        >
          <Input placeholder="+90 555 123 45 67" disabled={isDisabled} />
        </Form.Item>
      </Col>
    </Row>
  );

  const corporateCustomer = (
    <Row gutter={24}>
      <Col span={8} key={1}>
        <Form.Item
          name="name"
          label="Şirket Adı"
          rules={[{ required: true, message: 'Lütfen Şirket Adı Giriniz' }]}
        >
          <Input disabled={isDisabled} />
        </Form.Item>
      </Col>
      <Col span={8} key={2}>
        <Form.Item
          name="tc"
          label="Vergi Kimlik No"
          rules={[
            {
              required: false,
              message: 'Geçersiz Vergi Kimlik No',
            },
          ]}
        >
          <Input disabled={isDisabled} />
        </Form.Item>
      </Col>
      <Col span={8} key={3}>
        <Form.Item
          name="phoneNumber"
          label="Telefon"
          rules={[
            {
              required: false,
              message: 'Geçersiz Telefon No',
            },
          ]}
        >
          <Input placeholder="+90 555 123 45 67" disabled={isDisabled} />
        </Form.Item>
      </Col>
    </Row>
  );

  const onChange = (e: CheckboxChangeEvent) => {
    setIsCorporate(e.target.checked);
    form.setFieldsValue({ isCorporate: e.target.checked });
  };

  const onAddressChange = (e: CheckboxChangeEvent) => {
    setIsSameAddress(e.target.checked);
    e.target.checked && form.setFieldsValue({ invoiceAddress: '' });
  };

  return (
    <Card title="Müşteri Bilgileri" bordered={false} className="form-card">
      <Row gutter={24}>
        <Col span={8} key={0}>
          <Form.Item name="isCorporate" noStyle>
            <Checkbox
              checked={isCorporate}
              onChange={(e) => onChange(e)}
              disabled={isDisabled}
            >
              Kurumsal Müşteri
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
      {isCorporate ? corporateCustomer : individualCustomer}
      <Row gutter={24}>
        <Col span={12} key={4}>
          <Form.Item
            name="deliveryAddress"
            label="Teslimat Adresi"
            rules={[
              { required: true, message: 'Lütfen Teslimat Adresi Giriniz' },
            ]}
          >
            <TextArea rows={4} disabled={isDisabled} />
          </Form.Item>
        </Col>
        <Col span={12} key={5}>
          <Form.Item
            name="invoiceAddress"
            label="Fatura Adresi"
            rules={[
              {
                required: false,
                message: 'Lütfen Fatura Adresi Giriniz',
              },
            ]}
            style={{ width: '100%' }}
          >
            <TextArea rows={4} disabled={isSameAddress || isDisabled} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8} key={0}>
          <Form.Item name="isSameAddress" valuePropName="checked" noStyle>
            <Checkbox
              onChange={(e) => onAddressChange(e)}
              disabled={isDisabled}
            >
              Fatura adresi için aynı adresi kullan
            </Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomerCard;
