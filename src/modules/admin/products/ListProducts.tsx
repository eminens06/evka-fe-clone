import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../../layout/PageContent';
import TableFilter from '../../../molecules/TableFilter';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import mappers from '../../../mappers';
import GET_PRODUCTS, {
  ProductsRelayGetProductsQuery,
} from '../../../__generated__/ProductsRelayGetProductsQuery.graphql';
import Table from '../../../molecules/Table';

const columns = [
  {
    key: 'name',
    title: 'Ürün Adı',
    dataIndex: 'name',
  },
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
  },
  {
    key: 'category',
    title: 'Kategori',
    dataIndex: 'category',
  },
  {
    key: 'subCategory',
    title: 'Alt Kategori',
    dataIndex: 'subCategory',
  },
  {
    key: 'legMaterial',
    title: 'Ayak Malzemesi',
    dataIndex: 'legMaterial',
  },
  {
    key: 'tableMaterial',
    title: 'Tabla Malzemesi',
    dataIndex: 'tableMaterial',
  },
];

const ListProducts: FunctionComponent = () => {
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ProductsRelayGetProductsQuery>(
    GET_PRODUCTS,
    {
      search: '',
    },
    mappers.allProductsAdminMapper,
  );

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  const addNewUser = () => {
    console.log('Add new Product');
  };

  const onTableClick = (record: any) => {
    console.log('On table click', record);
  };

  return (
    <PageContent header={['Admin', 'Ürünler']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Ürünler</Typography.Title>
          <Button type="primary" onClick={addNewUser} icon={<PlusOutlined />}>
            Ekle
          </Button>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          dataSource={data}
          rowKey="name"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
      </div>
    </PageContent>
  );
};

export default ListProducts;
