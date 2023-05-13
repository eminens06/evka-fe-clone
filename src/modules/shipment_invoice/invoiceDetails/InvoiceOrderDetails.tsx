import { Card, Col, Row, Typography } from 'antd';
import React, { FC, useMemo } from 'react';
import { CustomerDTO, OrderProduct } from '../../orders/types';
import { KdvParams } from '../types';

interface Props {
  products: OrderProduct[];
  customerInfo: CustomerDTO;
  kdvDetails?: KdvParams;
}

const InvoiceOrderDetails: FC<Props> = ({
  products,
  customerInfo,
  kdvDetails,
}) => {
  const calculateKdv = (product: OrderProduct) => {
    const kdvRatio = kdvDetails[product.kdv];
    let kdv = 0;
    if (product.price && kdvRatio) {
      kdv = product.price - product.price / kdvRatio;
    }

    return kdv;
  };

  const { total, totalKdv } = useMemo(() => {
    let totalKdv = 0;
    const totalArr = products.map((product) => {
      if (kdvDetails) {
        totalKdv += calculateKdv(product);
      }
      return product.count * (product.price || 0);
    });
    let total = 0;
    totalArr.forEach((elem) => (total += elem));
    return { total, totalKdv };
  }, [products, kdvDetails]);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Card title="Ürün Bilgileri" bordered className="form-card">
          <>
            {products.map((product) => {
              return (
                <Row gutter={24} key={product.sku}>
                  <Col span={6}>
                    <Typography.Text strong>
                      {product.count} adet
                    </Typography.Text>
                  </Col>
                  <Col span={12}>
                    <Typography.Text strong>{product.name}</Typography.Text>
                  </Col>
                  <Col span={6}>
                    <Typography.Text strong>
                      {product.count * (product.price || 0)} TL
                    </Typography.Text>
                  </Col>
                </Row>
              );
            })}
            <br></br>
            <Row>
              <Col span={6}>
                <Typography.Text strong>Kdv Hariç</Typography.Text>
              </Col>
              <Col offset={12} span={6}>
                <Typography.Text>{(total - totalKdv).toFixed(2)} TL</Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Typography.Text strong>Kdv</Typography.Text>
              </Col>
              <Col offset={12} span={6}>
                <Typography.Text>{(totalKdv).toFixed(2)} TL</Typography.Text>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Typography.Text strong>Toplam</Typography.Text>
              </Col>
              <Col offset={12} span={6}>
                <Typography.Text>
                  {total} TL
                </Typography.Text>
              </Col>
            </Row>
          </>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Müşteri Bilgileri" bordered className="form-card">
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
            <Typography.Text strong>Fatura Adresi: </Typography.Text>
            <Typography.Text>{customerInfo.invoice_address}</Typography.Text>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default InvoiceOrderDetails;
