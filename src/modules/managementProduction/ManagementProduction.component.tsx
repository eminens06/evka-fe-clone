import {
  message,
  Popover,
  Row,
  Tooltip,
  Typography,
  Button,
  Image,
  Col,
  Card,
} from 'antd';
import { DatabaseTwoTone } from '@ant-design/icons';
import { InfoCircleOutlined, CameraOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import GET_MANAGEMENT_PRODUCTION, {
  ManagementProductionRelayallProductOrdersQuery,
} from '../../__generated__/ManagementProductionRelayallProductOrdersQuery.graphql';
import ProductOrderSummary from './ProductOrderSummary';
import { useMutation, fetchQuery, useRelayEnvironment } from 'relay-hooks';
import SEND_TO_PRODUCTION, {
  ManagementProductionRelaySendttoProductionMutation,
} from '../../__generated__/ManagementProductionRelaySendttoProductionMutation.graphql';
import EXIST_IN_STORAGE, {
  ManagementProductionRelayExistInStorageMutation,
} from '../../__generated__/ManagementProductionRelayExistInStorageMutation.graphql';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import settings from '../../settings';
import ImagePopover from '../common/ImagePopover';
import StorageModal from './StorageModal';
import CreateStorageOrderModal from './createStorageOrderModal'
import GET_ISEXIST_PRODUCT, {
  ManagementProductionRelayStorageItemsQuery,
} from '../../__generated__/ManagementProductionRelayStorageItemsQuery.graphql';

const columns = [
  {
    key: 'orderId',
    title: 'Pazaryeri Sipariş No',
    dataIndex: 'orderId',
    render: (value: any, order: any) => {
      if (order.notes) {
        return (
          <Row className="note">
            <Tooltip placement="topLeft" title={order.notes} arrowPointAtCenter>
              <Typography.Text>{`${value}  `}</Typography.Text>
              <InfoCircleOutlined />
            </Tooltip>
          </Row>
        );
      }
      return value;
    },
  },
  {
    key: 'marketplace',
    title: 'Pazar Yeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
    render: (value: any, order: any) => {
      if (order.productImages.length > 0) {
        return <ImagePopover images={order.productImages} text={value} />;
      }
      return value;
    },
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
    render: (value: number) => {
      if (value <= settings.remainingTimeLevel) {
        return <Typography.Text type="danger">{value}</Typography.Text>;
      }
      return value;
    },
  },
  {
    key: 'legMaterial',
    title: 'Ayak Malzemesi',
    dataIndex: 'legMaterial',
  },
  {
    key: 'tableMaterial',
    title: 'Tabla Malzemesi',
    dataIndex: 'tableMaterial',
  },
];

const ManagementProduction: FunctionComponent = () => {
  const openModal = () => {
    setIsModalVisible(true);
  };
  const environment = useRelayEnvironment();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStorageVisible, setIsStorageVisible] = useState(false);
  
  const [isCreateOrderModalVisible, setCreateOrderModalVisible] = useState(false);

  const [modalData, setModalData] = useState<any>();
  const [search, setSearch] = useState('');
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [
    sendtoProduction,
  ] = useMutation<ManagementProductionRelaySendttoProductionMutation>(
    SEND_TO_PRODUCTION,
    {
      onError: (error: any) => {
        closeLoader();
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        closeLoader();
        forceFetchQuery({
          search,
        });
        message.success('Üretime başarıyla gönderildi');
        setIsModalVisible(false);
      },
    },
  );

  const [
    existInStorage,
  ] = useMutation<ManagementProductionRelayExistInStorageMutation>(
    EXIST_IN_STORAGE,
    {
      onError: (error: any) => {
        closeLoader();
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        closeLoader();
        forceFetchQuery({
          search,
        });
        message.success('Başarıyla Tamamlandı');
        setIsStorageVisible(false);
        setIsModalVisible(false);
      },
    },
  );

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ManagementProductionRelayallProductOrdersQuery>(
    GET_MANAGEMENT_PRODUCTION,
    {
      search: '',
    },
    mappers.managementProductionMapper,
  );

  const getIsExist = async (data: any) => {
    const {
      storageItems,
    } = await fetchQuery<ManagementProductionRelayStorageItemsQuery>(
      environment,
      GET_ISEXIST_PRODUCT,
      {
        sku: data.sku,
      },
    );

    if (storageItems?.edges && storageItems.edges.length > 0) {
      const mapped = mappers.storageItemsValidList(storageItems);
      if (mapped.length > 0) {
        setModalData({
          ...data,
          existInStorage: { storageItems: { edges: mapped } },
        });
      } else {
        setModalData({ ...data, existInStorage: false });
      }
    } else {
      setModalData({ ...data, existInStorage: false });
    }
  };
  
  const onCreateOrderClick = () => {
    setCreateOrderModalVisible(true)
  };

  const onTableClick = (data: any) => {
    getIsExist(data);
    openModal();
  };

  const onSearch = (value: string) => {
    setSearch(value);
    forceFetchQuery({
      search: value,
    });
  };

  const onApprove = (id: string) => {
    openLoader();
    sendtoProduction({
      variables: {
        input: {
          productOrderId: id,
        },
      },
    });
  };

  const onStorage = (id: string) => {
    openLoader();
    existInStorage({
      variables: {
        input: {
          productOrderId: modalData.id,
          storageId: id,
        },
      },
    });
  };

  return (
    <PageContent header={['Üretim Yönetimi']}>
      <div>
        <div className="table-header">
          <Typography.Title level={5}>
            Üretim Onayı Bekleyen Siparişler
          </Typography.Title>
        </div>
        <Row style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>          <Button
          onClick={() => onCreateOrderClick()}
          icon={<DatabaseTwoTone />}
          type="primary"
          style={{ marginLeft: '8px', width: '350px' }}
        >Depoya Sipariş Emri Ver</Button>

          <TableFilter onSearchComplete={onSearch} /></Row>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          fileName="uretim_yonetimi"
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'productName', text: 'Ürün Adı' },
            { value: 'marketplace', text: 'Pazaryeri' },
          ]}
        />
        <ProductOrderSummary
          data={modalData}
          onApprove={onApprove}
          onStorage={() => setIsStorageVisible(true)}
          isVisible={isModalVisible}
          closeModal={() => setIsModalVisible(false)}
        />
        <CreateStorageOrderModal
          data={modalData}
          onApprove={onApprove}
          isVisible={isCreateOrderModalVisible}
          sendMutation={() => setIsStorageVisible(true)}
          closeModal={() => setCreateOrderModalVisible(false)}
        />
        <StorageModal
          data={modalData}
          onStorage={onStorage}
          isVisible={isStorageVisible}
          closeModal={() => setIsStorageVisible(false)}
        />
        {loader}
      </div>
    </PageContent>
  );
};

export default ManagementProduction;
