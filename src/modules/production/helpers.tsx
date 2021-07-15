import React from 'react';
import Status from '../../atoms/Status';
import { ProgressStepValue } from '../../molecules/types';
import { WorkshopStatus } from './types';

const WorkshopStatusMapper: Record<WorkshopStatus, Status> = {
  [WorkshopStatus.READY]: 'error',
  [WorkshopStatus.IN_PRODUCTION]: 'warning',
  [WorkshopStatus.RECIEVED]: 'pending',
  [WorkshopStatus.COMPLETED]: 'success',
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
      return <Status status={WorkshopStatusMapper[value]} text={value} />;
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
      return <Status status={WorkshopStatusMapper[value]} text={value} />;
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
