import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import GET_STORAGE_ITEMS, {
  StorageAllStorageItemsQuery,
} from '../../__generated__/StorageAllStorageItemsQuery.graphql';
import mappers from '../../mappers';
import fuzzysort from 'fuzzysort';

const columns = [
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: 'name',
    title: 'Ürün',
    dataIndex: 'name',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: 'missingParts',
    title: 'Eksik Parçalar',
    dataIndex: 'missingParts',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: 'location',
    title: 'Konum',
    dataIndex: 'location',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: 'notes',
    title: 'Notes',
    dataIndex: 'notes',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: 'count',
    title: 'Adet',
    dataIndex: 'count',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
];

const ListStorage: FunctionComponent = () => {
  const [searchedData, setSearchedData] = useState<any>([]);

  const router = useRouter();
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<StorageAllStorageItemsQuery>(
    GET_STORAGE_ITEMS,
    { search: '' },
    mappers.storageItemsMapper,
  );

  const onTableClick = (record: any) => {
    router.push({
      pathname: '/storage_item',
      query: { id: record.id },
    });
  };

  const addNewItem = () => {
    router.push({
      pathname: '/storage_item',
    });
  };

  const onSearch = (value: string) => {
    let results = fuzzysort.go(value, data, { key: 'product.name' });
    let mappedResult = results.map((e) => e.obj);

    if (mappedResult.length != 0) {
      setSearchedData(mappedResult);
    }

    forceFetchQuery({
      search: value,
    });
  };

  return (
    <PageContent header={['Depo']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Depo Ürün Listesi</Typography.Title>
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          fileName="depo"
          dataSource={searchedData.length == 0 ? data : searchedData}
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

export default ListStorage;
