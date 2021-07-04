import { Card, Form, Row, Col } from 'antd';
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

const CustomProductCard: FC<Props> = () => {
  return (
    <Card title="Ürün Bilgileri" bordered={false} className="form-card">
      <Row gutter={24}>
        <Col span={8} key={1}>
          <Form.Item
            name="name"
            label="Ürün Adı"
            rules={[{ required: true, message: 'Lütfen Ürün Adı Seçiniz' }]}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
        <Col span={8} key={2}>
          <Form.Item
            name="category"
            label="Kategori"
            rules={[{ required: true, message: 'Lütfen Kategori Seçiniz' }]}
            style={{ width: '100%' }}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
        <Col span={8} key={3}>
          <Form.Item
            name="sub-category"
            label="Alt Kategori"
            rules={[{ required: true, message: 'Lütfen Alt Kategori Seçiniz' }]}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8} key={4}>
          <Form.Item
            name="leg-material"
            label="Ayak Malzemesi"
            rules={[
              { required: true, message: 'Lütfen Ayak Malzemesi Seçiniz' },
            ]}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
        <Col span={8} key={5}>
          <Form.Item
            name="table-material"
            label="Tabla Malzemesi"
            rules={[
              { required: true, message: 'Lütfen Tabla Malzemesi Seçiniz' },
            ]}
            style={{ width: '100%' }}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
        <Col span={8} key={6}>
          <Form.Item
            name="installation-status"
            label="Montaj Durumu"
            rules={[
              { required: true, message: 'Lütfen Montaj Durumu Seçiniz' },
            ]}
          >
            <SingleSelect options={optionsTest} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomProductCard;
