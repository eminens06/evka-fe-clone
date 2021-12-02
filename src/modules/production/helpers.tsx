import { Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Status from '../../atoms/Status';
import { ProgressStepValue } from '../../molecules/types';
import {
  MainPartsStatus,
  MaterialStatus,
  WorkshopStatus,
  WorkshopTypes,
} from './types';
import settings from '../../settings';
import ImagePopover from '../common/ImagePopover';

export const WorkshopStatusMapper: Record<WorkshopStatus, StatusObject> = {
  [WorkshopStatus.READY]: {
    text: 'Üretime Hazır',
    status: 'error',
  },
  [WorkshopStatus.IN_PRODUCTION]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [WorkshopStatus.RECEIVED]: {
    text: 'Teslim Alındı',
    status: 'pending',
  },
  [WorkshopStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
  [WorkshopStatus.IN_PAINT]: {
    text: 'Boyada',
    status: 'none',
  },
  [WorkshopStatus.NONE]: {
    text: 'Üretilmeyecek',
    status: 'none',
  },
};

export const MainPartsStatusMapper: Record<MainPartsStatus, StatusObject> = {
  [MainPartsStatus.READY]: {
    text: 'Üretime Hazır',
    status: 'error',
  },
  [MainPartsStatus.IN_PRODUCTION]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [MainPartsStatus.WAITING_PAINT]: {
    text: 'Boya Bekleniyor',
    status: 'pending_paint',
  },
  [MainPartsStatus.IN_PAINT]: {
    text: 'Boyada',
    status: 'pending',
  },
  [MainPartsStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
  [MainPartsStatus.NONE]: {
    text: 'Üretilmeyecek',
    status: 'none',
  },
  [MainPartsStatus.DEFAULT]: {
    text: 'Üretilmeyecek',
    status: 'none',
  },
};

export const MaterialStatusMapper: Record<MaterialStatus, StatusObject> = {
  [MaterialStatus.READY]: {
    text: 'Üretime Hazır',
    status: 'error',
  },
  [MaterialStatus.IN_PRODUCTION]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [MaterialStatus.NONE]: {
    text: 'Üretilmeyecek',
    status: 'none',
  },
  [MaterialStatus.RECEIVED]: {
    text: 'Teslim Alındı',
    status: 'pending',
  },
  [MaterialStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
};

export const MainPartsShortNames = {
  [WorkshopTypes.METAL]: 'MT',
  [WorkshopTypes.WOOD]: 'WD',
  [WorkshopTypes.METAL_PAINT]: 'MT',
  [WorkshopTypes.WOOD_PAINT]: 'WD',
};

export const MaterialTypeShortName = {
  [WorkshopTypes.FABRIC]: 'F',
  [WorkshopTypes.GLASS]: 'G',
  [WorkshopTypes.MARBLE]: 'M',
};

export const WorkshopStatusNames: Record<WorkshopTypes, string> = {
  [WorkshopTypes.FABRIC]: 'fabricStatus',
  [WorkshopTypes.GLASS]: 'glassStatus',
  [WorkshopTypes.METAL]: 'metalStatus',
  [WorkshopTypes.WOOD]: 'woodStatus',
  [WorkshopTypes.MARBLE]: 'marbleStatus',
  [WorkshopTypes.METAL_PAINT]: '',
  [WorkshopTypes.WOOD_PAINT]: '',
};

export const summaryColumns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
  },
  {
    key: 'tablaStatus',
    title: 'Tabla',
    dataIndex: 'tablaStatus',
    render: (value: MainPartsStatus) => {
      const { status, text } = MainPartsStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'ayakStatus',
    title: 'Ayak',
    dataIndex: 'ayakStatus',
    render: (value: MainPartsStatus) => {
      const { status, text } = MainPartsStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'glassStatus',
    title: 'Cam',
    dataIndex: 'glassStatus',
    render: (value: MaterialStatus) => {
      const { status, text } = MaterialStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'marble',
    title: 'Mermer',
    dataIndex: 'marbleStatus',
    render: (value: MaterialStatus) => {
      const { status, text } = MaterialStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'fabricStatus',
    title: 'Kumaş',
    dataIndex: 'fabricStatus',
    render: (value: MaterialStatus) => {
      const { status, text } = MaterialStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

export const mainProductionColumns = [
  {
    key: 'orderId',
    title: 'Sipariş',
    dataIndex: 'orderId',
    render: (value: any, order: any) => {
      if (order.notes) {
        return (
          <Row className="note">
            <Tooltip placement="topLeft" title={order.notes} arrowPointAtCenter>
              <Typography.Text>{`${value}  `}</Typography.Text>
              <InfoCircleOutlined />
            </Tooltip>
          </Row>
        );
      }
      return value;
    },
  },
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
    render: (value: any, order: any) => {
      if (order.productImages.length > 0) {
        return <ImagePopover images={order.productImages} text={value} />;
      }
      return value;
    },
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
    render: (value: number) => {
      if (value <= settings.remainingTimeLevel) {
        return <Typography.Text type="danger">{value}</Typography.Text>;
      }
      return value;
    },
  },
  {
    key: 'type',
    title: 'Ürün Tipi',
    dataIndex: 'type',
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: WorkshopStatus) => {
      const { status, text } = WorkshopStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

export const materialProductionColumns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
    render: (value: any, order: any) => {
      if (order.notes) {
        return (
          <Row className="note">
            <Tooltip placement="topLeft" title={order.notes} arrowPointAtCenter>
              <Typography.Text>{`${value}  `}</Typography.Text>
              <InfoCircleOutlined />
            </Tooltip>
          </Row>
        );
      }
      return value;
    },
  },
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
    render: (value: any, order: any) => {
      if (order.productImages.length > 0) {
        return <ImagePopover images={order.productImages} text={value} />;
      }
      return value;
    },
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
    render: (value: number) => {
      if (value <= settings.remainingTimeLevel) {
        return <Typography.Text type="danger">{value}</Typography.Text>;
      }
      return value;
    },
  },
  {
    key: 'sent',
    title: 'Gönderilen',
    dataIndex: 'sent',
    render: (value: any, product: any) => {
      const services = product.externalServices.filter(
        (service: any) => !service.isRawMaterial,
      );
      if (services.length > 0) {
        return services[0].name;
      }
      return value;
    },
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: WorkshopStatus) => {
      const { status, text } = WorkshopStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

export const paintColumns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
    render: (value: any, order: any) => {
      if (order.notes) {
        return (
          <Row className="note">
            <Tooltip placement="topLeft" title={order.notes} arrowPointAtCenter>
              <Typography.Text>{`${value}  `}</Typography.Text>
              <InfoCircleOutlined />
            </Tooltip>
          </Row>
        );
      }
      return value;
    },
  },
  {
    key: 'sku',
    title: 'SKU',
    dataIndex: 'sku',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
    render: (value: any, order: any) => {
      if (order.productImages.length > 0) {
        return <ImagePopover images={order.productImages} text={value} />;
      }
      return value;
    },
  },
  {
    key: 'type',
    title: 'Ürün Tipi',
    dataIndex: 'type',
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
    render: (value: number) => {
      if (value <= settings.remainingTimeLevel) {
        return <Typography.Text type="danger">{value}</Typography.Text>;
      }
      return value;
    },
  },
  {
    key: 'sent',
    title: 'Gönderilen',
    dataIndex: 'sent',
    render: (value: any, product: any) => {
      const services = product.externalServices.filter(
        (service: any) => !service.isRawMaterial,
      );
      if (services.length > 0) {
        return services[0].name;
      }
      return value;
    },
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
    render: (value: WorkshopStatus) => {
      const { status, text } = WorkshopStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

export const mainStatusArray: ProgressStepValue[] = [
  {
    text: 'Üretime Hazır',
    value: WorkshopStatus.READY,
  },
  {
    text: 'Üretimde',
    value: WorkshopStatus.IN_PRODUCTION,
  },
  {
    text: 'Tamamlandı',
    value: WorkshopStatus.COMPLETED,
  },
];

export const materialStatusArray: ProgressStepValue[] = [
  {
    text: 'Üretime Hazır',
    value: WorkshopStatus.READY,
  },
  {
    text: 'Üretimde',
    value: WorkshopStatus.IN_PRODUCTION,
  },
  {
    text: 'Teslim Alındı',
    value: WorkshopStatus.RECEIVED,
  },
  {
    text: 'Tamamlandı',
    value: WorkshopStatus.COMPLETED,
  },
];

export const mainWorkshopNextButtonText: Record<WorkshopStatus, string> = {
  [WorkshopStatus.READY]: 'Üretime Başla',
  [WorkshopStatus.IN_PRODUCTION]: 'Üretimi Tamamla',
  [WorkshopStatus.RECEIVED]: '',
  [WorkshopStatus.COMPLETED]: '',
  [WorkshopStatus.IN_PAINT]: '',
};

export const materialWorkshopNextButtonText: Record<WorkshopStatus, string> = {
  [WorkshopStatus.READY]: 'Gönder',
  [WorkshopStatus.IN_PRODUCTION]: 'Teslim Al',
  [WorkshopStatus.RECEIVED]: 'Tamamlandı',
  [WorkshopStatus.COMPLETED]: '',
  [WorkshopStatus.IN_PAINT]: '',
};
