export interface productDTO {
  readonly id: string;
  readonly name: string;
  readonly sku: string | null;
  readonly metaProducts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly materialName: string;
        readonly type: string | null;
      } | null;
    } | null>;
  };
}

export interface metaProductsDTO {
  readonly node: {
    readonly materialName: string;
    readonly type: string | null;
  } | null;
}
