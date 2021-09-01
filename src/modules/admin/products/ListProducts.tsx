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
import { useRouter } from 'next/router';

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
  const router = useRouter();

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

  const addNewProduct = () => {
    //router.push('/admin_product');
  };

  const onTableClick = (record: any) => {
    /*router.push({
      pathname: '/admin_product',
      query: { id: record.id },
    }); */
  };

  return (
    <PageContent header={['Admin', 'Ürünler']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Ürünler</Typography.Title>
          <Button
            type="primary"
            onClick={addNewProduct}
            icon={<PlusOutlined />}
          >
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
