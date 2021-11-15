import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Image,
  Layout,
  Row,
  Typography,
} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { PrinterOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import GET_TEMPLATE, {
  TemplateRelayDetailQuery,
} from '../../__generated__/TemplateRelayDetailQuery.graphql';
import mappers from '../../mappers';
import { TemplateData } from './types';

const TemplatePage: FunctionComponent = () => {
  const router = useRouter();
  const environment = useRelayEnvironment();

  const [data, setData] = useState<TemplateData>();

  const getProductDetail = async () => {
    const { productOrder } = await fetchQuery<TemplateRelayDetailQuery>(
      environment,
      GET_TEMPLATE,
      {
        id: router.query.id as string,
      },
    );

    if (productOrder) {
      const data = mappers.templateMapper(productOrder);
      setData(data);
    }
  };

  useEffect(() => {
    if (router?.query?.id) {
      getProductDetail();
    }
  }, [router]);

  const printProduct = () => {
    const imageContainer = document.getElementById(`image_0`);
    const img = imageContainer
      ?.getElementsByClassName('ant-image-img')[0]
      .getAttribute('src');

    const desc = document.getElementById('product-desc');
    const frame = window.open('', '', 'height=500, width=500');
    if (frame) {
      frame.document.write('<html>');
      frame.document.write('<style>img { padding: 30px; }</style>');
      frame.document.write('<body > ' + desc?.innerHTML + ' <br>');
      frame.document.write(`<img width='90%' src='` + img + `' />`);

      frame.document.write('</body></html>');
      frame.document.close();

      frame.print();
    }
  };

  if (!data) return null;
  return (
    <Layout>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px', float: 'left' }}>
          <Breadcrumb.Item>Şablon</Breadcrumb.Item>
        </Breadcrumb>
        <Button
          type="primary"
          icon={<PrinterOutlined />}
          style={{ marginTop: '16px', float: 'right' }}
          onClick={() => printProduct()}
        >
          Şablonu Yazdır
        </Button>
      </Header>
      <Card
        id="product-desc"
        title="Özellikleri"
        bordered={false}
        className="template-card"
      >
        <Row gutter={24}>
          <Col span={12}>
            <Row>
              <Typography.Text strong>SKU:</Typography.Text>
              <Typography.Text>{data.sku}</Typography.Text>
            </Row>
            <Row>
              <Typography.Text strong>ADI:</Typography.Text>
              <Typography.Text>{data.name}</Typography.Text>
            </Row>
            <Row>
              <Typography.Text strong>Ayak Malzemesi:</Typography.Text>
              <Typography.Text>{data.ayak}</Typography.Text>
            </Row>
            <Row>
              <Typography.Text strong>Tabla Malzemesi:</Typography.Text>
              <Typography.Text>{data.tabla}</Typography.Text>
            </Row>
            <Row>
              <Typography.Text strong>Ölçü:</Typography.Text>
              <Typography.Text>{data.measure}</Typography.Text>
            </Row>
          </Col>
          {data.notes && (
            <Col span={12}>
              <Typography.Title level={5}>
                ÖZEL SİPARİŞ NOTALRI !!!!
              </Typography.Title>
              <Typography.Text>{data.notes}</Typography.Text>
            </Col>
          )}
        </Row>
      </Card>
      <Card title="Resimler" bordered={false} className="form-card">
        <Row gutter={24}>
          {data.imageList.map((img, index) => {
            return (
              <Image
                key={`image_${index}`}
                width={300}
                style={{ padding: 20 }}
                src={img}
                id={`image_${index}`}
              />
            );
          })}
        </Row>
      </Card>
    </Layout>
  );
};

export default TemplatePage;
