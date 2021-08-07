export enum ShipmentStatus {
  READY = 'READY',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export enum InvoiceStatus {
  READY = 'READY',
  COMPLETED = 'COMPLETED',
  NONE = 'NONE',
}

export enum ManagementProductStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
}

export type ShipmentManagementTableProduct = {
  name: string;
  status: ManagementProductStatus;
};

export type ShipmentInvoiceSummaryData = {
  orderId: string;
  remainingTime: number;
  customer: string;
  shipmentStatus: ShipmentStatus;
  invoiceStatus: InvoiceStatus;
};

export type ShipmentManagementData = {
  orderId: string;
  remainingTime: number;
  customer: string;
  marketplace: string;
  desi: number;
  completed?: boolean;
  tableProduct: ShipmentManagementTableProduct[];
};

type ShipmentType = 'Nakliyat' | 'Kargo';
export type ShipmentTypeValue = 'SH' | 'CR';

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
