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
  READY = 'READY',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}
