import { Row, Tooltip, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import AddOrderMenu from './AddOrderMenu';
import Status from '../../atoms/Status';
import { useQuery, STORE_OR_NETWORK } from 'relay-hooks';
import ORDER_QUERY, {
  OrdersRelayAllUserOrdersNormalQuery,
} from '../../__generated__/OrdersRelayAllUserOrdersNormalQuery.graphql';

const statusTexts = {
  warning: 'Onay Bekleniyor',
  success: 'Tamamlandı',
  error: 'Üretimde',
};

const columns = [
  {
    key: 'id',
    title: 'Id',
    dataIndex: 'id',
    render: (value: any, order: any) => {
      if (order.notes) {
        return (
          <Row className="note">
            <Tooltip placement="topLeft" title={order.notes} arrowPointAtCenter>
              <Typography.Text>{`${value} *`}</Typography.Text>
            </Tooltip>
          </Row>
        );
      }
      return value;
    },
  },
  {
    key: 'price',
    title: 'Fiyat',
    dataIndex: 'price',
  },
  {
    key: 'remaining_time',
    title: 'Kalan Süre',
    dataIndex: 'remaining_time',
  },
  {
    key: 'market_place',
    title: 'Pazar Yeri',
    dataIndex: 'market_place',
  },
  {
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: any) => {
      return <Status status={value} statusTexts={statusTexts} />;
    },
  },
];

const dataSource: DataSource = [
  {
    id: '1',
    price: 500,
    market_place: 'Trendyol',
    remaining_time: 10,
    customer: 'Berkay Yılmaz',
    status: 'warning',
  },
  {
    id: '2',
    price: 300,
    market_place: 'Trendyol',
    remaining_time: 10,
    customer: 'Berkay2 Yılmaz',
    status: 'error',
    notes: 'alfakf fkasmfalks',
  },
];

const OrdersPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);

  // const pagination = useTablePagination(50, page, requestPageChange);

  const changePagination = (page: number) => {
    setPage(page);
  };

  const { data } = useQuery<OrdersRelayAllUserOrdersNormalQuery>(
    ORDER_QUERY,
    {
      first: 10,
    },
    { fetchPolicy: STORE_OR_NETWORK },
  );

  const onTableClick = (id: string) => {
    console.log('Go To edit selected row ', id);
  };

  // const pagination = usePagination(Orders_Fragment, );

  return (
    <PageContent header={['Siparişler']}>
      <div>
        <TableFilter />
        <div className="table-header">
          <Typography.Title level={5}>Açık Siparişler</Typography.Title>
          <AddOrderMenu />
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record.id),
            };
          }}
          columns={columns}
          dataSource={dataSource}
          rowKey="name"
          loading={loading}
          pagination={{
            total: 50,
            defaultCurrent: 1,
            current: page,
            onChange: (page, pageSize) => changePagination(page),
          }}
        />
      </div>
    </PageContent>
  );
};

export default OrdersPage;
