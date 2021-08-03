import { Table, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import useFetchWorkShop from '../../hooks/useFetchWorkshop';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import StatusModal from '../common/StatusModal';
import {
  mainProductionColumns,
  mainStatusArray,
  mainStatusNextButtonText,
} from './helpers';
import MainWorkshopDetail from './MainWorkshopDetail';
import { WorkshopTypes } from './types';

const MetalProduction: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const changePagination = (page: number) => {
    setPage(page);
  };

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    WorkshopTypes.METAL,
  );

  const onTableClick = (data: any) => {
    console.log('Data : ', data);
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
        {modalData && (
          <StatusModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            onChangeStatus={onChangeStatus}
            modalData={modalData}
            header="Parça Bilgileri"
            progressSteps={mainStatusArray}
            customAction={{
              onPress: showBluePrint,
              type: 'bluePrint',
            }}
            saveTextArray={mainStatusNextButtonText}
          >
            <MainWorkshopDetail
              productName={modalData.productName}
              dimensions={modalData.dimensions}
              type={modalData.type}
              materialName={modalData.materialName}
            />
          </StatusModal>
        )}
      </div>
    </PageContent>
  );
};

export default MetalProduction;
