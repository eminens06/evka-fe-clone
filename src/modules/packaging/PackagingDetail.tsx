import { Card, Col, Row, Typography } from 'antd';
import React, { FC, useMemo } from 'react';

interface Props {
  productName: string;
  isMonte: boolean;
  packageCount: number;
}

enum Status {
  DONE = 'Monte',
  NOT_DONE = 'Demonte',
}

const PackagingDetail: FC<Props> = ({ productName, isMonte, packageCount }) => {
  const isMonteText = useMemo(() => {
    return isMonte ? Status.DONE : Status.NOT_DONE;
  }, [isMonte]);
  return (
    <Row gutter={24}>
      <Col span={24}>
        <Card title="Ürün Bilgileri" bordered className="form-card">
          <Typography.Title level={5}>{productName}</Typography.Title>
          <br></br>
          <Typography.Text>Montaj Durumu: {isMonteText}</Typography.Text>
          <br></br>
          <Typography.Text>Paket Sayısı: {packageCount}</Typography.Text>
          <br></br>
        </Card>
      </Col>
    </Row>
  );
};

export default PackagingDetail;
