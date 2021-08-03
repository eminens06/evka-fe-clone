import { UserOrderSetDTO } from '../managementProduction/types';

export enum WorkshopStatus {
  READY = 'READY',
  IN_PRODUCTION = 'IN_PRODUCTION',
  RECIEVED = 'RECIEVED',
  COMPLETED = 'COMPLETED',
}

export enum MainPartsStatus {
  READY = 'READY',
  IN_PRODUCTION = 'IN_PRODUCTION',
  WAITING_PAINT = 'WAITING_PAINT',
  PAINT = 'PAINT',
  COMPLETED = 'COMPLETED',
}

export enum MaterialStatus {
  NONE = 'NONE',
  READY = 'READY',
  IN_PRODUCTION = 'IN_PRODUCTION',
  RECIEVED = 'RECIEVED',
  COMPLETED = 'COMPLETED',
}

export interface WorkshopProps {}

export type ProductionSummaryDTO = {
  ayakStatus: string;
  tablaStatus: string;
  fabricStatus: string;
  marbleStatus: string;
  glassStatus: string;
  orderCount: number;
  id: string;
  product: {
    id: string;
    name: string;
  };
  userorderSet: {
    edges: {
      node: UserOrderSetDTO[];
    };
  };
};

export type ProductionSummary = {
  ayakStatus: string;
  tablaStatus: string;
  fabricStatus: string;
  marbleStatus: string;
  glassStatus: string;
  orderCount: number;
  id: string;
  productName: string;
  orderId: string;
};

export type ProductionWorkshopDataDTO = {
  id: string;
  woodStatus: string;
  metalStatus: string;
  tablaStatus: string;
  ayakStatus: string;
  fabricStatus: string;
  marbleStatus: string;
  glassStatus: string;
  orderCount: number;
  product: {
    id: string;
    name: string;
    sku: string;
    width: string;
    height: string;
    length: string;
  };
  metaProdcuts: {
    edges: {
      node: {
        categoryName: string;
        materialName: string;
        metaType: string;
      };
    };
  };
  userOrder: {
    edges: {
      node: UserOrderSetDTO[];
    };
  };
};

export type ProductionMainWorkshopData = {
  id: string;
  sku: string;
  orderId: string;
  orderCount: number;
  productName: string;
  status: WorkshopStatus;
  type: 'Ayak' | 'Tabla';
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  materialName: string;
};

export enum WorkshopTypes {
  METAL = 'metal',
  WOOD = 'wood',
  GLASS = 'glass',
  FABRIC = 'fabric',
  MARBLE = 'marble',
}
