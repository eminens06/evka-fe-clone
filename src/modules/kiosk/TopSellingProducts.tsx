import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, DatePicker, Typography, Spin, Divider } from 'antd';
import moment from 'moment';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import { SingleSelect } from '../../atoms';
import GET_TOP_SELLING_DATA, {
  KioskTopSellingProductsQuery,
} from '../../__generated__/KioskTopSellingProductsQuery.graphql';
import { marketplaceOptions } from '../../utils/enums';
import { Table } from 'antd';
import mappers from '../../mappers';

const { Text } = Typography;

const getColumns = [
  {
    title: 'Ürün Adı',
    dataIndex: 'productName',
    width: 200,
  },
  {
    title: 'Adet',
    dataIndex: 'count',
    width: 100,
  },
];
const TopSellingProducts: FunctionComponent = () => {
  const environment = useRelayEnvironment();
  const [startDate, setStartDate] = useState<any>(moment().startOf('month'));
  const [endDate, setEndDate] = useState<any>(moment());
  const [marketplace, setMarketplace] = useState<string>(
    marketplaceOptions[0].value,
  );
  const { Summary } = Table;

  const [chartData, setChartData] = useState<any>(null);
  const [totalData, setTotalData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const getChartData = async () => {
    setLoading(true);

    const {
      topSellingProducts,
    } = await fetchQuery<KioskTopSellingProductsQuery>(
      environment,
      GET_TOP_SELLING_DATA,
      {
        startDate: startDate,
        endDate: endDate,
        marketplaceName: marketplace,
      },
      { force: true },
    );

    setChartData(mappers.topSellMapper(topSellingProducts));
    let total = 0;
    let myMappingFunction = (item: any) => total += JSON.parse(item as string)[1];
    if (topSellingProducts) {
      topSellingProducts.forEach(myMappingFunction);
      setTotalData(total);
    }
    setLoading(false);
  };

  useEffect(() => {
    getChartData();
  }, [startDate, endDate, marketplace]);

  return (
    <>
      <Row gutter={24}>
        <Col span={8}>
          <Text>Başlangıç Tarihi</Text>
          <DatePicker
            style={{ width: '100%' }}
            placeholder=""
            format={'DD-MM-YYYY'}
            defaultValue={moment().startOf('month')}
            onChange={setStartDate}
            allowClear={false}
          />
        </Col>
        <Col span={8}>
          <Text>Bitiş Tarihi</Text>
          <DatePicker
            style={{ width: '100%' }}
            placeholder=""
            format={'DD-MM-YYYY'}
            defaultValue={moment()}
            value={endDate}
            onChange={setEndDate}
            allowClear={false}
          />
        </Col>
        <Col span={8}>
          <Text>Pazaryeri Seçimi</Text>
          <SingleSelect
            options={marketplaceOptions}
            defaultValue={marketplaceOptions[0].value}
            style={{ width: '100%' }}
            onChange={setMarketplace}
          />
        </Col>
      </Row>
      <Divider />
      <Col span={24}>
        <div style={{ width: '100%' }}>
          <Table
            columns={getColumns}
            dataSource={chartData}
            size="middle"
            bordered
            summary={(pageData) => {
              console.log(pageData);
              let total = 0;

              pageData.forEach(({ count }) => {
                total += Number(count);
              });

              return (
                <>
                  <Summary.Row>
                    <Summary.Cell index={1}>Toplam</Summary.Cell>
                    <Summary.Cell index={2}>
                      <Text strong type="danger">
                        {totalData}
                      </Text>
                    </Summary.Cell>
                  </Summary.Row>
                </>
              );
            }}
          />
        </div>
      </Col>
      {loading && (
        <div className="card-loader">
          <Spin />
        </div>
      )}
    </>
  );
};

export default TopSellingProducts;
