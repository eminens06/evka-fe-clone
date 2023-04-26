import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, DatePicker, Typography, Spin, Table, Divider, Modal , Badge, Descriptions, Space, Card } from 'antd';
import moment from 'moment';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import { PieChartTwoTone } from '@ant-design/icons'
import mappers from '../../mappers';
import type { ColumnsType } from 'antd/es/table';
import VASTED_TOTALS, {
  KioskHakedisTotalQuery,
} from '../../__generated__/KioskHakedisTotalQuery.graphql';
import EXTERNAL_TOTALS, {
  KioskExternalHakedisQuery,
} from '../../__generated__/KioskExternalHakedisQuery.graphql';

import { Button } from 'antd';
const { Text } = Typography;
const { Title } = Typography;
const maliyet_names: Record<string, string> = {
  ana_giderler: 'Malzeme Giderleri',
  hakedis: 'Hakedişler',
  insan_hakedis: 'Dış Hizmet Hakedişleri',
  fonlar: 'Fonlar',
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Adı',
    dataIndex: 'title',
  },
  {
    title: 'Değer',
    dataIndex: 'data',
  },
];


const VastedTotal: FunctionComponent = () => {
  let itemNum = 0;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isExternalModalVisible, setIsExternalModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const [externalModalData, setExternalModalData] = useState<any>();
  const [externalTableData, setExternalTableData] = useState<any>();
  const environment = useRelayEnvironment();
  const [startDate, setStartDate] = useState<any>(moment().startOf('month'));
  const [endDate, setEndDate] = useState<any>(moment());

  const [chartData, setChartData] = useState<any>(null);
  const [externalData, setExternalData] = useState<any>(null);
  const externalModalColumns: any = [
    {
      title: 'Sipariş Tarihi',
      dataIndex: 'siparis_tarihi',
    },
    {
      title: 'Pazaryeri Sipariş Numarası',
      dataIndex: 'siparis_pazaryeri_kodu',
    },
    {
      title: 'Üretilen Ürün',
      dataIndex: 'uretilen_urun',
    },
    {
      title: 'Sipariş Toplam Tutarı',
      dataIndex: 'siparis_toplam_tutari',
      sorter: (a, b) => parseInt(a.siparis_toplam_tutari.split(" ")[0])- parseInt(b.siparis_toplam_tutari.split(" ")[0]),
    },
    {
      title: 'Sipariş Hakediş Değeri',
      dataIndex: 'siparis_hakedis',
      sorter: (a, b) => parseInt(a.siparis_hakedis.split(" ")[0])- parseInt(b.siparis_hakedis.split(" ")[0]),
    },
  ]
  const externalColumns: any = [
    {
      title: 'Hizmet Sağlayıcısı',
      dataIndex: 'title',
      width: 200,
      sorter: (a, b) => a.title.toLowerCase().charCodeAt(0) - b.title.toLowerCase().charCodeAt(0),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Hakediş Değeri',
      dataIndex: 'total_cost',
      width: 250,
      sorter: (a, b) => parseInt(a.total_cost.split(" ")[0])- parseInt(b.total_cost.split(" ")[0]),
      sortDirections: ['descend', 'ascend'],
    },
    {
      width: 270,
      render: (recordd: any) => (
        <Space direction='vertical' style={{width: '100%'}}>
        <Button type="default" onClick={() => onExternalTableClick(recordd)} icon={<PieChartTwoTone />} block>
          Hakediş Ayrıntılarını Göster
        </Button>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
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
         
      ];};


  const hideModal = () => {
    setIsModalVisible(false);
  };
  const hideExternalModal = () => {
    setIsExternalModalVisible(false);
  };
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
  const getExternalData = async () => {
    setLoading(true);
    const { externalHakedis } = await fetchQuery<KioskExternalHakedisQuery>(
      environment,
      EXTERNAL_TOTALS,
      {
        startDate: startDate,
        endDate: endDate,
      },
      { force: true },
    );
    setLoading(false);
    setExternalData(mappers.externalHakedisMapper(externalHakedis));
  };
  useEffect(() => {
    getExternalData();
  }, [startDate, endDate]);
  const onExternalTableClick = (data: any) => {
    setExternalModalData({ ...data });
    setExternalTableData(mappers.externalModalDataMapper({ ...data }))
    setIsExternalModalVisible(true);
  };
  const onTableClick = (data: any) => {
    setModalData({ ...data });
    setIsModalVisible(true);
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
                  size="small"
                  bordered
                  pagination={{
                    showSizeChanger: true,
                    defaultPageSize:10,
                    defaultCurrent:1,
                  }}
                />
                {index < 2 && <Divider />}
              </Col>
            );
          })}
                </Row> 
              <Title level={4} underline={true}>Dış Hizmetler Hakedişleri</Title>
              <Card title="Dış Hizmet Hakediş Güncelleme Notları (Kısa süre içerisinde silinecektir)" size="small" style={{ paddingBottom: 10 }} >
                <p>* Dış hizmetler üretilen ürünler özelinde yataylara ayrıldı ve çeşitli bilgiler görüntülenebilir hale getirildi.</p>
                <p>* Hem modal içerisinde hem de asıl tabloda isme ve sipariş tutarlarına göre sort özelliği eklendi. Sort özelliği 3 kademelidir: azalan, artan ve orijinal sıralama.</p>
                <p>* Veriler açısından kıyas yapılması maksadıyla eski dış hizmet hakedişleri şimdilik olduğu gibi bırakılmıştır.</p>
                <p>* Hakediş bedelleri şu an için eksik hesaplanmaktadır. Son olarak dış hizmet hakedişleri için tarih aralığını yukardan seçebilirsiniz.</p>
              </Card >
          
              <Table //External Hakediş Table
                  columns={externalColumns}
                  dataSource={externalData}
                  size="small"
                  bordered
                  pagination={{
                    showSizeChanger: true,
                    defaultPageSize:20,
                    defaultCurrent:1,
                  }}
                />

    {externalModalData && (
      <Modal //external modal
      visible={isExternalModalVisible}
      title={'Hakediş Ayrıntıları'}
      width={'70%'}
      onCancel={hideExternalModal}
      cancelText="Pencereyi Kapat"
      footer={[<Button key="back" type='primary' onClick={hideExternalModal}>
        Geri Dön
      </Button>]}>
      
      <Descriptions title={"Hizmet Alınan Kişi:  ".concat(externalModalData.title)} bordered>
        <Descriptions.Item label="Hizmet Alınan Sipariş Adeti">{externalModalData.siparis_adet} adet sipariş</Descriptions.Item>
        <Descriptions.Item label="Toplam Hizmet Ödeme Tutarı"><strong>{externalModalData.total_cost}</strong></Descriptions.Item>
      </Descriptions>
      <Row gutter={24} style={{ paddingTop: 20 }}></Row>
      <Table 
                  columns={externalModalColumns}
                  dataSource={externalTableData}
                  size="small"
                  bordered
                  pagination={{
                    showSizeChanger: true,
                    defaultPageSize:20,
                    defaultCurrent:1,
                  }}
                />

    </Modal>)}



      {loading && (
        <div className="card-loader">
          <Spin />
        </div>
      )}
    </>
  );
};

export default VastedTotal;

