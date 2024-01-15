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
import DownloadProductsDataModal from './DownloadProductsModal';
import GET_TOP_SELLING_DATA, {
  KioskTopSellingProductsQuery,
} from '../../__generated__/KioskTopSellingProductsQuery.graphql';
import moment from 'moment';
import TopSellingProducts from './TopSellingProducts';
import MarketplacesBonuses from './Marketplaces_Bonuses'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const KioskPage: FunctionComponent = () => {
  const environment = useRelayEnvironment();
  const [sellComparsionData, setSellComparsionData] = useState<any>(null);
  const [monthlySalesData, setMonthlySalesData] = useState<any>(null);
  const [productSalesData, setProductSalesData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [activeTab, setActiveTab] = useState('1');
  const tabStyle = {
    textAlign: 'center',
    fontSize: '20px',
    margin: '0 300px',
  };

  const getChartsData = async () => {
    if (activeTab !== '2') {
      return;
    }

    setLoading(true);
    const { userOrderList } = await fetchQuery<KioskGetUserOrderListQuery>(
      environment,
      GET_ORDER_DATA,
      {},
    );

    setProductSalesData(
      mappers.productBasedSalesMapper({ userOrderList: userOrderList }),
    );

    setLoading(false);
  };

  const getCommonData = async () => {
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
    const sellComparisonParsed =
      sellComparison && JSON.parse(sellComparison[0] as string);
    setSellComparsionData(sellComparisonParsed);

    setMonthlySalesData(mappers.monthlySalesMapper(monthlySalesAverages));

    setLoading(false);
  };

  useEffect(() => {
    getCommonData();
  }, []);

  useEffect(() => {
    if (activeTab === '2') {
      getChartsData();
    }
  }, [activeTab]);

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    if (key === '2') {
      getChartsData();
    }
  };
  return (

    <Tabs
      defaultActiveKey="1"
      onChange={handleTabChange}
      tabBarStyle={{ display: 'flex', justifyContent: 'center', fontSize: '200px' }}
    >

      <Tabs.TabPane tab={<div style={tabStyle}>Kiosk 1</div>} key="1">
        <Row gutter={24} style={{ padding: 16, margin: 0 }}>
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
              subTitle="Geçen Gün Bazında Geçen Aylık Satış"
              value={sellComparsionData?.orderDate?.this_month.toFixed(2)}
              subValue={sellComparsionData?.orderDate?.last_month.toFixed(2)}
              loading={loading}
            />
          </Col>
          <Col span={6}>
            <ComparisonCard
              header="Sevk Tarihi"
              title="Aylık Satış"
              subTitle="Geçen Gün Bazında Geçen Aylık Satış"
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
                monthlySalesData && (
                  <>
                    <Bar
                      data={monthlySalesData}
                      options={monthlySalesData.options}
                      height={75}
                    />
                    <p style={{ textAlign: 'center', fontSize: '20px' }}>
                      Aylık satış bazında satış oranı geçtiğimiz ayın ortalamasına göre <b>%{Math.abs(monthlySalesData.percentageChange.toFixed(2))}</b> oranında {monthlySalesData.percentageChange > 0 ? <b>yükselmiştir</b> : <b>düşmüştür</b>}.
                    </p>
                    <p style={{ textAlign: 'center', fontSize: '15px' }}>
                      (Makul bir kıyas güdebilmek için yukarıdaki değer ay sonu yaklaştığında dikkate alınmalıdır. Aksi taktirde yanlış bir kıyas yapılmış olacaktır.)
                    </p>
                  </>
                )
              )}
            </Col>
          </Row>
        </Card>

        <Card style={{ margin: 16 }} title="Pazaryeri Bazlı Satış Grafiği">
          <CumulativeAnnual />
        </Card>

        <Card style={{ margin: 16 }} title="Pazaryeri Bazlı Ürün Satış Grafiği">
          <TopSellingProducts />
        </Card>
      </Tabs.TabPane>
      <Tabs.TabPane tab={<div style={tabStyle}>Kiosk 2</div>} key="2">
        <Card style={{ margin: 16 }} title="Sevk Emri Bugün Girilen Siparişler">
          {loading ? (
            <div style={{ height: 300, width: '100%' }}>
              <Skeleton />
            </div>
          ) : (
            <ProductSalesTable data={productSalesData} />
          )}
        </Card>

        <Card style={{ margin: 16 }} title="Pazaryeri Mutabakat ve Prim Ekranı">
          <MarketplacesBonuses />
        </Card>

        <Card style={{ margin: 16 }} title="Maliyet Analizi">
          <VastedTotal />
        </Card>

        <Card style={{ margin: 16 }} title="Verileri İndir">
          <DownloadDataModal />
        </Card>

        <Card style={{ margin: 16 }} title="Bütün Ürünleri Güncelle">
          <DownloadProductsDataModal />
        </Card>

      </Tabs.TabPane>
    </Tabs>
  );
};

export default KioskPage;

