import { Form, message, Radio, Typography } from 'antd';
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
  paintColumns,
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
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

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
      closeModal();
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
      closeModal();
    },
  });

  const { data, size, isLoading, forceFetchQuery } = useFetchWorkShop(
    paintType === PaintTypes.WOOD
      ? WorkshopTypes.WOOD_PAINT
      : WorkshopTypes.METAL_PAINT,
    ModuleType.PT,
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
    if (modalData) {
      openLoader();
      resendToProduction({
        variables: {
          input: {
            productOrderId: modalData.id,
            workshopType: `${modalData.type.toLowerCase()}_paint`,
          },
        },
      });
    }
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
          exportFormatter={excelFormatter.materialProduction}
          columns={paintColumns}
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
              materialName={modalData.materialName}
            />
          </StatusModal>
        )}
        {loader}
      </div>
    </PageContent>
  );
};

export default PaintProduction;
