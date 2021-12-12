import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, DatePicker, Typography, Spin, Table, Divider } from 'antd';
import moment from 'moment';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import mappers from '../../mappers';
import VASTED_TOTALS, {
  KioskHakedisTotalQuery,
} from '../../__generated__/KioskHakedisTotalQuery.graphql';

const { Text } = Typography;

const maliyet_names: Record<string, string> = {
  ana_giderler: 'Malzeme Giderleri',
  hakedis: 'Hakedişler',
  insan_hakedis: 'Dış Hizmet Hakediş',
  fonlar: 'Fonlar',
};

const columns = [
  {
    title: 'Adı',
    dataIndex: 'title',
  },
  {
    title: 'Değer',
    dataIndex: 'data',
  },
];

const getColumns = (type: string) => {
  return [
    {
      title: maliyet_names[type],
      dataIndex: 'title',
      width: 200,
    },
    {
      title: 'Değer',
      dataIndex: 'data',
      width: 100,
    },
  ];
};

const VastedTotal: FunctionComponent = () => {
  const environment = useRelayEnvironment();
  const [startDate, setStartDate] = useState<any>(moment().startOf('month'));
  const [endDate, setEndDate] = useState<any>(moment());

  const [chartData, setChartData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const getChartData = async () => {
    setLoading(true);
    const { hakedisTotal } = await fetchQuery<KioskHakedisTotalQuery>(
      environment,
      VASTED_TOTALS,
      {
        startDate: startDate,
        endDate: endDate,
      },
      { force: true },
    );
    setLoading(false);
    setChartData(mappers.vastedMapper(hakedisTotal));
  };

  useEffect(() => {
    getChartData();
  }, [startDate, endDate]);

  return (
    <>
      <Row gutter={24}>
        <Col span={6}>
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
        <Col span={6}>
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
      </Row>
      <Divider />
      <Row gutter={24} style={{ paddingTop: 20 }}>
        {chartData &&
          Object.keys(chartData).map((item, index) => {
            return (
              <Col span={12}>
                <Table
                  columns={getColumns(item)}
                  dataSource={chartData[item]}
                  size="middle"
                  bordered
                />
                {index < 2 && <Divider />}
              </Col>
            );
          })}
      </Row>
      {loading && (
        <div className="card-loader">
          <Spin />
        </div>
      )}
    </>
  );
};

export default VastedTotal;
