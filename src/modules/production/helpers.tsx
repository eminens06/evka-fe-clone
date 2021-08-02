import React from 'react';
import Status from '../../atoms/Status';
import { ProgressStepValue } from '../../molecules/types';
import { WorkshopStatus } from './types';

const WorkshopStatusMapper: Record<WorkshopStatus, StatusObject> = {
  [WorkshopStatus.READY]: {
    text: 'Üretime Hazır',
    status: 'error',
  },
  [WorkshopStatus.IN_PRODUCTION]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [WorkshopStatus.RECIEVED]: {
    text: 'Teslim Alındı',
    status: 'pending',
  },
  [WorkshopStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
};

export const mainProductionColumns = [
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

export const subProductionColumns = [
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
    key: 'type',
    title: 'Ürün Tipi',
    dataIndex: 'type',
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
