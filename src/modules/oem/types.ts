export type Oem = {
  orderId: string;
  id: string;
  marketplace: string;
  productName: string;
  remainingTime: number;
  purchasePrice?: number;
  sku: string;
};

export type OemFormData = {
  productId: string;
  purchasePrice: number;
  externalId: string;
};
