import React, { FunctionComponent } from 'react';
import { Card, Row, Col, DatePicker, Typography, Statistic } from 'antd';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import ComparisonCard from './ComparisonCard';
import { dateOptions, monthlySales } from './data';
import { SingleSelect } from '../../atoms';
import CumulativeAnnual from './CumulativeAnnual';
import ProductSalesTable from './ProductSalesTable';

const { Title } = Typography;

const KioskPage: FunctionComponent = () => {
  return (
    <>
      <Row gutter={24} style={{ padding: 16 }}>
        <Col span={4}>
          <ComparisonCard
            header="Satış Tarihi"
            title="Günlük Satış"
            subTitle="Dün Satış"
            value="12000"
            subValue="14000"
          />
        </Col>
        <Col span={4}>
          <ComparisonCard
            header="Satış Tarihi"
            title="Aylık Satış"
            subTitle="Geçen Aylık Satış"
            value="14000"
            subValue="10000"
          />
        </Col>
        <Col span={4}>
          <ComparisonCard
            header="Satış Tarihi"
            title="Yıllık Satış"
            subTitle="Geçen Yıllık Satış"
            value="12000"
            subValue="12000"
          />
        </Col>
        <Col span={4}>
          <ComparisonCard
            header="Sevk Tarihi"
            title="Günlük Satış"
            subTitle="Dün Satış"
            value="9000"
            subValue="14000"
          />
        </Col>
        <Col span={4}>
          <ComparisonCard
            header="Sevk Tarihi"
            title="Aylık Satış"
            subTitle="Geçen Aylık Satış"
            value="14000"
            subValue="190000"
          />
        </Col>
        <Col span={4}>
          <ComparisonCard
            header="Sevk Tarihi"
            title="Yıllık Satış"
            subTitle="Geçen Yıllık Satış"
            value="12000"
            subValue="8000"
          />
        </Col>
      </Row>

      <Card style={{ margin: 16 }} title="Aylık Ortalamalar">
        <Row gutter={24}>
          <Col span={24}>
            <Bar
              data={monthlySales}
              options={{ maintainAspectRatio: false }}
              height={400}
            />
          </Col>
        </Row>
      </Card>

      <Card style={{ margin: 16 }} title="Kümülatif Yıllık Grafik">
        <CumulativeAnnual />
      </Card>

      <Card style={{ margin: 16 }} title="Ürün Bazlı Satış Tablosu">
        <ProductSalesTable />
      </Card>
    </>
  );
};

export default KioskPage;
