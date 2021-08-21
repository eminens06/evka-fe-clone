import { Row, Col, Card, Button, Badge, Descriptions } from 'antd';
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
    return `${raw} ${type} `;
  };

  return (
    <>
      <Card title={data.sku}>
        <Row gutter={24}>
          <Col span={24}>
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label="Ürün Adı">
                {data.name}
              </Descriptions.Item>
              <Descriptions.Item label="Ayak">
                {data.metaInfo?.AY}
              </Descriptions.Item>
              <Descriptions.Item label="Tabla">
                {data.metaInfo?.TB}
              </Descriptions.Item>
              {data.externalService.map((service, index) => {
                return (
                  <Descriptions.Item label={getServiceText(service)}>
                    {service.name}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </Col>
        </Row>
      </Card>

      {products.length > 1 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            type="primary"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
            style={{ margin: 10 }}
          >
            {'< Önceki'}
          </Button>
          <Badge
            count={activeIndex + 1}
            style={{ backgroundColor: '#65949c' }}
          />
          <Button
            type="primary"
            disabled={activeIndex === products.length - 1}
            onClick={() => setActiveIndex(activeIndex + 1)}
            style={{ margin: 10 }}
          >
            {'Sonraki >'}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductInformation;
