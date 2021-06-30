import { Button, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../../layout/PageContent';
import TableFilter from '../../../molecules/TableFilter';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import mappers from '../../../mappers';
import GET_USERS, {
  UsersRelayGetAllUsersQuery,
} from '../../../__generated__/UsersRelayGetAllUsersQuery.graphql';

const columns = [
  {
    key: 'email',
    title: 'Kullanıcı Adı (E-mail)',
    dataIndex: 'email',
  },
  {
    key: 'fullName',
    title: 'Adı Soyadı',
    dataIndex: 'fullName',
  },
  {
    key: 'roles',
    title: 'Roller',
    dataIndex: 'roles',
  },
];

const ListUsers: FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  // TODO Organize pagination for larger results

  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
  } = useFetchTablePagination<UsersRelayGetAllUsersQuery>(
    GET_USERS,
    {
      first: 10,
    },
    mappers.userMapper,
  );

  const onTableClick = (id: string) => {
    console.log('Go To edit selected row ', id);
  };

  return (
    <PageContent header={['Admin', 'Kullanıcılar']}>
      <div>
        <TableFilter />
        <div className="table-header">
          <Typography.Title level={5}>Kullanıcı Listesi</Typography.Title>
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

export default ListUsers;
