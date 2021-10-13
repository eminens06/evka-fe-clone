import React, { FunctionComponent, useState } from 'react';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import Table from '../../molecules/Table';
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
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<OrdersAllProductsWithoutSkuQuery>(
    GET_PRODUCTS,
    {
      search: '',
    },
    mappers.allProductsMapper,
  );

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  return (
    <div>
      <TableFilter onSearchComplete={onSearch} />
      <Table
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys: React.Key[], selectedRows) => {
            setSelectWithTable({ node: selectedRows[0].data });
          },
        }}
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
    </div>
  );
};

export default ListProducts;
