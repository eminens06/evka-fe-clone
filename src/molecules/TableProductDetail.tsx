import { Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import Status from '../atoms/Status';
import { ManagementProductMapper } from '../modules/shipment_invoice/helpers';
import { ShipmentManagementTableProduct } from '../modules/shipment_invoice/types';

interface Props {
  values: ShipmentManagementTableProduct[];
}

const TableProductDetail: FC<Props> = ({ values }) => {
  return (
    <>
      {values.map(({ name, status }) => {
        return (
          <Row gutter={24}>
            <Col span={4} offset={8}>
              <Typography.Text>{name}</Typography.Text>
            </Col>
            <Col span={4}>
              <Status
                status={ManagementProductMapper[status].status}
                text={ManagementProductMapper[status].text}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default TableProductDetail;
