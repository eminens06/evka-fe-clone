import { Button, Form, Typography } from 'antd';
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
import Table from '../../../molecules/Table';
import { ModuleType } from './types';
import { ModuleTexts } from '../../log/helpers';

const columns = [
  {
    key: 'name',
    title: 'Adı',
    dataIndex: 'name',
  },
  {
    key: 'module',
    title: 'Hizmet Alanı',
    dataIndex: 'module',
    render: (value: ModuleType) => {
      return ModuleTexts[value];
    },
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
  const [modalData, setModalData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [search, setSearch] = useState('');

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
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
    setSearch(value);
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
          onRow={(record: any) => {
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
            onSuccess={() => onSearch(search)}
          />
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ListExternalServices;
