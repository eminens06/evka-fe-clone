export type PackagingTableData = {
  orderId: string;
  productName: string;
  remainingDate: string;
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
