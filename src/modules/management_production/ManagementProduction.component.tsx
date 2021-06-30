import { Pagination, Row, Tooltip, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';

const columns = [
  {
    key: 'id',
    title: 'Sipariş Id',
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
    key: 'product_name',
    title: 'Ürün Adı',
    dataIndex: 'product_name',
  },
  {
    key: 'remaining_time',
    title: 'Kalan Süre',
    dataIndex: 'remaining_time',
  },
  {
    key: 'product_count',
    title: 'Ürün Adedi',
    dataIndex: 'product_count',
  },
  {
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
];

const data: DataSource = [
  {
    id: 1,
    product_name: 'Lake Orta Sehpa',
    remaining_time: 10,
    product_count: 1,
    customer: 'Berkay Yılmaz',
  },
  {
    id: 2,
    price: 300,
    product_count: 1,
    remaining_time: 10,
    customer: 'Berkay2 Yılmaz',
    notes: 'alfakf fkasmfalks',
  },
];

const ManagementProduction: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);

  const changePagination = (page: number) => {
    setPage(page);
  };

  return (
    <PageContent header={['Üretim Yönetimi']}>
      <div>
        <TableFilter />
        <div className="table-header">
          <Typography.Title level={5}>
            Üretim Onayı Bekleyen Siparişler
          </Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => console.log('Id : ', record.id),
            };
          }}
          columns={columns}
          dataSource={data}
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

export default ManagementProduction;
