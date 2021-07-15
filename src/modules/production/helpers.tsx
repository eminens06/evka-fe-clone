import React from 'react';
import Status from '../../atoms/Status';
import { WorkshopStatus } from './types';

const WorkshopStatusMapper: Record<WorkshopStatus, Status> = {
  [WorkshopStatus.READY]: 'error',
  [WorkshopStatus.IN_PRODUCTION]: 'warning',
  [WorkshopStatus.RECIEVED]: 'pending',
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
