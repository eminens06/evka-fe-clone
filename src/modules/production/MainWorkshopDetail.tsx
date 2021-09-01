import { Card, Col, Row, Typography } from 'antd';
import React, { FC, useMemo } from 'react';

interface Props {
  productName: string;
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  type: 'Tabla' | 'Ayak';
  materialName: string;
}

const MainWorkshopDetail: FC<Props> = ({
  productName,
  dimensions,
  type,
  materialName,
}) => {
  const header = useMemo(() => {
    return `${materialName} ${type}`;
  }, [materialName, type]);

  const getDimensionsText = () => {
    return `En: ${dimensions.width} mm / Yükseklik: ${dimensions.height} mm / Uzunluk: ${dimensions.length} mm`;
  };

  return (
    <Row gutter={24}>
      <Col span={24}>
        <Card title="Parça Bilgileri" bordered className="form-card">
          <Typography.Title level={5}>{header}</Typography.Title>
          <br></br>
          <Typography.Text>Ürün Adı: {productName}</Typography.Text>
          <br></br>
          <br></br>
          <Typography.Text>{getDimensionsText()}</Typography.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default MainWorkshopDetail;
