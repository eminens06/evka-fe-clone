import {
  InvoiceStatus,
  ManagementProductStatus,
  ShipmentStatus,
} from './types';

export const InvoiceStatusMapper: Record<InvoiceStatus, StatusObject> = {
  [InvoiceStatus.READY]: {
    text: 'Fatura Kesilmedi',
    status: 'error',
  },
  [InvoiceStatus.NONE]: {
    text: 'Fatura Kesilmeyecek',
    status: 'none',
  },
  [InvoiceStatus.DONE]: {
    text: 'Fatura Kesildi',
    status: 'success',
  },
  [InvoiceStatus.COMPLETED]: {
    text: 'Fatura Kesildi',
    status: 'success',
  },
};

export const ShipmentStatusMapper: Record<ShipmentStatus, StatusObject> = {
  [ShipmentStatus.READY]: {
    text: 'Sevkiyata Hazır',
    status: 'error',
  },
  [ShipmentStatus.IN_PROGRESS]: {
    text: 'Sevk Emri Verildi',
    status: 'warning',
  },
  [ShipmentStatus.COMPLETED]: {
    text: 'Sevk Edildi ',
    status: 'success',
  },
};

export const ManagementProductMapper: Record<
  ManagementProductStatus,
  StatusObject
> = {
  [ShipmentStatus.IN_PROGRESS]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [ShipmentStatus.COMPLETED]: {
    text: 'Tamamlandı',
    status: 'success',
  },
};
