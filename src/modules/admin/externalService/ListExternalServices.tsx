import { Button, Form, Table, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../../layout/PageContent';
import TableFilter from '../../../molecules/TableFilter';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import AddEditCard from '../../common/AddEditCard';
import ExternalServiceForm from './ExternalServiceForm';
import GET_EXTERNAL_SERVICES, {
  ExternalServiceRelayGetExternalServiceQuery,
} from '../../../__generated__/ExternalServiceRelayGetExternalServiceQuery.graphql';

const columns = [
  {
    key: 'name',
    title: 'Adı',
    dataIndex: 'name',
  },
  {
    key: 'phoneNumber',
    title: 'Telefonu',
    dataIndex: 'phoneNumber',
  },
  {
    key: 'address',
    title: 'Adresi',
    dataIndex: 'address',
  },
];

const ListExternalServices: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
  } = useFetchTablePagination<ExternalServiceRelayGetExternalServiceQuery>(
    GET_EXTERNAL_SERVICES,
    {
      search: '',
    },
  );

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const addNewUser = () => {
    setModalData(undefined);
    openModal();
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Admin', 'Dış Hizmetler']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Dış Hizmetler</Typography.Title>
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
          rowKey="id"
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
          header="Hizmet Veren"
          form={form}
        >
          <ExternalServiceForm
            initialValues={modalData}
            form={form}
            onSuccess={() => onSearch('')}
          />
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ListExternalServices;
