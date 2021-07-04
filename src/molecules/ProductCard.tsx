import {
  Card,
  Form,
  Row,
  Col,
  Select,
  Button,
  Input,
  FormInstance,
  Tag,
  Result,
  InputNumber,
} from 'antd';
import Search from 'antd/lib/input/Search';
import React, { FC, useEffect, useState } from 'react';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { FormListFieldData } from 'antd/lib/form/FormList';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import PRODUCTS_QUERY, {
  OrdersAllProductsQuery,
} from '../__generated__/OrdersAllProductsQuery.graphql';
import { metaProductsDTO, productDTO } from './types';

interface Props {
  remove: () => void;
  field: FormListFieldData;
  form: FormInstance<any>;
}

const ProductCard: FC<Props> = ({ remove, field, form }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<productDTO | null>();
  const [error, setError] = useState<boolean>(false);
  const environment = useRelayEnvironment();

  const getProductBySku = async (value: string) => {
    setIsLoading(true);
    const { allProducts } = await fetchQuery<OrdersAllProductsQuery>(
      environment,
      PRODUCTS_QUERY,
      {
        bySku: value,
      },
    );

    if (allProducts && allProducts?.edges.length > 0) {
      const products = form.getFieldValue('products');
      products[field.name].productId = allProducts.edges[0]?.node?.id;
      setError(false);
      setSelectedProduct(allProducts.edges[0]?.node);
      form.setFieldsValue({ products: products });
      setIsLoading(false);
    } else {
      const products = form.getFieldValue('products');
      products[field.name].productId = undefined;
      setError(true);
      setSelectedProduct(null);
      form.setFieldsValue({ products: products });
      setIsLoading(false);
    }
  };

  return (
    <Card
      title="Ürün Bilgileri"
      extra={
        <Button onClick={() => remove()} icon={<DeleteOutlined />} danger />
      }
      bordered={false}
      className="form-card"
    >
      <Row gutter={24}>
        <Col span={12} offset={4} key={`${field.fieldKey}-1`}>
          <Form.Item
            {...field}
            label="SKU"
            name={[field.name, 'sku']}
            fieldKey={[field.fieldKey, 'sku']}
          >
            <Search
              placeholder="EVKA-ZEMA-00111010441"
              allowClear
              enterButton={<CheckCircleOutlined />}
              size="middle"
              onSearch={(value) => getProductBySku(value)}
              loading={isLoading}
            />
          </Form.Item>
          <Form.Item
            {...field}
            name={[field.name, 'productId']}
            fieldKey={[field.fieldKey, 'productId']}
            hidden
          ></Form.Item>
        </Col>

        <Col span={4} key={`${field.fieldKey}-2`} className="find-table-btn">
          <Button type="default">Tablodan Bul</Button>
        </Col>
      </Row>
      {selectedProduct && (
        <Row gutter={24}>
          <Col span={12} offset={6}>
            <Result
              status="success"
              title={selectedProduct?.name}
              subTitle={selectedProduct?.metaProducts.edges.map(
                (item: metaProductsDTO | null) => (
                  <Tag>{item?.node?.materialName}</Tag>
                ),
              )}
            />
          </Col>
        </Row>
      )}
      {error && (
        <Row gutter={24}>
          <Col span={12} offset={6}>
            <Result
              status="error"
              title="Ürün bulunamadı"
              subTitle="Tekrar SKU girebilir ya da tablodan ürün seçebilirsiniz"
            />
          </Col>
        </Row>
      )}
      <Row gutter={24}>
        <Col span={6} offset={12} key={`${field.fieldKey}-3`}>
          <Form.Item
            {...field}
            label="Adet"
            name={[field.name, 'count']}
            fieldKey={[field.fieldKey, 'count']}
            rules={[{ required: true, message: 'Lütfen Adet Giriniz' }]}
          >
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
        </Col>

        <Col span={6} key={`${field.fieldKey}-4`}>
          <Form.Item
            {...field}
            label="Birim Fiyat"
            name={[field.name, 'price']}
            fieldKey={[field.fieldKey, 'price']}
            rules={[{ required: true, message: 'Lütfen Fiyat Giriniz' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
