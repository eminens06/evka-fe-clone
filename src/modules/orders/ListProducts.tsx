import { Table } from 'antd';
import React, { FunctionComponent, useEffect, useState } from 'react';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import TableFilter from '../../molecules/TableFilter';
import GET_PRODUCTS, {
  OrdersAllProductsWithoutSkuQuery,
} from '../../__generated__/OrdersAllProductsWithoutSkuQuery.graphql';

const columns = [
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
  },
  {
    key: 'name',
    title: 'Ürün Adı',
    dataIndex: 'name',
  },
  {
    key: 'CT',
    title: 'Kategori',
    dataIndex: 'CT',
  },
  {
    key: 'CA',
    title: 'Alt Kategori',
    dataIndex: 'CA',
  },
  {
    key: 'AY',
    title: 'Ayak',
    dataIndex: 'AY',
  },
  {
    key: 'TB',
    title: 'Tabla',
    dataIndex: 'TB',
  },
];

interface Props {
  setSelectWithTable: React.Dispatch<React.SetStateAction<any>>;
}

const ListProducts: FunctionComponent<Props> = ({ setSelectWithTable }) => {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);
  // TODO Organize pagination for larger results

  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
  } = useFetchTablePagination<OrdersAllProductsWithoutSkuQuery>(
    GET_PRODUCTS,
    {
      first: 10,
    },
    mappers.allProductsMapper,
  );

  return (
    <div>
      <TableFilter />
      <Table
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys: React.Key[], selectedRows) => {
            setSelectWithTable({ node: selectedRows[0].data });
          },
        }}
        columns={columns}
        dataSource={data}
        rowKey="sku"
        loading={isLoading}
        pagination={{
          total: size,
          defaultCurrent: 1,
          current: page,
          onChange: (page, pageSize) => changePagination(page),
        }}
      />
    </div>
  );
};

export default ListProducts;
