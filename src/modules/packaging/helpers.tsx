import { Row, Tooltip, Typography } from 'antd';
import React from 'react';
import Status from '../../atoms/Status';
import { ProgressStepValue } from '../../molecules/types';
import settings from '../../settings';
import ImagePopover from '../common/ImagePopover';
import { PackageStatus } from './types';
import { InfoCircleOutlined } from '@ant-design/icons';

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
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
    render: (value: any, order: any) => {
      if (order.productImages.length > 0) {
        return (
          <ImagePopover
            images={order.productImages}
            text={value}
            key={order.orderId}
          />
        );
      }
      return value;
    },
  },
  {
    key: 'remainingDate',
    title: 'Kalan Süre',
    dataIndex: 'remainingDate',
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
    key: 'legMaterial',
    title: 'Ayak Malzemesi',
    dataIndex: 'legMaterial',
  },
  {
    key: 'tableMaterial',
    title: 'Tabla Malzemesi',
    dataIndex: 'tableMaterial',
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
