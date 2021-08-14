export enum MetadataType {
  CT = 'CT',
  CA = 'CA',
  AY = 'AY',
  TB = 'TB',
}

export enum MetaWorkshopType {
  MT = 'MT',
  WD = 'WD',
  DF = 'DF',
  F = 'F',
  M = 'M',
  G = 'G',
}

export type MetadataDTO = {
  id: string;
  categoryName: MetadataType;
  materialName: string;
  materialId: number;
  metaType?: MetaWorkshopType;
  paintType?: MetaWorkshopType;
};

export type Metadata = {
  id: string;
  material: string;
  number: number;
  metaType?: MetaWorkshopType;
  paintType?: MetaWorkshopType;
};
