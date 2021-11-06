import { message, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchWorkShop from '../../hooks/useFetchWorkshop';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import excelFormatter from '../../utils/excelFormatter';
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
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [
    changeStatus,
  ] = useMutation<ProductionRelayWorkshopStatusChangeMutation>(CHANGE_STATUS, {
    onError: (error: any) => {
      closeLoader();
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Durum Başarıyla Güncellendi');
      forceFetchQuery();
      setIsModalVisible(false);
    },
  });

  const openModal = () => {
    setIsModalVisible(true);
  };

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    WorkshopTypes.METAL,
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
      openLoader();
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
    <PageContent header={['Üretim', 'Metal Atölyesi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Metal Atölyesi</Typography.Title>
        </div>
        <Table
          onRow={(record: ProductionMainWorkshopData) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          exportFormatter={excelFormatter.mainProduction}
          fileName="metal_atolyesi"
          columns={mainProductionColumns}
          dataSource={data}
          rowKey="rowKey"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'productName', text: 'Ürün Adı' },
            { value: 'type', text: 'Ürün Tipi' },
            { value: 'status', text: 'Durum' },
          ]}
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
        {loader}
      </div>
    </PageContent>
  );
};

export default MetalProduction;
