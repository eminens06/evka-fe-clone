import { message, Typography, Form } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchWorkShop from '../../hooks/useFetchWorkshop';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import excelFormatter from '../../utils/excelFormatter';
import RESEND_STATUS, {
  ProductionRelayResendToProductionMutation,
} from '../../__generated__/ProductionRelayResendToProductionMutation.graphql';
import CHANGE_STATUS, {
  ProductionRelayWorkshopStatusChangeMutation,
} from '../../__generated__/ProductionRelayWorkshopStatusChangeMutation.graphql';
import { ModuleType } from '../admin/externalService/types';
import StatusModal from '../common/StatusModal';
import {
  materialProductionColumns,
  materialStatusArray,
  materialWorkshopNextButtonText,
} from './helpers';
import MaterialWorkshopDetail from './MaterialWorkshopDetail';
import {
  ProductionMaterialWorkshopData,
  WorkshopExternalServiceParams,
  WorkshopStatus,
  WorkshopTypes,
} from './types';

const FabricProduction: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ProductionMaterialWorkshopData>();
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [form] = Form.useForm();

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

  const [
    resendToProduction,
  ] = useMutation<ProductionRelayResendToProductionMutation>(RESEND_STATUS, {
    onError: (error: any) => {
      closeLoader();
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Geri gönderme başarılı');
      forceFetchQuery();
      setIsModalVisible(false);
    },
  });

  const openModal = () => {
    setIsModalVisible(true);
  };

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    WorkshopTypes.FABRIC,
    ModuleType.F,
  );

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    forceFetchQuery(value);
  };

  const onChangeStatus = (externalServices?: WorkshopExternalServiceParams) => {
    if (modalData) {
      openLoader();
      const input = {
        productOrderId: modalData.id,
        workshopType: WorkshopTypes.FABRIC,
        isComplete:
          modalData.status === WorkshopStatus.IN_PRODUCTION ||
          modalData.status === WorkshopStatus.RECEIVED,
        ...externalServices,
        categoryName: modalData.categoryName,
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

  const reSendToProduction = () => {
    if (modalData) {
      openLoader();
      resendToProduction({
        variables: {
          input: {
            productOrderId: modalData.id,
            workshopType: WorkshopTypes.FABRIC,
          },
        },
      });
    }
  };

  const onSave = (values: any) => {
    onChangeStatus({
      rawMaterial: values.rawMaterial,
      externalServiceIds: values.externalServiceIds,
    });
  };

  return (
    <PageContent header={['Üretim', 'Kumaş Atölyesi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Kumaş Atölyesi</Typography.Title>
        </div>
        <Table
          onRow={(record: ProductionMaterialWorkshopData) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          exportFormatter={excelFormatter.materialProduction}
          fileName="kumas_atolyesi"
          columns={materialProductionColumns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'productName', text: 'Ürün Adı' },
            { value: 'status', text: 'Durum' },
          ]}
        />
        {modalData && (
          <StatusModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            onChangeStatus={onChangeStatus}
            modalData={modalData}
            form={form}
            header="Parça Bilgileri"
            progressSteps={materialStatusArray}
            saveTextArray={materialWorkshopNextButtonText}
            customAction={
              modalData.status === WorkshopStatus.RECEIVED
                ? {
                    onPress: reSendToProduction,
                    type: 'revert',
                  }
                : undefined
            }
          >
            <MaterialWorkshopDetail
              productName={modalData.productName}
              dimensions={modalData.dimensions}
              form={form}
              onFormSubmit={onSave}
              status={modalData.status}
              workshopType={modalData.type}
              serviceInfo={modalData.externalServices}
              tablaName={modalData.tablaName}
              moduleName={ModuleType.F}
            />
          </StatusModal>
        )}
        {loader}
      </div>
    </PageContent>
  );
};

export default FabricProduction;
