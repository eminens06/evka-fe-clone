import { Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
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
import { OrderProduct, OrderStatusType } from './types';

const READY_STATUS = 'Onay Bekliyor';

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

  const [page, setPage] = useState(1);
  const changePagination = (page: number) => {
    setPage(page);
  };

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

  const onTableClick = (record: any) => {
    router.push({ pathname: '/normal_order', query: { id: record.id } });
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
          columns={columns}
          dataSource={data}
          rowKey="orderId"
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
