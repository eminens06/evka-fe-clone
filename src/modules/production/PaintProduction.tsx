import { Form, message, Radio, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchWorkShop from '../../hooks/useFetchWorkshop';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
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
  PaintTypes,
  ProductionMaterialWorkshopData,
  WorkshopExternalServiceParams,
  WorkshopStatus,
  WorkshopTypes,
} from './types';

const PaintProduction: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ProductionMaterialWorkshopData>();
  const [paintType, setPaintType] = useState<PaintTypes>(PaintTypes.WOOD);

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

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

  const [
    resendToProduction,
  ] = useMutation<ProductionRelayResendToProductionMutation>(RESEND_STATUS, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      message.success('Geri gönderme başarılı');
      forceFetchQuery();
      setIsModalVisible(false);
    },
  });

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    paintType === PaintTypes.WOOD
      ? WorkshopTypes.WOOD_PAINT
      : WorkshopTypes.METAL_PAINT,
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
      const input = {
        productOrderId: modalData.id,
        categoryName: modalData.type.toLowerCase(),
        isComplete: true,
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
            workshopType: `${modalData.type.toLowerCase()}_paint`,
          },
        },
      });
  };

  const onSave = (values: any) => {
    onChangeStatus({
      externalServiceIds: values.externalServiceIds,
    });
  };

  const handlePaintChange = (e: any) => {
    setPaintType(e.target.value);
    // force fetch query değişen değerle tekrar çağırılacak.
  };

  return (
    <PageContent header={['Üretim', 'Boya Atölyesi']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Boya Atölyesi</Typography.Title>
          <Radio.Group value={paintType} onChange={handlePaintChange}>
            <Radio.Button value={PaintTypes.WOOD}>Ahşap Boya</Radio.Button>
            <Radio.Button value={PaintTypes.METAL}>Metal Boya</Radio.Button>
          </Radio.Group>
        </div>
        <Table
          onRow={(record: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={materialProductionColumns}
          dataSource={data}
          rowKey="name"
          loading={isLoading}
          pagination={{
            total: size,
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
              moduleName={ModuleType.PT}
            />
          </StatusModal>
        )}
      </div>
    </PageContent>
  );
};

export default PaintProduction;
