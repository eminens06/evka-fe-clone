import { Button, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../../layout/PageContent';
import TableFilter from '../../../molecules/TableFilter';
import GET_MARKETPLACES, {
  MarketplaceRelayGetMarketplacesQuery,
} from '../../../__generated__/MarketplaceRelayGetMarketplacesQuery.graphql';
import useFetchTablePagination from '../../../hooks/useFetchTableData';

const columns = [
  {
    key: 'name',
    title: 'Pazaryeri Adı',
    dataIndex: 'name',
  },
  {
    key: 'commissionRate',
    title: 'Komisyon Oranı (%)',
    dataIndex: 'commissionRate',
  },
  {
    key: 'deliveryDate',
    title: 'Teslim Süresi',
    dataIndex: 'deliveryDate',
  },
];

const ListMarketPlaces: FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  // const pagination = useTablePagination(50, page, requestPageChange);

  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
  } = useFetchTablePagination<MarketplaceRelayGetMarketplacesQuery>(
    GET_MARKETPLACES,
    {
      first: 10,
    },
  );

  const onTableClick = (id: string) => {
    console.log('Go To edit selected row ', id);
  };

  // const pagination = usePagination(Orders_Fragment, );

  return (
    <PageContent header={['Admin', 'Pazaryeri']}>
      <div>
        <TableFilter />
        <div className="table-header">
          <Typography.Title level={5}>Pazaryerleri</Typography.Title>
          <Button type="primary" onClick={openModal} icon={<PlusOutlined />}>
            Ekle
          </Button>
        </div>
        <Table
          onRow={(record, rowIndex) => {
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

export default ListMarketPlaces;
