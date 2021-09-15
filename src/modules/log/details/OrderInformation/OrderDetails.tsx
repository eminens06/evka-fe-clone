import { Row, Col, Card, Typography } from 'antd';
import React, { FC } from 'react';
import { OrderLogDetail } from '../../types';

interface Props {
  data: OrderLogDetail;
}

const OrderDetails: FC<Props> = ({ data }) => {
  return (
    <Card title="Sipariş Bilgileri" bordered>
      <Row gutter={24} key={data.id}>
        <Col span={18}>
          <Row>
            <Typography.Text strong>Sipraiş Tipi:</Typography.Text>
            <Typography.Text>{data.orderType}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Pazaryeri:</Typography.Text>
            <Typography.Text>{data.marketplace}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Pazaryeri Sipariş No:</Typography.Text>
            <Typography.Text>{data.orderId}</Typography.Text>
          </Row>
          <br></br>
          <Row>
            <Typography.Text strong>Sipariş Tarihi:</Typography.Text>
            <Typography.Text>{data.orderDate}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Toplam Fiyat:</Typography.Text>
            <Typography.Text>{data.totalPrice} TL</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Komisyon Oranı:</Typography.Text>
            <Typography.Text>%{data.commissionRate}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Sipariş Durumu:</Typography.Text>
            <Typography.Text>{data.status}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Fatura Bilgisi:</Typography.Text>
            <Typography.Text>{data.invoiceInfo}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Sevk Tarihi:</Typography.Text>
            <Typography.Text>{data.shipmentOrderDate}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Kargo Numarası:</Typography.Text>
            <Typography.Text>{data.cargoChaseNumber}</Typography.Text>
          </Row>
        </Col>
        {data.notes && (
          <Col span={12}>
            <Typography.Text>{data.notes}</Typography.Text>
          </Col>
        )}
      </Row>
    </Card>
  );
};

export default OrderDetails;
