import {
  Card,
  Form,
  Row,
  Col,
  Button,
  FormInstance,
  Tag,
  Result,
  InputNumber,
  Modal,
} from 'antd';
import Search from 'antd/lib/input/Search';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { FormListFieldData } from 'antd/lib/form/FormList';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import PRODUCTS_QUERY, {
  OrdersAllProductsQuery,
} from '../__generated__/OrdersAllProductsQuery.graphql';
import { metaProductsDTO, productDTO } from './types';
import ListProducts from '../modules/orders/ListProducts';
import { OrderTypes } from '../modules/orders/types';
import TextArea from 'antd/lib/input/TextArea';
interface Props {
  remove: () => void;
  field: FormListFieldData;
  form: FormInstance<any>;
  isDisabled: boolean;
  orderType: OrderTypes;
}

const offset: Record<OrderTypes, number> = {
  NR: 12,
  SP: 0,
  ST: 12,
};

const ProductCard: FC<Props> = ({
  remove,
  field,
  form,
  isDisabled,
  orderType,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showProductsTable, setShowProductsTable] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<productDTO | null>();
  const [selectedWithTable, setSelectWithTable] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  const [product, setProduct] = useState<any>(null);
  const [sku, setSku] = useState<string>();
  const environment = useRelayEnvironment();

  const getProductBySku = async () => {
    setIsLoading(true);
    const { allProducts } = await fetchQuery<OrdersAllProductsQuery>(
      environment,
      PRODUCTS_QUERY,
      {
        bySku: sku,
      },
    );
    if (allProducts && allProducts.edges.length === 1) {
      setProduct(allProducts.edges[0]);
    } else {
      const products = form.getFieldValue('products');
      products[field.name].productId = undefined;
      setSelectedProduct(null);
      form.setFieldsValue({ products: products });
      setIsLoading(false);
      setError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (product && product.node?.id) {
      const products = form.getFieldValue('products');
      products[field.name] = {
        productId: product.node?.id,
        sku: product.node?.sku,
        price: product.node?.price || undefined,
        count: product.node?.count || undefined,
        notes: product.node?.notes || '',
      };
      setSelectedProduct(product?.node);
      form.setFieldsValue({ products: products });
      setIsLoading(false);
      setError(false);
    }
  }, [product]);

  const initProducts = form.getFieldValue('products');
  if (!product && initProducts[field.name]?.productData) {
    setProduct({
      node: {
        ...initProducts[field.name],
        ...initProducts[field.name].productData,
      },
    });
  }

  const onApproveModal = () => {
    setProduct(selectedWithTable);
    setShowProductsTable(false);
  };

  const onCancelModal = () => {
    setShowProductsTable(false);
  };

  return (
    <Card
      title="Ürün Bilgileri"
      extra={
        <Button
          onClick={() => remove()}
          icon={<DeleteOutlined />}
          danger
          disabled={isDisabled}
        />
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
              onSearch={() => getProductBySku()}
              onChange={(e) => setSku(e.target.value)}
              loading={isLoading}
              disabled={isDisabled}
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
          <Button
            type="default"
            onClick={() => setShowProductsTable(true)}
            disabled={isDisabled}
          >
            Tablodan Bul
          </Button>
        </Col>
        <Modal
          visible={showProductsTable}
          title="Tüm Ürünler"
          width={'70%'}
          onCancel={() => onCancelModal()}
          footer={[
            <Button key="back" onClick={() => onCancelModal()}>
              Vazgeç
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => onApproveModal()}
              disabled={!selectedWithTable}
            >
              Kaydet
            </Button>,
          ]}
        >
          <ListProducts setSelectWithTable={setSelectWithTable} />
        </Modal>
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
        {orderType === 'SP' && (
          <Col span={12} key={`${field.fieldKey}-3`}>
            <Form.Item
              {...field}
              label="Notlar"
              name={[field.name, 'notes']}
              fieldKey={[field.fieldKey, 'notes']}
              rules={[{ required: true, message: 'Lütfen Not Giriniz' }]}
            >
              <TextArea rows={1} disabled={isDisabled} />
            </Form.Item>
          </Col>
        )}
        <Col span={6} offset={offset[orderType]} key={`${field.fieldKey}-4`}>
          <Form.Item
            {...field}
            label="Adet"
            name={[field.name, 'count']}
            fieldKey={[field.fieldKey, 'count']}
            rules={[{ required: true, message: 'Lütfen Adet Giriniz' }]}
          >
            <InputNumber
              min={1}
              style={{ width: '100%' }}
              disabled={isDisabled}
              decimalSeparator=","
            />
          </Form.Item>
        </Col>

        <Col span={6} key={`${field.fieldKey}-5`}>
          <Form.Item
            {...field}
            label="Birim Fiyat"
            name={[field.name, 'price']}
            fieldKey={[field.fieldKey, 'price']}
            rules={[{ required: true, message: 'Lütfen Fiyat Giriniz' }]}
          >
            <InputNumber
              min={0}
              style={{ width: '100%' }}
              disabled={isDisabled}
              decimalSeparator=","
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
