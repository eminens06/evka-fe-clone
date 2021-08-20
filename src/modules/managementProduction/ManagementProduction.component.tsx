import { message, Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
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
import { useMutation } from 'relay-hooks';
import SEND_TO_PRODUCTION, {
  ManagementProductionRelaySendttoProductionMutation,
} from '../../__generated__/ManagementProductionRelaySendttoProductionMutation.graphql';
import EXIST_IN_STORAGE, {
  ManagementProductionRelayExistInStorageMutation,
} from '../../__generated__/ManagementProductionRelayExistInStorageMutation.graphql';
import useFullPageLoader from '../../hooks/useFullPageLoader';

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
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();
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
          search: '',
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
          search: '',
        });
        message.success('Başarıyla Tamamlandı');
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

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
          productOrderId: id,
        },
      },
    });
  };

  return (
    <PageContent header={['Üretim Yönetimi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>
            Üretim Onayı Bekleyen Siparişler
          </Typography.Title>
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          dataSource={data}
          rowKey="orderId"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
        <ProductOrderSummary
          data={modalData}
          onApprove={onApprove}
          onStorage={onStorage}
          isVisible={isModalVisible}
          closeModal={() => setIsModalVisible(false)}
        />
        {loader}
      </div>
    </PageContent>
  );
};

export default ManagementProduction;
