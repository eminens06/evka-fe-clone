import { ModuleType } from '../admin/externalService/types';
import { UserOrderSetDTO } from '../managementProduction/types';
import { OrderTypes } from '../orders/types';

export enum WorkshopStatus {
  READY = 'READY',
  IN_PRODUCTION = 'IN_PRODUCTION',
  RECEIVED = 'RECEIVED',
  COMPLETED = 'COMPLETED',
  IN_PAINT = 'IN_PAINT',
  NONE = 'NONE',
}

export enum MainPartsStatus {
  READY = 'READY',
  IN_PRODUCTION = 'IN_PRODUCTION',
  WAITING_PAINT = 'WAITING_PAINT',
  IN_PAINT = 'IN_PAINT',
  COMPLETED = 'COMPLETED',
  NONE = 'NONE',
  DEFAULT = 'DEFAULT',
}

export enum MaterialStatus {
  NONE = 'NONE',
  READY = 'READY',
  IN_PRODUCTION = 'IN_PRODUCTION',
  RECEIVED = 'RECEIVED',
  COMPLETED = 'COMPLETED',
}

export enum PaintTypes {
  WOOD = 'WD',
  METAL = 'MT',
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
  tablaStatus: string;
  ayakStatus: string;
  tablaPaintStatus: string;
  ayakPaintStatus: string;
  fabricStatus: string;
  marbleStatus: string;
  glassStatus: string;
  orderCount: number;
  notes: string;
  product: {
    id: string;
    name: string;
    sku: string;
    width: number;
    height: number;
    length: number;
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
  externalService?: {
    edges: {
      node: {
        name: string;
        phoneNumber: string;
        address: string;
      };
    };
  };
};

export type ProductionMainWorkshopData = {
  id: string;
  sku: string;
  orderId: string;
  productName: string;
  status: WorkshopStatus;
  type: 'Ayak' | 'Tabla';
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  materialName: string;
  rowKey: string;
};

export type ProductionMaterialWorkshopData = {
  id: string;
  sku: string;
  orderId: string;
  productName: string;
  status: WorkshopStatus;
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  type: WorkshopTypes;
  externalServices: WorkshopExternalService[];
  categoryName?: string;
  materialName?: string;
  tablaName?: string;
};

export enum WorkshopTypes {
  METAL = 'metal',
  WOOD = 'wood',
  GLASS = 'glass',
  FABRIC = 'fabric',
  MARBLE = 'marble',
  METAL_PAINT = 'metal_paint',
  WOOD_PAINT = 'wood_paint',
}

export type WorkshopExternalServiceParams = {
  externalServiceIds: string;
  rawMaterial?: string;
};

export type WorkshopExternalServiceDTO = {
  readonly id: string;
  readonly name: string;
  readonly phoneNumber: string | null;
  readonly address: string;
};

export type WorkshopExternalService = {
  name: string;
  phoneNumber: string;
  address: string;
  module: ModuleType;
};

export type PackagingListDTO = {
  id: string;
  packagingStatus: string;
  marbleStatus: string;
  glassStatus: string;
  product: {
    name: string;
    isCollectable: boolean;
    packageCount: number;
    isMonte: boolean;
  };
  userOrder: {
    edges: {
      node: {
        marketplaceOrderId: string;
        marketplace: { name: string };
      }[];
    };
  };
  notes: string;
};

export type PackagingList = {
  orderId: string;
  productName: string;
  remainingDate: number;
  isCollectable: boolean;
  status: string;
  legMaterial: string;
  tableMaterial: string;
  packageCount: number;
  isMonte: boolean;
  id: string;
};

export const RowClass: Record<OrderTypes, string> = {
  NR: '',
  SP: 'custom-row',
  ST: '',
};
