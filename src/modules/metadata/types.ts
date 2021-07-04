export enum MetadataType {
  CT = 'CT',
  CA = 'CA',
  AY = 'AY',
  TB = 'TB',
}

export type MetadataDTO = {
  id: string;
  categoryName: MetadataType;
  materialName: string;
  materialId: number;
};

export type Metadata = {
  id: string;
  material: string;
  number: number;
};
