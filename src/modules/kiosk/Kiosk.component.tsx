import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import ComparisonCard from './ComparisonCard';
import CumulativeAnnual from './CumulativeAnnual';
import ProductSalesTable from './ProductSalesTable';
import GET_CARD_DATA, {
  KioskSellComparisonQuery,
} from '../../__generated__/KioskSellComparisonQuery.graphql';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import GET_SALES_DATA, {
  KioskMonthlySalesAveragesQuery,
} from '../../__generated__/KioskMonthlySalesAveragesQuery.graphql';
import mappers from '../../mappers';

const KioskPage: FunctionComponent = () => {
  const environment = useRelayEnvironment();
  const [sellComparsionData, setSellComparsionData] = useState<any>(null);
  const [monthlySalesData, setMonthlySalesData] = useState<any>(null);

  const getChartsData = async () => {
    const { sellComparison } = await fetchQuery<KioskSellComparisonQuery>(
      environment,
      GET_CARD_DATA,
      {},
    );

    const {
      monthlySalesAverages,
    } = await fetchQuery<KioskMonthlySalesAveragesQuery>(
      environment,
      GET_SALES_DATA,
      {},
    );

    const sellComparisonParsed =
      sellComparison && JSON.parse(sellComparison[0] as string);
    setSellComparsionData(sellComparisonParsed);

    setMonthlySalesData(mappers.monthlySalesMapper(monthlySalesAverages));
  };

  useEffect(() => {
    getChartsData();
  }, []);

  return (
    <>
      {sellComparsionData && (
        <Row gutter={24} style={{ padding: 16 }}>
          <Col span={6}>
            <ComparisonCard
              header="Satış Tarihi"
              title="Günlük Satış"
              subTitle="Dün Satış"
              value={sellComparsionData?.orderDate?.today.toFixed(2)}
              subValue={sellComparsionData?.orderDate?.yesterday.toFixed(2)}
            />
          </Col>
          <Col span={6}>
            <ComparisonCard
              header="Sevk Tarihi"
              title="Günlük Satış"
              subTitle="Dün Satış"
              value={sellComparsionData?.shipmentDate?.today.toFixed(2)}
              subValue={sellComparsionData?.shipmentDate?.yesterday.toFixed(2)}
            />
          </Col>
          <Col span={6}>
            <ComparisonCard
              header="Satış Tarihi"
              title="Aylık Satış"
              subTitle="Geçen Aylık Satış"
              value={sellComparsionData?.orderDate?.this_month.toFixed(2)}
              subValue={sellComparsionData?.orderDate?.last_month.toFixed(2)}
            />
          </Col>
          <Col span={6}>
            <ComparisonCard
              header="Sevk Tarihi"
              title="Aylık Satış"
              subTitle="Geçen Aylık Satış"
              value={sellComparsionData?.shipmentDate?.this_month.toFixed(2)}
              subValue={sellComparsionData?.shipmentDate?.last_month.toFixed(2)}
            />
          </Col>
          {/*
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
              title="Yıllık Satış"
              subTitle="Geçen Yıllık Satış"
              value="12000"
              subValue="8000"
            />
          </Col>*/}
        </Row>
      )}

      <Card style={{ margin: 16 }} title="Aylık Satış">
        <Row gutter={24}>
          <Col span={24}>
            <Bar
              data={monthlySalesData}
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
