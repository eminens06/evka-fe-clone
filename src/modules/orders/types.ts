type OrderProduct = {
  name: string;
  count: number;
};

type UserOrderProductDTO = {};

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
  products: string;
  remainingTime: number;
};
