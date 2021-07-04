import { Card, Form, Row, Col, Input, DatePicker, InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { FC } from 'react';
import { SingleSelect } from '../atoms';

interface Props {}

const optionsTest = [
  {
    value: 'value1',
    text: 'Value 1',
  },
  {
    value: 'value2',
    text: 'Value 2',
  },
  {
    value: 'value3',
    text: 'Value 3',
  },
  {
    value: 'value4',
    text: 'Value 4',
  },
];

const CustomOrderCard: FC<Props> = () => {
  return (
    <Card title="Sipariş Bilgileri" bordered={false} className="form-card">
      <Row gutter={24}>
        <Col span={8} key={1}>
          <Form.Item
            name="marketplace"
            label="Pazaryeri"
            rules={[{ required: true, message: 'Lütfen Pazaryeri Seçiniz' }]}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
        <Col span={8} key={2}>
          <Form.Item
            name="order-number"
            label="Sipariş Numarası"
            rules={[
              { required: true, message: 'Lütfen Sipariş Numarası Giriniz' },
            ]}
            style={{ width: '100%' }}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8} key={3}>
          <Form.Item
            name="order-date"
            label="Sipariş Tarihi"
            rules={[
              { required: true, message: 'Lütfen Sipariş Tarihi Seçiniz' },
            ]}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder=""
              format={'DD-MM-YYYY'}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8} key={4}>
          <Form.Item
            name="price-with-tax"
            label="KDV'li Fiyat"
            rules={[{ required: true, message: "Lütfen KDV'li Fiyat Seçiniz" }]}
          >
            <InputNumber style={{ width: '100%' }} decimalSeparator="," />
          </Form.Item>
        </Col>
        <Col span={8} key={5}>
          <Form.Item
            name="commission-rate"
            label="Komisyon Oranı"
            rules={[
              { required: true, message: 'Lütfen Komisyon Oranı Seçiniz' },
            ]}
            style={{ width: '100%' }}
          >
            <InputNumber
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value?.replace('%', '')}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={8} key={6}>
          <Form.Item
            name="delivery-time"
            label="Sipariş Teslim Süresi (Gün)"
            rules={[
              {
                required: true,
                message: 'Lütfen Sipariş Teslim Süresi Giriniz',
              },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={24} key={7}>
          <Form.Item name="notes" label="Notlar" style={{ width: '100%' }}>
            <TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomOrderCard;
