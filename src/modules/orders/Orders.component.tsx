import { Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import AddOrderMenu from './AddOrderMenu';
import Status from '../../atoms/Status';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import GET_USER_ORDERS, {
  OrdersRelayGetAllUserOrdersQuery,
} from '../../__generated__/OrdersRelayGetAllUserOrdersQuery.graphql';
import { OrderProduct, OrderTypes, UserOrder } from './types';
import MultiProductDisplayer from '../../molecules/MultiProductDisplayer';
import settings from '../../settings';
import excelFormatter from '../../utils/excelFormatter';

const READY_STATUS = 'Onay Bekliyor';

const routing: Record<OrderTypes, string> = {
  NR: '/normal_order',
  SP: '/custom_order',
  ST: '/#',
};

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
    key: 'price',
    title: 'Fiyat',
    dataIndex: 'price',
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
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
    sortable: true,
  },
  {
    key: 'products',
    title: 'Ürün(ler)',
    dataIndex: 'products',
    render: (products: OrderProduct[]) => {
      return <MultiProductDisplayer products={products} withMetaTooltip />;
    },
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: string) => {
      if (value === READY_STATUS) return <Status status="error" text={value} />;
      else {
        return <Typography.Text>{value}</Typography.Text>;
      }
    },
  },
];

const OrdersPage: FunctionComponent = () => {
  const router = useRouter();
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<OrdersRelayGetAllUserOrdersQuery>(
    GET_USER_ORDERS,
    {
      search: '',
    },
    mappers.orderListMapper,
  );

  const onTableClick = (record: UserOrder) => {
    router.push({
      pathname: routing[record.orderType],
      query: { id: record.id },
    });
  };

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  return (
    <PageContent header={['Siparişler']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Açık Siparişler</Typography.Title>
          <AddOrderMenu />
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          exportFormatter={excelFormatter.orders}
          columns={columns}
          fileName="acik_siparisler"
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'customer', text: 'Müşteri' },
            { value: 'status', text: 'Durum' },
            { value: 'marketplace', text: 'Pazaryeri' },
          ]}
        />
      </div>
    </PageContent>
  );
};

export default OrdersPage;
