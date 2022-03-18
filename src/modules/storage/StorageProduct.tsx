import {
  Card,
  Form,
  Row,
  Col,
  Button,
  FormInstance,
  Tag,
  Result,
  Modal,
} from 'antd';
import Search from 'antd/lib/input/Search';
import React, { FC, useEffect, useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import { productDTO } from '../../molecules/types';
import ListProducts from '../orders/ListProducts';
import PRODUCTS_QUERY, {
  OrdersAllProductsQuery,
} from '../../__generated__/OrdersAllProductsQuery.graphql';
interface Props {
  form: FormInstance<any>;
  isDisabled: boolean;
  isEdit?: boolean;
}

const StorageProduct: FC<Props> = ({ form, isDisabled, isEdit }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showProductsTable, setShowProductsTable] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<productDTO | null>();
  const [selectedWithTable, setSelectWithTable] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  const [product, setProduct] = useState<any>(null);
  const [sku, setSku] = useState<string>();
  const environment = useRelayEnvironment();

  const getProductBySku = async () => {
    setIsLoading(false);
    const { allProducts } = await fetchQuery<OrdersAllProductsQuery>(
      environment,
      PRODUCTS_QUERY,
      {
        bySku: sku,
      },
    );
    if (allProducts && allProducts.edges.length === 1) {
      setProduct(allProducts.edges[0]?.node);
    } else {
      form.setFieldsValue({ product: undefined });
      setSelectedProduct(null);
      setIsLoading(false);
      setError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);

      setIsLoading(false);
      setError(false);
      form.setFieldsValue({ product: product, sku: product.sku });
    }
  }, [product]);

  const onApproveModal = () => {
    setProduct(selectedWithTable.node);
    setShowProductsTable(false);
  };

  const onCancelModal = () => {
    setShowProductsTable(false);
  };

  const initProduct = form.getFieldValue('product');

  if (!product && initProduct) {
    setProduct({ ...initProduct });
  }

  return (
    <>
      <Row gutter={24}>
        <Col span={12} offset={4}>
          <Form.Item label="SKU" name={'sku'}>
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
          <Form.Item name={'product'} required hidden></Form.Item>
        </Col>

        <Col span={4} className="find-table-btn">
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
            <Result status="success" title={selectedProduct.name} />
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
    </>
  );
};

export default StorageProduct;
