import { Row, Col, Card, Typography } from 'antd';
import React, { FC } from 'react';
import { CustomerDTO } from '../../../orders/types';

interface Props {
  customerInfo: CustomerDTO;
}

const CustomerDetails: FC<Props> = ({ customerInfo }) => {
  return (
    <Card title="Müşteri Bilgileri" bordered>
      <Row gutter={24}>
        <Col span={24}>
          <Row>
            <Typography.Text strong>Müşteri Tipi: </Typography.Text>
            <Typography.Text>
              {customerInfo.is_corporate ? 'Kurumsal' : 'Bireysel'}
            </Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>
              {customerInfo.is_corporate ? 'Vergi No: ' : 'TC Kimlik No: '}
            </Typography.Text>
            <Typography.Text>{customerInfo.tc}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>
              {customerInfo.is_corporate ? 'Şirket Adı: ' : 'Adı Soyadı: '}
            </Typography.Text>
            <Typography.Text>{customerInfo.name}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Telefon: </Typography.Text>
            <Typography.Text>{customerInfo.phone_number}</Typography.Text>
          </Row>
          <br></br>
          <Row>
            <Typography.Text strong>Müşteri Adresi: </Typography.Text>
            <Typography.Text>{customerInfo.delivery_address}</Typography.Text>
          </Row>
          <br></br>
          <Row>
            <Typography.Text strong>Fatura Adresi: </Typography.Text>
            <Typography.Text>{customerInfo.invoice_address}</Typography.Text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomerDetails;
