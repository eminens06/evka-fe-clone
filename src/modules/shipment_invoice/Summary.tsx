import { Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import { InvoiceStatus, ShipmentStatus } from './types';
import Status from '../../atoms/Status';
import { InvoiceStatusMapper, ShipmentStatusMapper } from './helpers';
import Table from '../../molecules/Table';

const dummyData: any = [];
const isLoading = false;
const size = 10;

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'fullName',
  },
  {
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
  {
    key: 'shipmentStatus',
    title: 'Sevk Durumu',
    dataIndex: 'shipmentStatus',
    render: (value: ShipmentStatus) => {
      const { text, status } = ShipmentStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'invoiceStatus',
    title: 'Fatura Durumu',
    dataIndex: 'invoiceStatus',
    render: (value: InvoiceStatus) => {
      const { text, status } = InvoiceStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

const Summary: FunctionComponent = () => {
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

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  return (
    <PageContent header={['Sevkiyat/Fatura']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Sevkiyat / Fatura Özeti</Typography.Title>
        </div>
        <Table
          columns={columns}
          dataSource={dummyData}
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

export default Summary;
