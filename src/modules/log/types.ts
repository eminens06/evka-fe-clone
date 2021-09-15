import { ModuleType } from '../admin/externalService/types';
import { CustomerDTO, OrderProduct } from '../orders/types';

type StatusChange = {
  oldStatus: string;
  newStatus: string;
};

export type LogExternalService = {
  name: string;
  isRawMaterial: boolean;
  module: ModuleType;
};

export interface LogOrderProduct extends OrderProduct {
  externalService: LogExternalService[];
}

export type OrderLogDetail = {
  id: string;
  orderType: string;
  orderDate: any;
  marketplace: string;
  commissionRate: number;
  completedDate: any;
  status: string;
  notes: string;
  totalPrice: number;
  customerInfo: CustomerDTO;
  customer: string;
  orderId: string;
  invoiceInfo: string;
  cargoChaseNumber?: string;
  shipmentOrderDate: any;
  products: LogOrderProduct[];
};

export interface HistoryDTO {
  id: string;
  updatedDate: any;
  user: {
    firstName: string;
    lastName: string;
  };
  oldStatus: string;
  newStatus: string;
}

export interface ProductHistoryDTO extends HistoryDTO {
  module: string;
  type: string;
  productOrder: {
    product: {
      name: string;
    };
  };
}

export interface OrderHistory {
  id: string;
  date: any;
  user: string;
  change: StatusChange;
}

export interface ProductHistory extends OrderHistory {
  module: string;
  type: string;
  product: string;
}
