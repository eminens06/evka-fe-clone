import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import GET_STORAGE_ITEMS, {
  StorageAllStorageItemsQuery,
} from '../../__generated__/StorageAllStorageItemsQuery.graphql';
import mappers from '../../mappers';

const columns = [
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
  },
  {
    key: 'name',
    title: 'Ürün',
    dataIndex: 'name',
  },
  {
    key: 'missingParts',
    title: 'Eksik Parçalar',
    dataIndex: 'missingParts',
  },
  {
    key: 'location',
    title: 'Konum',
    dataIndex: 'location',
  },
  {
    key: 'notes',
    title: 'Notes',
    dataIndex: 'notes',
  },
  {
    key: 'count',
    title: 'Sayı',
    dataIndex: 'count',
  },
];

const ListStorage: FunctionComponent = () => {
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
          <Button type="primary" onClick={addNewItem} icon={<PlusOutlined />}>
            Ekle
          </Button>
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          fileName="depo"
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

export default ListStorage;
