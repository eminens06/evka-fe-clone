import { Form, Table, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import StatusModal from '../common/StatusModal';
import { mainProductionColumns, mainStatusArray } from './helpers';
import { WorkshopProps, WorkshopStatus } from './types';

const dummyData: any = [];
const size = 10;
const isLoading = false;

const MetalProduction: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<WorkshopProps>();

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const changePagination = (page: number) => {
    setPage(page);
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

  const showBluePrint = () => {
    console.log('Show blue print');
  };

  return (
    <PageContent header={['Üretim', 'Metal Atölyesi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Metal Atölyesi</Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={mainProductionColumns}
          dataSource={dummyData}
          rowKey="name"
          loading={isLoading}
          pagination={{
            total: size,
            defaultCurrent: 1,
            current: page,
            onChange: (page, pageSize) => changePagination(page),
          }}
        />
        <StatusModal
          isVisible={true}
          closeModal={closeModal}
          header="Ürün Bilgileri"
          progressSteps={mainStatusArray}
          status={WorkshopStatus.IN_PRODUCTION}
          customAction={{
            onPress: showBluePrint,
            type: 'bluePrint',
          }}
        >
          <div>SHOW WHATEVER U PASS HERE !! </div>
        </StatusModal>
      </div>
    </PageContent>
  );
};

export default MetalProduction;
