import {
  Card,
  Form,
  Row,
  Col,
  Button,
  FormInstance,
  Tag,
  Result,
  Input,
  InputNumber,
  Modal,
  message,
} from 'antd';
import {
  storageOrderMapper
} from '../mappers';
import Search from 'antd/lib/input/Search';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRelayEnvironment, fetchQuery, useMutation } from 'relay-hooks';
import PRODUCTS_QUERY, {
  OrdersAllProductsQuery,
} from '../__generated__/OrdersAllProductsQuery.graphql';
import { metaProductsDTO, productDTO } from './types';
import ListProducts from '../modules/orders/ListProducts';
import TextArea from 'antd/lib/input/TextArea';
interface Props {
  isDisabled: boolean;
}
import CREATE_ORDER, {
  OrdersCreateOrderMutation,
} from '../__generated__/OrdersCreateOrderMutation.graphql';
import { last } from 'lodash';

const ProductCardForModal: FC<Props> = ({ isDisabled }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showProductsTable, setShowProductsTable] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any>();
  const [selectedWithTable, setSelectWithTable] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [set, setSet] = useState<any>();
  const [product, setProduct] = useState<any>(null);
  const [sku, setSku] = useState<string>();
  const environment = useRelayEnvironment();
  const [form] = Form.useForm();
  const [acquiredData, setAcquiredData] = useState<any>();

  const [lastData, setLastData] = useState<any>();
  const getProductBySku = async () => {
    setIsLoading(true);
    const { allProducts } = await fetchQuery<OrdersAllProductsQuery>(
      environment,
      PRODUCTS_QUERY,
      {
        bySku: sku,
      },
    );

    setIsLoading(false);
  };
  function sleep(milliseconds: any) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  const onFinish = async (values: any) => {
    const acquiredData = {
      productId: selectedWithTable?.node?.id,
      productSKU: selectedWithTable?.node?.sku,
      productSKUPart: selectedWithTable?.node?.sku.split("-")[1],
      count: values.adet,
      notes: values.notlar,
      konum: values.konum,
    };
    const orderData = storageOrderMapper(acquiredData);

    createOrder({
      variables: {
        input: { ...orderData },
      },
    });
  };
  const onApproveModal = () => {
    setSelectedProduct(selectedWithTable);
    form.setFieldsValue({ sku: selectedWithTable?.node?.sku });
    setShowProductsTable(false);
  };
  const [createOrder] = useMutation<OrdersCreateOrderMutation>(CREATE_ORDER, {
    onError: (error: any) => {
      if (error && error.graphQLErrors && error.graphQLErrors.length > 0) {
        message.error('Hata! ', error.graphQLErrors[0].message);
      } else {
        message.error('Depoya sipariş oluşturulurken hata meydana geldi.');
      }
    },
    onCompleted: (res) => {
      message.success('Siparişiniz başarıyla oluşturuldu');
      form.resetFields();
      setLastData(null); // Reset lastData
      //router.back();
    },
  });
  const siparisGir = async () => {
    const values = await form.validateFields(); // Validate form fields and get values
    onFinish(values); // Call onFinish with the form values
  };
  const onCancelModal = () => {
    setShowProductsTable(false);
  };

  return (
    <Card title="Ürün Bilgileri" bordered={false} className="form-card">

      <Row gutter={16}>
        <Col span={24}>
          <Row gutter={16}>
            <Col span={18}>
              <Form form={form} onFinish={onFinish} >
                <Form.Item
                  label="SKU"
                  name="sku"
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 16 }}
                  rules={[{ required: true, message: 'Lütfen SKU giriniz' }]}
                  style={{ marginBottom: 0 }}
                >
                  <Search
                    placeholder="SKU Seçimini Lütfen Tablodan Seçerek Gerçekleştiriniz"
                    allowClear
                    enterButton={<CheckCircleOutlined />}
                    size="large"
                    onSearch={() => getProductBySku()}
                    onChange={(e) => setSku(e.target.value)}
                    loading={isLoading}
                    disabled={true}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Form>
            </Col>
            <Col span={4}>
              <Button
                type="default"
                size='large'
                onClick={() => setShowProductsTable(true)}
                disabled={isDisabled}
              >
                Tablodan Bul
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

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
            onClick={onApproveModal}
            disabled={!selectedWithTable}
          >
            Kaydet
          </Button>,
        ]}
      >
        <ListProducts setSelectWithTable={setSelectWithTable} />
      </Modal>
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
        <Form
          form={form}
          onFinish={onFinish}
          size={'large'}
          layout="horizontal"
        >
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                label="Adet"
                name="adet"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 6 }}
                rules={[{ required: true, message: 'Lütfen Adet Giriniz' }]}
                style={{ marginTop: '18px' }}
              >
                <InputNumber
                  min={1}
                  max={50}
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                  decimalSeparator=","
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Depodaki Konum"
                name="konum"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[{ required: false, message: 'Lütfen Fiyat Giriniz' }]}
              >
                <Input
                  min={0}
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                  placeholder="Opsiyonel"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Notlar"
                name="notlar"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                rules={[{ required: false, message: 'Lütfen Fiyat Giriniz' }]}
              >
                <Input
                  min={0}
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                  placeholder="Opsiyonel"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button onClick={siparisGir} size='large' type="primary" style={{ width: '50%' }}>Sipariş Gir</Button>
      </div>
    </Card>
  );
};

export default ProductCardForModal;
