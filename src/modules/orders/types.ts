import { MetadataType } from '../metadata/types';

type OrderProductDTO = {
  node: {
    orderCount: number;
    product: {
      name: string;
      productName: string;
      metaInfo: string;
      sku: string;
    };
  };
};

type OrderProductMetaInfo = {
  [MetadataType.AY]: string;
  [MetadataType.TB]: string;
};

export type OrderProduct = {
  count: number;
  name: string;
  productName: string;
  metaInfo?: OrderProductMetaInfo;
  sku: string;
};

export type UserOrderProductDTO = {
  edges: OrderProductDTO[];
};

export enum OrderStatusType {
  DF = 'DF',
}

export type UserOrderDTO = {
  customerInfo: string;
  id: string;
  marketplace: {
    name: string;
  };
  marketplaceOrderId: string;
  notes: string;
  orderStatus: OrderStatusType;
  totalPrice: number;
  products: UserOrderProductDTO;
};

export type UserOrder = {
  customer: string;
  id: string;
  orderId: string;
  notes: string;
  marketplace: string;
  status: OrderStatusType;
  price: number;
  products: OrderProduct[];
  remainingTime: number;
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
