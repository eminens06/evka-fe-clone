import { Table, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import StatusModal from '../common/StatusModal';
import { mainStatusNextButtonText } from '../production/helpers';
import { packagingColumns, statusArray, statusNextButtonText } from './helpers';
import PackagingDetail from './PackagingDetail';
import { PackageStatus, PackagingTableData } from './types';

const dummyData: PackagingTableData[] = [
  {
    orderId: '1',
    productName: 'asd',
    remainingDate: '15',
    isCollectable: true,
    status: PackageStatus.READY,
    packageCount: 5,
    isMonte: true,
  },
];

const ListPackaging: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const changePagination = (page: number) => {
    setPage(page);
  };

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const onChangeStatus = () => {
    console.log('Change Status ! ');
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const showBluePrint = () => {
    console.log('Show blue print');
  };

  return (
    <PageContent header={['Toplama/Paketleme']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Toplama/Paketleme</Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={packagingColumns}
          dataSource={dummyData}
          rowKey="id"
          loading={false}
          pagination={{
            defaultCurrent: 1,
            current: page,
            onChange: (page, pageSize) => changePagination(page),
          }}
        />
        {modalData && (
          <StatusModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            onChangeStatus={onChangeStatus}
            modalData={modalData}
            header="Parça Bilgileri"
            progressSteps={statusArray}
            saveTextArray={statusNextButtonText}
          >
            <PackagingDetail
              productName={modalData.productName}
              isMonte={modalData.isMonte}
              packageCount={modalData.packageCount}
            />
          </StatusModal>
        )}
      </div>
    </PageContent>
  );
};

export default ListPackaging;
