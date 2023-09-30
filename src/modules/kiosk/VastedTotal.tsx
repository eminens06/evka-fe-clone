import React, { FunctionComponent, useEffect, useState } from 'react';
import { Row, Col, DatePicker, Typography, Spin, Table, Divider, Modal, Badge, Descriptions, Space, Card } from 'antd';
import moment from 'moment';
import ExportTableButton from '../../molecules/ExportTableButton';
import { FileExcelOutlined } from '@ant-design/icons';
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
import MAINCOST_TOTALS, {
  KioskMainCostQuery,
} from '../../__generated__/KioskMainCostQuery.graphql';

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
  const environment = useRelayEnvironment();
  const [startDate, setStartDate] = useState<any>(moment().startOf('month'));
  const [endDate, setEndDate] = useState<any>(moment());

  const [chartData, setChartData] = useState<any>(null);
  const [modalData, setModalData] = useState<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [externalData, setExternalData] = useState<any>(null);
  const [externalTableData, setExternalTableData] = useState<any>();
  const [externalModalData, setExternalModalData] = useState<any>();
  const [isExternalModalVisible, setIsExternalModalVisible] = useState(false);

  const [mainCostData, setmainCostData] = useState<any>(null);
  const [mainCostTableData, setMainCostTableData] = useState<any>();
  const [mainCostModalData, setmainCostModalData] = useState<any>();
  const [isMainCostModalVisible, setisMainCostModalVisible] = useState(false);

  const externalModalColumns: any = [
    {
      title: 'Sipariş Tarihi',
      dataIndex: 'siparis_tarihi',
      align: 'center',
    },
    {
      title: 'Pazaryeri Sipariş Numarası',
      dataIndex: 'siparis_pazaryeri_kodu',
      align: 'center',
    },
    {
      title: 'Üretilen Ürün',
      dataIndex: 'uretilen_urun',
      align: 'center',
    },
    {
      title: 'Sipariş Toplam Tutarı (₺)',
      dataIndex: 'siparis_toplam_tutari',
      align: 'center',
      sorter: (a, b) => a.siparis_toplam_tutari - b.siparis_toplam_tutari,
    },
    {
      title: 'Sipariş Hakediş Değeri (₺)',
      dataIndex: 'siparis_hakedis',
      align: 'center',
      sorter: (a, b) => a.siparis_hakedis - b.siparis_hakedis,
    },
  ]

  const download_columns: any = [
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
      title: 'Sipariş Toplam Tutarı (₺)',
      dataIndex: 'siparis_toplam_tutari',
    },
    {
      title: 'Sipariş Hakediş Değeri',
      dataIndex: 'siparis_hakedis',
    },
  ]

  const internalHakedislerColumns: any = [
    {
      title: 'İç Hakediş Kalemleri',
      dataIndex: 'title',
      width: 200,
      align: 'center',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.title.toLowerCase().charCodeAt(0) - b.title.toLowerCase().charCodeAt(0),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Gider Tutarı (₺)',
      width: 200,
      align: 'center',
      dataIndex: 'data',
      sorter: (a, b) => a.data - b.data,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  const fonlarColumns: any = [
    {
      title: 'Fon Kalemleri',
      dataIndex: 'title',
      width: 200,
      align: 'center',
    },
    {
      title: 'Gider Tutarı (₺)',
      width: 200,
      align: 'center',
      dataIndex: 'data',
    },
  ];

  const mainCostColumns: any = [
    {
      title: 'Malzeme/İşçilik Kalemi',
      dataIndex: 'giderTitle',
      width: 200,
      align: 'center',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.giderTitle.toLowerCase().charCodeAt(0) - b.giderTitle.toLowerCase().charCodeAt(0),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Gider Tutarı (₺)',
      width: 200,
      align: 'center',
      dataIndex: 'totalGider',
      sorter: (a, b) => a.totalGider - b.totalGider,
      sortDirections: ['descend', 'ascend'],
    },
    {
      width: 270,
      render: (recordd: any) => (
        <Space direction='vertical' style={{ width: '100%' }}>
          <Button type="default" onClick={() => onMainCostTableClick(recordd)} icon={<PieChartTwoTone />} block>
            Gider Ayrıntılarını Göster
          </Button>
        </Space>
      ),
    }
  ];
  const mainCostModalColumns: any = [
    {
      title: 'Ürün SKU Kodu',
      dataIndex: 'productName',
      width: 150,
      align: 'center',
    },
    {
      title: 'Ürün Üretim Adeti',
      dataIndex: 'numberProduced',
      width: 250,
      align: 'center',
      sorter: (a, b) => a.numberProduced - b.numberProduced,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Toplam Ürün Gider/İşçilik Bedeli (₺)',
      dataIndex: 'productionHakedis',
      width: 250,
      align: 'center',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.productionHakedis - b.productionHakedis,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  const externalColumns: any = [
    {
      title: 'Hizmet Sağlayıcısı',
      dataIndex: 'title',
      width: 200,
      align: 'center',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.title.toLowerCase().charCodeAt(0) - b.title.toLowerCase().charCodeAt(0),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Hakediş Değeri (₺)',
      dataIndex: 'total_cost',
      width: 200,
      align: 'center',
      sorter: (a, b) => a.total_cost - b.total_cost,
      sortDirections: ['descend', 'ascend'],
    },
    {
      width: 270,
      render: (recordd: any) => (
        <Space direction='vertical' style={{ width: '100%' }}>
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

    ];
  };


  const hideModal = () => {
    setIsModalVisible(false);
  };
  const hideExternalModal = () => {
    setIsExternalModalVisible(false);
  };
  const hideMainCostModal = () => {
    setisMainCostModalVisible(false);
  };
  const mainCostModal = () => {
    setisMainCostModalVisible(false);
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
  const getMainCostData = async () => {
    setLoading(true);
    const { mainCost } = await fetchQuery<KioskMainCostQuery>(
      environment,
      MAINCOST_TOTALS,
      {
        startDate: startDate,
        endDate: endDate,
      },
      { force: true },
    );
    setLoading(false);
    setmainCostData(mappers.mainCostMapper(mainCost));
  };
  useEffect(() => {
    getMainCostData();
  }, [startDate, endDate]);

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
  const onMainCostTableClick = (data: any) => {
    setmainCostModalData(mappers.mainCostModalMapper({ ...data }));
    setMainCostTableData(mappers.mainCostTableMapper({ ...data }))
    setisMainCostModalVisible(true);
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
      {chartData &&
        <Row gutter={24} style={{ paddingTop: 20 }}>
          <Col span={12}>
            <Title level={4} underline={true}>İç Hakedişler
              <ExportTableButton
                dataSource={chartData['hakedis']}
                columns={internalHakedislerColumns}//
                fileName={"IcHakedisler_" + startDate.format('DD-MM-YYYY') + "_" + endDate.format('DD-MM-YYYY')}
                btnProps={{ type: 'primary', icon: <FileExcelOutlined />, style: { float: 'right' } }}
              >
                Bütün Tablo Verilerini İndir
              </ExportTableButton></Title>
            <Table
              columns={internalHakedislerColumns}
              dataSource={chartData['hakedis']}
              size="small"
              bordered
              pagination={{
                showSizeChanger: true,
                defaultPageSize: 20,
                defaultCurrent: 1,
              }}
            />
          </Col>
          <Col span={12}>
            <Title level={4} underline={true}>Fonlar
              <ExportTableButton
                dataSource={chartData['fonlar']}
                columns={fonlarColumns}//
                fileName={"Fonlar_" + startDate.format('DD-MM-YYYY') + "_" + endDate.format('DD-MM-YYYY')}
                btnProps={{ type: 'primary', icon: <FileExcelOutlined />, style: { float: 'right' } }}
              >
                Bütün Tablo Verilerini İndir
              </ExportTableButton></Title>
            <Table
              columns={fonlarColumns}
              dataSource={chartData['fonlar']}
              size="small"
              bordered
              pagination={{
                showSizeChanger: true,
                defaultPageSize: 20,
                defaultCurrent: 1,
              }}
            />
          </Col>
        </Row>
      }

      <Row gutter={24} style={{ paddingTop: 20 }}>
        <Col span={12}>
          <Title level={4} underline={true}>Ana Giderler
            <ExportTableButton
              dataSource={mainCostData}
              columns={mainCostColumns}//
              fileName={"AnaGiderler_" + startDate.format('DD-MM-YYYY') + "_" + endDate.format('DD-MM-YYYY')}
              btnProps={{ type: 'primary', icon: <FileExcelOutlined />, style: { float: 'right' } }}
            >
              Bütün Tablo Verilerini İndir
            </ExportTableButton></Title>
          <Table //External Hakediş Table
            columns={mainCostColumns}
            dataSource={mainCostData}
            size="small"
            bordered
            pagination={{
              showSizeChanger: true,
              defaultPageSize: 20,
              defaultCurrent: 1,
            }}
          />

        </Col>
        <Col span={12}>
          <Title level={4} underline={true}>Dış Hizmetler Hakedişleri
            <ExportTableButton
              dataSource={externalData}
              columns={externalColumns}
              fileName={"DisHakedisler_" + startDate.format('DD-MM-YYYY') + "_" + endDate.format('DD-MM-YYYY')}
              btnProps={{ type: 'primary', icon: <FileExcelOutlined />, style: { float: 'right' } }}
            >
              Bütün Tablo Verilerini İndir
            </ExportTableButton></Title>

          <Table //External Hakediş Table
            columns={externalColumns}
            dataSource={externalData}
            size="small"
            bordered
            pagination={{
              showSizeChanger: true,
              defaultPageSize: 20,
              defaultCurrent: 1,
            }}
          />
        </Col></Row>
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
            <Descriptions.Item label="Toplam Hizmet Ödeme Tutarı"><strong>{String(externalModalData.total_cost).concat(" ₺")}</strong></Descriptions.Item>
          </Descriptions>
          <Row gutter={24} style={{ paddingTop: 20 }}></Row>
          <ExportTableButton
            dataSource={externalTableData}
            columns={download_columns}
            fileName={externalModalData.title + "_" + startDate.format('DD-MM-YYYY') + "_" + endDate.format('DD-MM-YYYY')}
            btnProps={{ type: 'primary', icon: <FileExcelOutlined />, disabled: externalModalData.siparis_adet > 0 ? false : true, block: true, style: { paddingBottom: 10 } }}
          >
            Tablo Verilerini İndir
          </ExportTableButton>
          <Table
            columns={externalModalColumns}
            dataSource={externalTableData}
            size="small"
            bordered
            style={{ paddingTop: 20 }}
            pagination={{
              showSizeChanger: true,
              defaultPageSize: 20,
              defaultCurrent: 1,
            }}
          />

        </Modal>)}

      {mainCostModalData && (
        <Modal //mainCost Modal
          visible={isMainCostModalVisible}
          title={'Hakediş Ayrıntıları'}
          width={'60%'}
          onCancel={hideMainCostModal}
          cancelText="Pencereyi Kapat"
          footer={[<Button key="back" type='primary' onClick={hideMainCostModal}>
            Geri Dön
          </Button>]}>

          <Descriptions title={"İşçilik/Giderin Adı:  ".concat(String(mainCostTableData.giderTitle))} bordered>
            <Descriptions.Item label="Toplam İşçilik/Gider Bedeli"><strong>{String(mainCostTableData.totalGider).concat(" ₺")}</strong></Descriptions.Item>
          </Descriptions>
          <Row gutter={24} style={{ paddingTop: 20 }}></Row>
          <ExportTableButton
            dataSource={mainCostModalData}
            columns={mainCostModalColumns}
            fileName={mainCostTableData.giderTitle + "_" + startDate.format('DD-MM-YYYY') + "_" + endDate.format('DD-MM-YYYY')}
            btnProps={{ type: 'primary', icon: <FileExcelOutlined />, disabled: mainCostTableData.totalGider > 0 ? false : true, block: true, style: { paddingBottom: 10 } }}
          >
            Tablo Verilerini İndir
          </ExportTableButton>
          <Table
            columns={mainCostModalColumns}
            dataSource={mainCostModalData}
            size="small"
            bordered
            style={{ paddingTop: 20 }}
            pagination={{
              showSizeChanger: true,
              defaultPageSize: 20,
              defaultCurrent: 1,
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
