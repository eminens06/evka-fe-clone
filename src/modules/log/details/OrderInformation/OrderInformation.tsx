import { Row, Col } from 'antd';
import React, { FC } from 'react';
import { OrderLogDetail } from '../../types';
import CustomerDetails from './CustomerDetails';
import OrderDetails from './OrderDetails';

interface Props {
  data: OrderLogDetail;
}

const OrderInformation: FC<Props> = ({ data }) => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <OrderDetails data={data} />
      </Col>
      <Col span={12}>
        <CustomerDetails customerInfo={data.customerInfo} />
      </Col>
    </Row>
  );
};

export default OrderInformation;
