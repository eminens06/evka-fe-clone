import { Button, Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { FunctionComponent } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import { UserOrder } from '../orders/types';
import { useRouter } from 'next/router';
import mappers from '../../mappers';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import GET_CANCEL_RETURN, {
  ReturnCancelListOrdersQuery,
} from '../../__generated__/ReturnCancelListOrdersQuery.graphql';
import { ReturnCancelData } from './types';

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
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
  {
    key: 'productText',
    title: 'Ürün',
    dataIndex: 'productText',
  },
  {
    key: 'note',
    title: 'Not',
    dataIndex: 'note',
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: string, order: ReturnCancelData) => {
      let text = '';
      if (order.isPartlyCanceled) {
        text += 'İptal ';
      }
      if (order.isPartlyReturned) {
        text += 'İade ';
      }
      if (text === '') {
        return value;
      } else {
        return text + 'Ürün Var';
      }
    },
  },
];

const ListReturnCancel: FunctionComponent = () => {
  const router = useRouter();
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ReturnCancelListOrdersQuery>(
    GET_CANCEL_RETURN,
    {
      search: '',
    },
    mappers.cancelReturnMapper,
  );

  const onTableClick = (record: UserOrder) => {};
  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  return (
    <PageContent header={['İptal - İade']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>İptal İade Listesi</Typography.Title>
          <Button type="primary" onClick={() => router.push('/return_product')}>
            Ürün İadesi
          </Button>
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          fileName="iptal_iade"
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
      </div>
    </PageContent>
  );
};

export default ListReturnCancel;
