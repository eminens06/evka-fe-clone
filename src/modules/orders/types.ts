import { MetadataType } from '../metadata/types';
import moment from 'moment';
import { ShipmentTypeValue } from '../shipment_invoice/types';

type OrderProductDTO = {
  node: {
    orderCount: number;
    product: {
      name: string;
      productName: string;
      metaInfo: string;
      sku: string;
      kdv?: string;
    };
  };
};

type OrderProductMetaInfo = {
  [MetadataType.AY]: string;
  [MetadataType.TB]: string;
};

export interface OrderProduct {
  count: number;
  name: string;
  productName: string;
  metaInfo?: OrderProductMetaInfo;
  sku: string;
  price?: number;
  kdv: string;
}

export type UserOrderProductDTO = {
  price?: number;
  edges: OrderProductDTO[];
};

export enum OldOrderstatusType {
  DF = 'DF',
  P = 'P',
}

export type UserOrderDTO = {
  customerInfo: string;
  id: string;
  marketplace: {
    name: string;
  };
  marketplaceOrderId: string;
  notes: string;
  orderStatus: string;
  totalPrice: number;
  products: UserOrderProductDTO;
  orderType: OrderTypes;
  estimatedDeliveryDate: moment.Moment;
  shipmentCompanyName?: string;
  shipmentType?: ShipmentTypeValue;
  invoiceStatus: string;
  shipmentStatus: string;
  shipmentOrderDate?: any;
  kdv?: string;
};

export type UserOrder = {
  customer: string;
  id: string;
  orderId: string;
  notes: string;
  marketplace: string;
  status: string;
  price: number;
  products: OrderProduct[];
  remainingTime: number;
  orderType: OrderTypes;
};

export interface CustomerDTO {
  tc: string;
  name: string;
  surname?: string;
  phone_number: string;
  invoice_address: string;
  delivery_address: string;
  is_corporate?: boolean;
}

export enum OrderTypes {
  NORMAL = 'NR',
  CUSTOM = 'SP',
  STORE = 'ST',
}
