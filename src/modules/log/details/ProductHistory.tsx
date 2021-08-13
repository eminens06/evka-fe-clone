import { Row, Tag } from 'antd';
import React, { FC } from 'react';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import mappers from '../../../mappers';
import Table from '../../../molecules/Table';
import GET_PRODUCT_HISTORY, {
  LogRelayGetProductHistoryQuery,
} from '../../../__generated__/LogRelayGetProductHistoryQuery.graphql';

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
    key: 'module',
    title: 'Birim',
    dataIndex: 'module',
  },
  {
    key: 'type',
    title: 'Tip',
    dataIndex: 'type',
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

const ProductHistory: FC<Props> = ({ id }) => {
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<LogRelayGetProductHistoryQuery>(
    GET_PRODUCT_HISTORY,
    {
      search: '',
      id,
    },
    mappers.productHistoryMapper,
  );

  console.log('Product history data : ', data);
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id"
      loading={isLoading}
      pagination={{
        total: size,
      }}
    />
  );
};

export default ProductHistory;
