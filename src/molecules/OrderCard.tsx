import {
  Card,
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  InputNumber,
  FormInstance,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { FC, useEffect, useMemo } from 'react';
import { STORE_OR_NETWORK, useQuery } from 'relay-hooks';
import { SingleSelect } from '../atoms';
import { marketplacesDataMapper } from '../mappers';
import MARKETPLACES_QUERY, {
  OrdersAllMarketplacesQuery,
} from '../__generated__/OrdersAllMarketplacesQuery.graphql';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isAdmin?: boolean;
}

const OrderCard: FC<Props> = ({ form, initialValues, isAdmin }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  const isDisabled = useMemo(() => {
    return !isAdmin && initialValues;
  }, [isAdmin, initialValues]);

  const { error, data, isLoading } = useQuery<OrdersAllMarketplacesQuery>(
    MARKETPLACES_QUERY,
    {},
    { fetchPolicy: STORE_OR_NETWORK },
  );

  const marketplaces = useMemo(() => {
    if (data && !isLoading) {
      return marketplacesDataMapper(data);
    }
    return [];
  }, [data, isLoading]);

  const onMarketplaceChange = (value: string) => {
    const marketplace = JSON.parse(value);
    form.setFieldsValue({ commissionRate: marketplace.commissionRate });
    form.setFieldsValue({ orderDeliveryTime: marketplace.deliveryDate });
  };

  return (
    <Card title="Sipariş Bilgileri" bordered={false} className="form-card">
      <Row gutter={24}>
        <Col span={8} key={1}>
          <Form.Item
            name="marketplaceId"
            label="Pazaryeri"
            rules={[{ required: true, message: 'Lütfen Pazaryeri Seçiniz' }]}
          >
            <SingleSelect
              options={marketplaces}
              onChange={onMarketplaceChange}
              defaultValue={initialValues?.marketplaceId}
              disabled={isDisabled}
            />
          </Form.Item>
        </Col>
        <Col span={8} key={2}>
          <Form.Item
            name="marketplaceOrderId"
            label="Sipariş Numarası"
            rules={[
              { required: true, message: 'Lütfen Sipariş Numarası Giriniz' },
            ]}
            style={{ width: '100%' }}
          >
            <Input disabled={isDisabled} />
          </Form.Item>
        </Col>
        <Col span={8} key={3}>
          <Form.Item
            name="orderDate"
            label="Sipariş Tarihi"
            rules={[
              { required: true, message: 'Lütfen Sipariş Tarihi Seçiniz' },
            ]}
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
      <Row gutter={24}>
        <Col span={8} key={5}>
          <Form.Item
            name="commissionRate"
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
              style={{ width: '100%' }}
              disabled={isDisabled}
            />
          </Form.Item>
        </Col>
        <Col span={8} key={6}>
          <Form.Item
            name="orderDeliveryTime"
            label="Sipariş Teslim Süresi (Gün)"
            rules={[
              {
                required: true,
                message: 'Lütfen Sipariş Teslim Süresi Giriniz',
              },
            ]}
          >
            <InputNumber style={{ width: '100%' }} disabled={isDisabled} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={24} key={7}>
          <Form.Item name="notes" label="Notlar" style={{ width: '100%' }}>
            <TextArea rows={4} disabled={isDisabled} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default OrderCard;
