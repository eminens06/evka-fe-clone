import { Button, Form, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../../layout/PageContent';
import TableFilter from '../../../molecules/TableFilter';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import mappers from '../../../mappers';
import GET_USERS, {
  UsersRelayGetAllUsersQuery,
} from '../../../__generated__/UsersRelayGetAllUsersQuery.graphql';
import AddEditCard from '../../common/AddEditCard';
import UserForm from './UserForm';

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

export interface UserProps {
  email: string;
  fullName: string;
  roles: string;
  id: string;
  password: string;
}

const ListUsers: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<UserProps>();

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<UsersRelayGetAllUsersQuery>(
    GET_USERS,
    {
      search: '',
    },
    mappers.userMapper,
  );

  const onTableClick = (data: UserProps) => {
    console.log('Data : ', data);
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  const addNewUser = () => {
    setModalData(undefined);
    openModal();
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Admin', 'Kullanıcılar']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Kullanıcı Listesi</Typography.Title>
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
            defaultCurrent: 1,
            current: page,
            onChange: (page, pageSize) => changePagination(page),
          }}
        />
        <AddEditCard
          isVisible={isModalVisible}
          closeModal={closeModal}
          header="Kullanıcı Bilgileri"
          form={form}
        >
          <UserForm
            initialValues={modalData}
            form={form}
            onSuccess={() => onSearch('')}
          />
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ListUsers;
