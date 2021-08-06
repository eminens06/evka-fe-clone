import { Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import { dummyShipmentData } from './helpers';

const size = 10;
const isLoading = false;

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
  },
  {
    key: 'customer',
    title: 'Müşteri Adı',
    dataIndex: 'customer',
  },
  {
    key: 'marketplace',
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'cargoNo',
    title: 'Kargo Takip Numarası',
    dataIndex: 'cargoNo',
  },
  {
    key: 'shipmentType',
    title: 'Sevkiyat Türü',
    dataIndex: 'shipmentType',
  },
  {
    key: 'company',
    title: 'Şirket Türü',
    dataIndex: 'company',
  },
];

const ShipmentOrder: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();

  const openModal = () => {
    setIsModalVisible(true);
  };

  /* const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<UsersRelayGetAllUsersQuery>(
    GET_USERS,
    {
      search: '',
    },
    mappers.userMapper,
  ); */

  const onTableClick = (data: any) => {
    console.log('Data : ', data);
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Sevkiyat Fatura']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>
            Sevk Emir Girilen Siparişler
          </Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          dataSource={dummyShipmentData}
          rowKey="name"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
      </div>
    </PageContent>
  );
};

export default ShipmentOrder;
