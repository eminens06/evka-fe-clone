import { Row, Tag } from 'antd';
import React, { FC } from 'react';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import mappers from '../../../mappers';
import Table from '../../../molecules/Table';
import GET_ORDER_HISTORY, {
  LogRelayGetOrderHistoryQuery,
} from '../../../__generated__/LogRelayGetOrderHistoryQuery.graphql';

interface Props {
  id: string;
}

const columns = [
  {
    key: 'date',
    title: 'Tarih',
    dataIndex: 'date',
  },
  {
    key: 'user',
    title: 'Kullanıcı',
    dataIndex: 'user',
  },
  {
    key: 'change',
    title: 'Değişim',
    dataIndex: 'change',
    render: (value: any) => {
      return (
        <Row>
          <Tag color="red">{value.oldStatus}</Tag>
          <Tag color="green">{value.newStatus}</Tag>
        </Row>
      );
    },
  },
];

const OrderHistory: FC<Props> = ({ id }) => {
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<LogRelayGetOrderHistoryQuery>(
    GET_ORDER_HISTORY,
    {
      search: '',
      id,
    },
    mappers.orderHistoryMapper,
  );

  return (
    <Table
      preventExport
      columns={columns}
      dataSource={data}
      rowKey="id"
      loading={isLoading}
      pagination={{
        total: size,
      }}
      scroll={{ y: 300 }}
    />
  );
};

export default OrderHistory;
