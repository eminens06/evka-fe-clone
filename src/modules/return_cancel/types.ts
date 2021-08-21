export type ReturnCancelData = {
  id: string;
  orderId: string;
  marketplace: string;
  customer: string;
  status: string;
  isPartlyReturned: boolean;
  isPartlyCanceled: boolean;
  productText: string;
  note: string;
};
