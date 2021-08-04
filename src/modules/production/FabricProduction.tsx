import { message, Table, Typography, Form } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchWorkShop from '../../hooks/useFetchWorkshop';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import RESEND_STATUS, {
  ProductionRelayResendToProductionMutation,
} from '../../__generated__/ProductionRelayResendToProductionMutation.graphql';
import CHANGE_STATUS, {
  ProductionRelayWorkshopStatusChangeMutation,
} from '../../__generated__/ProductionRelayWorkshopStatusChangeMutation.graphql';
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
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ProductionMaterialWorkshopData>();

  const [form] = Form.useForm();

  const [
    changeStatus,
  ] = useMutation<ProductionRelayWorkshopStatusChangeMutation>(CHANGE_STATUS, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      console.log(res);
      message.success('Durum Başarıyla Güncellendi');
      forceFetchQuery();
      setIsModalVisible(false);
    },
  });

  const [
    resendToProduction,
  ] = useMutation<ProductionRelayResendToProductionMutation>(RESEND_STATUS, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      console.log(res);
      message.success('Geri gönderme başarılı');
      forceFetchQuery();
      setIsModalVisible(false);
    },
  });

  const openModal = () => {
    setIsModalVisible(true);
  };

  const changePagination = (page: number) => {
    setPage(page);
  };

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    WorkshopTypes.FABRIC,
  );

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const onChangeStatus = (externalServices?: WorkshopExternalServiceParams) => {
    if (modalData) {
      const input = {
        productOrderId: modalData.id,
        workshopType: WorkshopTypes.FABRIC,
        isComplete:
          modalData.status === WorkshopStatus.IN_PRODUCTION ||
          modalData.status === WorkshopStatus.RECEIVED,
        ...externalServices,
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
    if (modalData)
      resendToProduction({
        variables: {
          input: {
            productOrderId: modalData.id,
            workshopType: WorkshopTypes.FABRIC,
          },
        },
      });
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
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={materialProductionColumns}
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
            />
          </StatusModal>
        )}
      </div>
    </PageContent>
  );
};

export default FabricProduction;
