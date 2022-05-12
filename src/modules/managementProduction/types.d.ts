import { Record } from 'relay-runtime';
import { MetadataType, MetadataType } from '../metadata/types';
import { OrderTypes } from '../orders/types';

export type ProductManagmentMetaProductDTO = {
  categoryName: MetadataType;
  materialName: string;
};

type UserOrderSetDTO = {
  customerInfo: string;
  marketplace: {
    name: string;
  };
  marketplaceOrderId: string;
};

export type ProductionManagementDataDTO = {
  notes: string;
  orderCount: number;
  id: string;
  product: {
    id: string;
    sku: string;
    metaProducts: {
      edges: {
        node: ProductManagmentMetaProductDTO[];
      };
    };
    name: string;
    productImages: any[];
  };
  userOrder: {
    edges: {
      node: UserOrderSetDTO[];
    };
  };
};

export type ProductManagmentMetaProduct = Record<MetadataType, string>;

type ProductManagementCustomerInfo = {
  name: string;
  surname: string;
  phone_number: string;
  delivery_address: string;
};

export type ProductionManagment = {
  id: string;
  notes: string;
  count: number;
  orderId: string;
  marketplace: string;
  productName: string;
  customerInfo: ProductManagementCustomerInfo;
  category: string;
  subCategory: string;
  legMaterial: string;
  tableMaterial: string;
  sku: string;
  orderType: OrderTypes;
  remainingTime: number;
  productImages: any[];
  existInStorage?: boolean | any;
};
