import { Row, Col, Card, Typography, Button } from 'antd';
import React, { FC, useMemo, useState } from 'react';
import { ModuleTexts } from '../../helpers';
import { LogOrderProduct, LogExternalService } from '../../types';

interface Props {
  products: LogOrderProduct[];
}

const ProductInformation: FC<Props> = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = useMemo(() => {
    return products[activeIndex];
  }, [activeIndex, products]);

  const getServiceText = (service: LogExternalService) => {
    const type = ModuleTexts[service.module];
    const raw = service.isRawMaterial ? 'Hammadde' : '';
    return `${raw} ${type}: `;
  };

  return (
    <Card title={data.sku}>
      <Row gutter={24}>
        <Col span={12}>
          <Row>
            <Typography.Text strong>Ürün Adı:</Typography.Text>
            <Typography.Text>{data.name}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Ayak:</Typography.Text>
            <Typography.Text>{data.metaInfo?.AY}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text strong>Tabla:</Typography.Text>
            <Typography.Text>{data.metaInfo?.TB}</Typography.Text>
          </Row>
        </Col>
        <Col span={12}>
          <>
            {data.externalService.map((service, index) => {
              return (
                <Row key={index}>
                  <Typography.Text strong>
                    {getServiceText(service)}
                  </Typography.Text>
                  <Typography.Text>{service.name}</Typography.Text>
                </Row>
              );
            })}
          </>
        </Col>
        {products.length > 1 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button
              type="primary"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              Prev
            </Button>
            <Button
              type="primary"
              disabled={activeIndex === products.length - 1}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </Row>
    </Card>
  );
};

export default ProductInformation;
