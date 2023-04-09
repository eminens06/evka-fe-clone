import { Row, Col, DatePicker, Typography, Button, Spin } from 'antd';
import React, { useMemo } from 'react';
import { useState } from 'react';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import mappers from '../../mappers';
import DOWNLOAD_QUERY, {
  KioskDownloadDataQuery,
} from '../../__generated__/KioskDownloadDataQuery.graphql';

const DownloadDataModal = () => {
  const environment = useRelayEnvironment();
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const { download } = await fetchQuery<KioskDownloadDataQuery>(
      environment,
      DOWNLOAD_QUERY,
      {
        startDate: startDate,
        endDate: endDate,
      },
      { force: true },
    );

    setLoading(false);
    let date1 = String(startDate).split(" ")[1] + "_" + String(startDate).split(" ")[2] + "_" + String(startDate).split(" ")[3];
    let date2 = String(endDate).split(" ")[1] + "_" + String(endDate).split(" ")[2] + "_" + String(endDate).split(" ")[3];
    console.log(mappers.downloadDataMapper(download, date1, date2));
  };

  const disabled = useMemo(() => {
    console.log(startDate === endDate);
    if (startDate && endDate && startDate !== endDate) {
      return false;
    }
    return true;
  }, [startDate, endDate]);

  return (
    <>
      <Row gutter={24}>
        <Col span={6}>
          <Typography.Text>Başlangıç Tarihi</Typography.Text>
          <DatePicker
            style={{ width: '100%' }}
            placeholder=""
            format={'DD-MM-YYYY'}
            value={startDate}
            onChange={setStartDate}
            allowClear={false}
          />
        </Col>
        <Col span={6}>
          <Typography.Text>Bitiş Tarihi</Typography.Text>
          <DatePicker
            style={{ width: '100%' }}
            placeholder=""
            format={'DD-MM-YYYY'}
            value={endDate}
            onChange={setEndDate}
            allowClear={false}
          />
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            disabled={disabled}
            onClick={getData}
            style={{ marginTop: 22 }}
          >
            İndir
          </Button>
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

export default DownloadDataModal;
