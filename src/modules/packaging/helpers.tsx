import { Typography } from 'antd';
import React from 'react';
import Status from '../../atoms/Status';
import { ProgressStepValue } from '../../molecules/types';
import settings from '../../settings';
import { PackageStatus } from './types';

export const StatusMapper: Record<PackageStatus, StatusObject> = {
  [PackageStatus.READY]: {
    text: 'Paketlemeye Hazır',
    status: 'error',
  },
  [PackageStatus.IN_PROGRESS]: {
    text: 'Paketlemede',
    status: 'warning',
  },
  [PackageStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
};

export const packagingColumns = [
  {
    key: 'orderId',
    title: 'Sipariş',
    dataIndex: 'orderId',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
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
    key: 'packageCount',
    title: 'Paket Sayısı',
    dataIndex: 'packageCount',
  },
  {
    key: 'isCollectable',
    title: 'Toplama Durumu',
    dataIndex: 'isCollectable',
    render: (value: boolean) => {
      const { status, text } = value
        ? {
            status: 'success' as Status,
            text: 'Toplanacak',
          }
        : {
            status: 'error' as Status,
            text: 'Toplanmayacak',
          };
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'status',
    title: 'Paketleme Durumu',
    dataIndex: 'status',
    render: (value: PackageStatus) => {
      const { status, text } = StatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

export const statusArray: ProgressStepValue[] = [
  {
    text: 'Paketlemeye Hazır',
    value: PackageStatus.READY,
  },
  {
    text: 'Paketleniyor',
    value: PackageStatus.IN_PROGRESS,
  },
  {
    text: 'Paketleme Tamamlandı',
    value: PackageStatus.COMPLETED,
  },
];

export const statusNextButtonText: Record<PackageStatus, string> = {
  [PackageStatus.READY]: 'Paketlemeye Gönder',
  [PackageStatus.IN_PROGRESS]: 'Paketlemeyi Tamamla',
  [PackageStatus.COMPLETED]: '',
};
