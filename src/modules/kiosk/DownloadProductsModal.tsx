import { Row, Col, Button, Spin, Space } from 'antd';
import React, { useMemo } from 'react';
import { useState } from 'react';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import mappers from '../../mappers';
import DOWNLOAD_PRODUCTS_QUERY, {
  KioskDownloadProductsQuery,
} from '../../__generated__/KioskDownloadProductsQuery.graphql';

const DownloadProductsDataModal = () => {
  const environment = useRelayEnvironment();
  const [loading, setLoading] = useState(false);
  const [downloadProducts, setDownloadProducts] = useState<string | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetchQuery<KioskDownloadProductsQuery>(
        environment,
        DOWNLOAD_PRODUCTS_QUERY,
        {},
        { force: true },
      );
      mappers.downloadProductsDataMapper(response)
    } catch (error) {
      console.error("Error fetching downloadProducts:", error);
    } finally {
      setLoading(false);
    }
  };

    return (
    <>
      <Row gutter={24}>
      <Space direction="vertical" style={{ width: '50%', paddingLeft: '30px' }}>
          <Button
            type="primary"
            onClick={getData}
            size='large'
            block
            style={{ paddingLeft: '20px', height: '50px'  }}

          >
            Bütün Ürünlere Ait Verileri İndir
          </Button>
          </Space>
          <Space direction="vertical" style={{ width: '50%', paddingLeft: '30px' }}>
          <Button
            type="primary"
            onClick={getData}
            size='large'
            block
            style={{ paddingLeft: '20px', height: '50px'  }}

          >
            Ürün Reçetelerini Güncelle
          </Button>
          </Space>

      </Row>
      {loading && (
        <div className="card-loader">
          <Spin />
        </div>
      )}
    </>
  );
};

export default DownloadProductsDataModal;
