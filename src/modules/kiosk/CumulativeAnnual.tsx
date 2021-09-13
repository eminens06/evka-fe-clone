import React, { FunctionComponent } from 'react';
import { Row, Col, DatePicker, Typography, Statistic, Progress } from 'antd';
import { Bar, Pie } from 'react-chartjs-2';
import moment from 'moment';
import { cumulativeAnnualData, dateOptions, monthlySales } from './data';
import { SingleSelect } from '../../atoms';

const { Text } = Typography;

const CumulativeAnnual: FunctionComponent = () => {
  return (
    <Row gutter={24}>
      <Col span={5}>
        <Row gutter={24}>
          <Col span={24}>
            <Text>Başlangıç Tarihi</Text>
            <DatePicker
              style={{ width: '100%' }}
              placeholder=""
              format={'DD-MM-YYYY'}
              defaultValue={moment().startOf('year')}
            />
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <Text>Bitiş Tarihi</Text>
            <DatePicker
              style={{ width: '100%' }}
              placeholder=""
              format={'DD-MM-YYYY'}
              defaultValue={moment()}
            />
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <Text>Tarihi Seçimi</Text>
            <SingleSelect
              options={dateOptions}
              defaultValue={'Sell'}
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
      </Col>
      <Col span={14}>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '80%' }}>
            <Pie data={cumulativeAnnualData} />
          </div>
        </Row>
      </Col>

      <Col span={5}>
        <Row gutter={24}>
          <Col span={8} offset={8}>
            <Statistic title="İptal Sayısı" value={112893} />
            <br />
            <Progress type="circle" percent={12} width={100} />
          </Col>
          <Col span={8} offset={8}>
            <br />
            <br />
            <Statistic title="İade Sayısı" value={112893} />
            <br />
            <Progress type="circle" percent={5} width={100} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CumulativeAnnual;
