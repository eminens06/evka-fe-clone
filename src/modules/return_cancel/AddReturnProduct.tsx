import {
  Breadcrumb,
  Row,
  Form,
  Card,
  Col,
  DatePicker,
  Result,
  Button,
  message,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { Header } from 'antd/lib/layout/layout';
import Search from 'antd/lib/input/Search';
import React, { FC, useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { fetchQuery, useMutation } from 'relay-hooks';
import GET_USER_ORDER, {
  ReturnCancelRelayGetUserOrderQuery,
} from '../../__generated__/ReturnCancelRelayGetUserOrderQuery.graphql';
import environment from '../../relay/environment';
import mappers from '../../mappers';
import { SingleSelect } from '../../atoms';
import RETURN_ORDER, {
  ReturnCancelRelayCancelOrderMutation,
} from '../../__generated__/ReturnCancelRelayCancelOrderMutation.graphql';
import moment from 'moment';
import { useRouter } from 'next/router';
import useFullPageLoader from '../../hooks/useFullPageLoader';

const AddReturnProduct: FC = () => {
  const [form] = useForm();

  const router = useRouter();

  const [marketplaceOrderId, setMarketplaceOrderId] = useState<string>('');
  const [userOrderId, setUserOrderId] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [returnOrder] = useMutation<ReturnCancelRelayCancelOrderMutation>(
    RETURN_ORDER,
    {
      onError: (error: any) => {
        closeLoader();
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Başarıyla iade edildi');
        router.back();
      },
    },
  );

  const onFormFinish = (values: any) => {
    if (userOrderId) {
      openLoader();
      returnOrder({
        variables: {
          input: {
            productOrderIds: values.productOrderIds || [],
            returnNote: values.returnNote,
            userOrderId,
            returnedDate: moment(values.returnedDate).toDate(),
          },
        },
      });
    }
  };

  const getOrderId = async () => {
    if (marketplaceOrderId?.trim() === '') return;
    setIsLoading(true);
    const res = await fetchQuery<ReturnCancelRelayGetUserOrderQuery>(
      environment,
      GET_USER_ORDER,
      {
        id: marketplaceOrderId?.trim() as string,
      },
    );

    const data = mappers.genericTableDataMapper(res);
    if (data.length === 0) {
      setError(true);
      setIsLoading(false);
      return;
    }
    const selectbox = mappers.cancelModalProductMapper(data[0]);
    setProducts(selectbox);
    setUserOrderId(data[0].id);
    setIsLoading(false);
    setError(false);
  };

  const onSearch = (value: string) => {
    setMarketplaceOrderId(value);
    if (userOrderId) {
      setUserOrderId(undefined);
    }
    if (products) {
      setProducts([]);
    }
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Ürün İadesi</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Form form={form} name="basic" layout="vertical" onFinish={onFormFinish}>
        <Card bordered={false} className="form-card">
          <Row gutter={24}>
            <Col span={12} offset={4}>
              <Form.Item
                label="Pazaryeri Sipariş Numarası"
                name="market"
                rules={[{ required: true, message: 'Bu alan boş olamaz.' }]}
              >
                <Search
                  placeholder="Pazaryeri sipariş numarası giriniz..."
                  enterButton={<CheckCircleOutlined />}
                  size="middle"
                  onSearch={() => getOrderId()}
                  onChange={(e) => onSearch(e.target.value)}
                  loading={isLoading}
                  disabled={isLoading}
                />
              </Form.Item>
            </Col>
            {error && (
              <Col span={12} offset={4}>
                <Result
                  status="error"
                  title="Teslim edilmiş bu numaralı sipariş bulunamadı"
                />
              </Col>
            )}
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="İade Tarihi"
                name="returnedDate"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder=""
                  format={'DD-MM-YYYY'}
                  disabled={!userOrderId}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="İade Notları"
                name="returnNote"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <TextArea rows={4} disabled={!userOrderId} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            {products.length > 0 && (
              <Col span={12}>
                <Form.Item
                  name="productOrderIds"
                  label="İade Edilecek Ürünler"
                  rules={[{ required: true, message: 'Zorunlu alan' }]}
                >
                  <SingleSelect options={products} multiple />
                </Form.Item>
              </Col>
            )}
          </Row>
        </Card>
        <Row className="buttons-row">
          <Form.Item>
            <Button
              type="primary"
              danger
              htmlType="submit"
              disabled={!userOrderId}
            >
              İade Et
            </Button>
          </Form.Item>
        </Row>
      </Form>
      {loader}
    </>
  );
};

export default AddReturnProduct;
