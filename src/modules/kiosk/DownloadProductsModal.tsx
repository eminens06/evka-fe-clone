import React, { useState, useRef, useMemo } from 'react';
import { useMutation } from 'relay-hooks';
import { Row, Col, Button, Spin, Space, message } from 'antd';
import { useRouter } from 'next/router';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import mappers from '../../mappers';
import DOWNLOAD_PRODUCTS_QUERY, {
  KioskDownloadProductsQuery,
} from '../../__generated__/KioskDownloadProductsQuery.graphql';
import SEND_TO_BACKEND, {
  KioskUpdateProductsMutation,
} from '../../__generated__/KioskUpdateProductsMutation.graphql';

const DownloadProductsDataModal = () => {
  const environment = useRelayEnvironment();
  const [loading, setLoading] = useState(false);
  const [downloadProducts, setDownloadProducts] = useState<string | null>(null);
  const fileInputRef = useRef(null);
  const router = useRouter();

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
  const [updateProducts] = useMutation<KioskUpdateProductsMutation>(
    SEND_TO_BACKEND,
    {
      onError: (error: any) => {
        message.error('Ürünler güncellenirken hata ile karşılaşıldı', 10);
      },
      onCompleted: (res) => {
        if (res.updateProducts?.ok == false) {
          message.error('Ürünler güncellenirken hata ile karşılaşıldı!', 10);
        } else {
          message.success('Bütün ürünler başarıyla güncellendi!', 10);
        }
      },
    },
  );
  const triggerFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (evt) => {
      // Encode file content as Base64
      const base64String = evt.target.result.split(',')[1];
      sendToBackend(base64String);
    };

    // Read the file as Data URL so it can be easily converted to Base64
    reader.readAsDataURL(file);
  };

  const sendToBackend = (data) => {
    console.log("Sending Data to Backend:", data);

    updateProducts({
      variables: {
        input: { csvData: data },
      },
    });
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
            style={{ paddingLeft: '20px', height: '50px' }}
          >
            Bütün Ürünlere Ait Verileri İndir
          </Button>
        </Space>
        <Space direction="vertical" style={{ width: '50%', paddingLeft: '30px' }}>
          <Button
            type="primary"
            onClick={triggerFileInputClick} // Updated here
            size='large'
            block
            style={{ paddingLeft: '20px', height: '50px' }}
          >
            Ürün Reçetelerini Güncelle
          </Button>
          { }
          <input
            type="file"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
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