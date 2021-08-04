import React from 'react';
import Status from '../../atoms/Status';
import { ProgressStepValue } from '../../molecules/types';
import {
  MainPartsStatus,
  MaterialStatus,
  WorkshopStatus,
  WorkshopTypes,
} from './types';

const WorkshopStatusMapper: Record<WorkshopStatus, StatusObject> = {
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
};

const MainPartsStatusMapper: Record<MainPartsStatus, StatusObject> = {
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
  [MainPartsStatus.PAINT]: {
    text: 'Boyada',
    status: 'pending',
  },
  [MainPartsStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
};

const MaterialStatusMapper: Record<MaterialStatus, StatusObject> = {
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
};

export const WorkshopStatusNames: Record<WorkshopTypes, string> = {
  [WorkshopTypes.FABRIC]: 'fabricStatus',
  [WorkshopTypes.GLASS]: 'glassStatus',
  [WorkshopTypes.METAL]: 'metalStatus',
  [WorkshopTypes.WOOD]: 'woodStatus',
  [WorkshopTypes.MARBLE]: 'marbleStatus',
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
  },
  {
    key: 'sent',
    title: 'Gönderilen',
    dataIndex: 'sent',
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
  ...mainStatusArray,
  {
    text: 'Teslim Alındı',
    value: WorkshopStatus.RECEIVED,
  },
];

export const mainWorkshopNextButtonText: Record<WorkshopStatus, string> = {
  [WorkshopStatus.READY]: 'Üretime Gönder',
  [WorkshopStatus.IN_PRODUCTION]: 'Üretimi Tamamla',
  [WorkshopStatus.RECEIVED]: '',
  [WorkshopStatus.COMPLETED]: '',
};

export const materialWorkshopNextButtonText: Record<WorkshopStatus, string> = {
  [WorkshopStatus.READY]: 'Gönder',
  [WorkshopStatus.IN_PRODUCTION]: 'Teslim Al',
  [WorkshopStatus.RECEIVED]: 'Tamamlandı',
  [WorkshopStatus.COMPLETED]: '',
};
