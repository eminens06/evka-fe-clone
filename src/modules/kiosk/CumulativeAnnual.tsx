import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Row,
  Col,
  DatePicker,
  Typography,
  Statistic,
  Progress,
  Spin,
} from 'antd';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import { dateOptions } from './data';
import { SingleSelect } from '../../atoms';
import MARKETPLACE_TOTALS, {
  KioskMarketplaceTotalsQuery,
} from '../../__generated__/KioskMarketplaceTotalsQuery.graphql';
import mappers from '../../mappers';

const { Text } = Typography;

const CumulativeAnnual: FunctionComponent = () => {
  const environment = useRelayEnvironment();
  const [startDate, setStartDate] = useState<any>(moment().startOf('month'));
  const [endDate, setEndDate] = useState<any>(moment());
  const [qtype, setQType] = useState<string>(dateOptions[0].value);

  const [chartData, setChartData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const getChartData = async () => {
    setLoading(true);
    const { marketplaceTotals } = await fetchQuery<KioskMarketplaceTotalsQuery>(
      environment,
      MARKETPLACE_TOTALS,
      {
        startDate: startDate,
        endDate: endDate,
        qtype: qtype,
      },
      { force: true },
    );
    setLoading(false);
    setChartData(mappers.marketplaceTotalsMapper(marketplaceTotals as string));
  };

  useEffect(() => {
    getChartData();
  }, [startDate, endDate, qtype]);

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
          <Text>Tarihi Seçimi</Text>
          <SingleSelect
            options={dateOptions}
            defaultValue={dateOptions[0].value}
            style={{ width: '100%' }}
            onChange={setQType}
          />
        </Col>
      </Row>
      <Col span={24}>
        <div style={{ width: '100%' }}>
          <Line height={100} data={chartData?.data} />
        </div>
      </Col>
      <Row gutter={24}>
        <Col span={6}>
          <Statistic
            title="İptal Tutarı"
            value={chartData?.cancel_sum.toFixed(2)}
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="İade Tutarı"
            value={chartData?.return_sum.toFixed(2)}
          />
        </Col>
      </Row>
      {loading && (
        <div className="card-loader">
          <Spin />
        </div>
      )}
    </>
  );
};

export default CumulativeAnnual;
