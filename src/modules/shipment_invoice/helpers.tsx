import {
  InvoiceStatus,
  ManagementProductStatus,
  ShipmentData,
  ShipmentManagementData,
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

export const dummyManagmentData: ShipmentManagementData[] = [
  {
    orderId: '100000',
    remainingTime: 12,
    customer: 'Berkay Yılmaz',
    marketplace: 'Trendyol',
    desi: 25,
    completed: true,
    tableProduct: [
      {
        name: 'Tidy Dresuar',
        status: ManagementProductStatus.COMPLETED,
      },
      {
        name: 'Tidy Dresuar',
        status: ManagementProductStatus.COMPLETED,
      },
    ],
  },
  {
    orderId: '100001',
    remainingTime: 9,
    customer: 'Berkay Yılmaz',
    marketplace: 'Trendyol',
    desi: 205,
    completed: false,
    tableProduct: [
      {
        name: 'Deneme Product',
        status: ManagementProductStatus.COMPLETED,
      },
      {
        name: 'Tidy Dresuar',
        status: ManagementProductStatus.IN_PROGRESS,
      },
    ],
  },
  {
    orderId: '100002',
    remainingTime: 9,
    customer: 'Deniz Muratoğlu',
    marketplace: 'Evka',
    completed: true,
    desi: 341,
    tableProduct: [
      {
        name: 'Product Deneme',
        status: ManagementProductStatus.COMPLETED,
      },
    ],
  },
];

export const dummyShipmentData: ShipmentData[] = [
  {
    orderId: '1049234',
    remainingTime: 5,
    customer: 'Berkay Yılmaz',
    marketplace: 'Trendyol',
    cargoNo: '-',
    shipmentType: 'Kargo',
    company: 'Aras Kargo',
  },
  {
    orderId: '1049235',
    remainingTime: 3,
    customer: 'Berkay Yılmaz',
    marketplace: 'Trendyol',
    cargoNo: '1234155',
    shipmentType: 'Nakliyat',
    company: 'Evka',
  },
];
