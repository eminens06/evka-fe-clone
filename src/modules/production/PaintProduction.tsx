import { Form, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import { materialProductionColumns } from './helpers';
import { WorkshopProps } from './types';

const dummyData: any = [];
const size = 10;
const isLoading = false;

const PaintProduction: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<WorkshopProps>();

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  /* const {
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
  ); */

  const onTableClick = (data: WorkshopProps) => {
    console.log('Data : ', data);
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Üretim', 'Boya Atölyesi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Boya Atölyesi</Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={materialProductionColumns}
          dataSource={dummyData}
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

export default PaintProduction;
