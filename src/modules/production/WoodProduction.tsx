import { message, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchWorkShop from '../../hooks/useFetchWorkshop';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import CHANGE_STATUS, {
  ProductionRelayWorkshopStatusChangeMutation,
} from '../../__generated__/ProductionRelayWorkshopStatusChangeMutation.graphql';
import StatusModal from '../common/StatusModal';
import {
  mainProductionColumns,
  mainStatusArray,
  mainWorkshopNextButtonText,
} from './helpers';
import MainWorkshopDetail from './MainWorkshopDetail';
import {
  ProductionMainWorkshopData,
  WorkshopStatus,
  WorkshopTypes,
} from './types';

const MetalProduction: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ProductionMainWorkshopData>();

  const [
    changeStatus,
  ] = useMutation<ProductionRelayWorkshopStatusChangeMutation>(CHANGE_STATUS, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      message.success('Durum Başarıyla Güncellendi');
      forceFetchQuery();
      setIsModalVisible(false);
    },
  });

  const openModal = () => {
    setIsModalVisible(true);
  };

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    WorkshopTypes.WOOD,
  );

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    forceFetchQuery(value);
  };

  const onChangeStatus = () => {
    if (modalData) {
      const input = {
        productOrderId: modalData.id,
        categoryName: modalData.type.toLowerCase(),
        isComplete: modalData.status === WorkshopStatus.IN_PRODUCTION,
      };
      changeStatus({
        variables: {
          input,
        },
      });
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const showBluePrint = () => {
    //TODO: replace with real data
    if (modalData) {
      window.open(`/template?id=${modalData.id}`, '_blank');
    }
  };

  return (
    <PageContent header={['Üretim', 'Ahşap Atölyesi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Ahşap Atölyesi</Typography.Title>
        </div>
        <Table
          onRow={(record: ProductionMainWorkshopData) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={mainProductionColumns}
          dataSource={data}
          rowKey="rowKey"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
        {modalData && modalData?.status !== WorkshopStatus.IN_PAINT && (
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
            saveTextArray={mainWorkshopNextButtonText}
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
