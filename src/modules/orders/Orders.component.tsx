import { Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
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
import { OrderProduct, OrderStatusType } from './types';

const OrderStatus = {
  [OrderStatusType.DF]: {
    text: 'Onay Bekleniyor',
    status: 'error' as Status,
  },
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
  },
  {
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
  {
    key: 'products',
    title: 'Ürün(ler)',
    dataIndex: 'products',
    render: (products: OrderProduct[]) => {
      return products.map((product) => {
        const { name, productName, count, metaInfo } = product;
        const text = name || productName;
        const no = count === 1 ? '' : `x${count}`;
        const getMetaInfo = () => {
          if (metaInfo) {
            return `Ayak: ${metaInfo.AY} \n Tabla: ${metaInfo.TB}`;
          }
          return '';
        };
        return (
          <Row>
            <Tooltip placement="topLeft" title={getMetaInfo}>
              <Typography>{`${text} ${no}`}</Typography>
            </Tooltip>
          </Row>
        );
      });
    },
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: OrderStatusType) => {
      const { text, status } = OrderStatus[value];
      return <Status status={status} text={text} />;
    },
  },
];

const OrdersPage: FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);
  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
  } = useFetchTablePagination<OrdersRelayGetAllUserOrdersQuery>(
    GET_USER_ORDERS,
    {
      first: 10,
    },
    mappers.orderListMapper,
  );

  const onTableClick = (id: string) => {
    console.log('Go To edit selected row ', id);
  };

  return (
    <PageContent header={['Siparişler']}>
      <div>
        <TableFilter />
        <div className="table-header">
          <Typography.Title level={5}>Açık Siparişler</Typography.Title>
          <AddOrderMenu />
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record.id),
            };
          }}
          columns={columns}
          dataSource={data}
          rowKey="name"
          loading={isLoading}
          pagination={{
            total: size,
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
