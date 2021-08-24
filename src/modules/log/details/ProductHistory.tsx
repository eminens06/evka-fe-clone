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
    key: 'product',
    title: 'Ürün Adı',
    dataIndex: 'product',
  },
  {
    key: 'module',
    title: 'Birim',
    dataIndex: 'module',
    render: (value: string) => {
      switch (value) {
        case 'ayak':
          return 'Ayak';
        case 'Wood-boya':
        case 'WD-boya':
          return 'Ahşap Boya Atölyesi';
        case 'Metal-boya':
        case 'MT-boya':
          return 'Metal Boya Atölyesi';
        case 'MT':
        case 'Metal':
          return 'Metal Atölyesi';
        case 'WD':
        case 'Wood':
          return 'Ahşap Atölyesi';
        case 'Fabric':
          return 'Kumaş Atölyesi';
        case 'Glass':
        case 'Cam':
          return 'Cam Atölyesi';
        default:
          return value;
      }
    },
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
  } = useFetchTablePagination<LogRelayGetProductHistoryQuery>(
    GET_PRODUCT_HISTORY,
    {
      search: '',
      id,
    },
    mappers.productHistoryMapper,
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

export default ProductHistory;
