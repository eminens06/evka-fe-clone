export type PackagingTableData = {
  orderId: string;
  productName: string;
  remainingDate: number;
  isCollectable: boolean;
  status: PackageStatus;
  packageCount: number;
  isMonte: boolean;
};

export enum PackageStatus {
  READY = 'R',
  IN_PROGRESS = 'I',
  COMPLETED = 'C',
}
