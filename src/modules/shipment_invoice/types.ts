import { CustomerDTO, OrderProduct } from '../orders/types';

export enum ShipmentStatus {
  READY = 'Sevkiyata Hazır',
  IN_PROGRESS = 'Sevkiyat Emri Verildi',
  COMPLETED = 'Sevk Edildi',
}

export enum InvoiceStatus {
  READY = 'READY',
  COMPLETED = 'COMPLETED',
  NONE = 'NONE',
  DONE = 'DONE',
}

export enum ManagementProductStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
}

export type ShipmentManagementTableProduct = {
  name: string;
  status: ProductOrderStatusType;
};

export type ShipmentInvoiceSummaryData = {
  id: string;
  orderId: string;
  products: OrderProduct[];
  remainingTime: number;
  customer: string;
  shipmentStatus: ShipmentStatus;
  invoiceStatus: InvoiceStatus;
  notes?: string;
};

export type ShipmentManagementData = {
  id: string;
  orderId: string;
  remainingTime: number;
  customer: string;
  marketplace: string;
  desi: number;
  completed?: boolean;
  tableProduct: ShipmentManagementTableProduct[];
};

export type ShipmentType = 'Nakliyat' | 'Kargo';
export type ShipmentTypeValue = 'S' | 'C';

export type ShipmentFormTypes = {
  shipmentType: ShipmentTypeValue;
  shipmentCompanyName: string;
};

export type ShipmentData = {
  orderId: string;
  remainingTime: number;
  customer: string;
  marketplace: string;
  cargoNo: string;
  shipmentType: ShipmentType;
  company: string;
};

export type ShippingTypeOption = {
  text: ShipmentType;
  value: ShipmentTypeValue;
};

export type CargoTypeOption = {
  text: string;
  value: string;
};

export enum ProductOrderStatusType {
  DF = 'DEFAULT',
  P = 'PRODUCTION',
  C = 'COMPLETED',
  CC = 'CANCELED',
  PP = 'PACKAGING',
  D = 'DONE',
}
export const ShipmentTableStatusMapper: Record<
  ProductOrderStatusType,
  StatusObject
> = {
  [ProductOrderStatusType.DF]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [ProductOrderStatusType.P]: {
    text: 'Üretimde',
    status: 'warning',
  },
  [ProductOrderStatusType.C]: {
    text: 'Üretim Tamamlandı',
    status: 'success',
  },
  [ProductOrderStatusType.PP]: {
    text: 'Paketlemede',
    status: 'pending',
  },
  [ProductOrderStatusType.D]: {
    text: 'Tamamlandı',
    status: 'success',
  },
  [ProductOrderStatusType.CC]: {
    text: 'İptal Edildi',
    status: 'error',
  },
};

type ProductOrderProductOrderStatus = 'C' | 'D' | 'DF' | 'P' | 'PP';

export interface ShipmentTableProduct {
  productOrderStatus: ProductOrderProductOrderStatus;
  product: {
    name: string;
    sku: string;
    width: number;
    height: number;
    length: number;
  };
}
export interface ShipmentTableDTO {
  id: string;
  customerInfo: string;
  marketplaceOrderId: string;
  estimatedDeliveryDate: any;
  marketplace: { name: string };
  orderStatus: ProductOrderStatusType;
  products: { edges: { node: ShipmentTableProduct[] }[] };
  cargoChaseNumber?: number;
  shipmentType: ShipmentTypeValue;
  shipmentCompanyName?: string;
}
export type Invoice = {
  id: string;
  orderId: string;
  marketplace: string;
  shipmentCompany: string;
  notes?: string;
  customer: string;
  customerDetail: CustomerDTO;
  products: OrderProduct[];
};

export type KdvParams = {
  kdv1?: number;
  kdv2?: number;
  kdv3: number;
};
