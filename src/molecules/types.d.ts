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
type Column = {
  key: string;
  title: string;
  dataIndex: string;
  render?: Function;
};

type Data = Record<string, any>;

type DataSource = Data[];

type ProgressStepValue = {
  value: WorkshopStatus;
  text: string;
};
