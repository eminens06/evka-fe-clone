import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card, Row, Col, Spin, Skeleton } from 'antd';
import { Bar } from 'react-chartjs-2';
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
import GET_ORDER_DATA, {
  KioskGetUserOrderListQuery,
} from '../../__generated__/KioskGetUserOrderListQuery.graphql';
import VastedTotal from './VastedTotal';
import DownloadDataModal from './DownloadDataModal';

const KioskPage: FunctionComponent = () => {
  const environment = useRelayEnvironment();
  const [sellComparsionData, setSellComparsionData] = useState<any>(null);
  const [monthlySalesData, setMonthlySalesData] = useState<any>(null);
  const [productSalesData, setProductSalesData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  const getChartsData = async () => {
    setLoading(true);
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

    const { userOrderList } = await fetchQuery<KioskGetUserOrderListQuery>(
      environment,
      GET_ORDER_DATA,
      {},
    );
    const sellComparisonParsed =
      sellComparison && JSON.parse(sellComparison[0] as string);
    setSellComparsionData(sellComparisonParsed);

    setMonthlySalesData(mappers.monthlySalesMapper(monthlySalesAverages));
    setProductSalesData(
      mappers.productBasedSalesMapper({ userOrderList: userOrderList }),
    );

    setLoading(false);
  };

  useEffect(() => {
    getChartsData();
  }, []);

  return (
    <>
      <Row gutter={24} style={{ padding: 16 }}>
        <Col span={6}>
          <ComparisonCard
            header="Satış Tarihi"
            title="Günlük Satış"
            subTitle="Dün Satış"
            value={sellComparsionData?.orderDate?.today.toFixed(2)}
            subValue={sellComparsionData?.orderDate?.yesterday.toFixed(2)}
            loading={loading}
          />
        </Col>
        <Col span={6}>
          <ComparisonCard
            header="Sevk Tarihi"
            title="Günlük Satış"
            subTitle="Dün Satış"
            value={sellComparsionData?.shipmentDate?.today.toFixed(2)}
            subValue={sellComparsionData?.shipmentDate?.yesterday.toFixed(2)}
            loading={loading}
          />
        </Col>
        <Col span={6}>
          <ComparisonCard
            header="Satış Tarihi"
            title="Aylık Satış"
            subTitle="Geçen Aylık Satış"
            value={sellComparsionData?.orderDate?.this_month.toFixed(2)}
            subValue={sellComparsionData?.orderDate?.last_month.toFixed(2)}
            loading={loading}
          />
        </Col>
        <Col span={6}>
          <ComparisonCard
            header="Sevk Tarihi"
            title="Aylık Satış"
            subTitle="Geçen Aylık Satış"
            value={sellComparsionData?.shipmentDate?.this_month.toFixed(2)}
            subValue={sellComparsionData?.shipmentDate?.last_month.toFixed(2)}
            loading={loading}
          />
        </Col>
      </Row>

      <Card style={{ margin: 16 }} title="Aylık Satış">
        <Row gutter={24}>
          <Col span={24}>
            {loading ? (
              <div style={{ height: 300, width: '100%' }}>
                <Skeleton />
              </div>
            ) : (
              <Bar
                data={monthlySalesData}
                options={{ maintainAspectRatio: false }}
                height={400}
              />
            )}
          </Col>
        </Row>
      </Card>

      <Card style={{ margin: 16 }} title="Pazaryeri Bazlı Satış Grafiği">
        <CumulativeAnnual />
      </Card>

      <Card style={{ margin: 16 }} title="Sevk Emir Bugün Girilen Siparişler">
        {loading ? (
          <div style={{ height: 300, width: '100%' }}>
            <Skeleton />
          </div>
        ) : (
          <ProductSalesTable data={productSalesData} />
        )}
      </Card>

      <Card style={{ margin: 16 }} title="Maliyet Analizi">
        <VastedTotal />
      </Card>

      <Card style={{ margin: 16 }} title="Verileri İndir">
        <DownloadDataModal />
      </Card>
    </>
  );
};

export default KioskPage;
