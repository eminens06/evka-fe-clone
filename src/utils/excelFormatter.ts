import { OrderProduct, UserOrder } from '../modules/orders/types';
import { StatusMapper } from '../modules/packaging/helpers';
import { PackageStatus } from '../modules/packaging/types';
import {
  MainPartsStatusMapper,
  MaterialStatusMapper,
  WorkshopStatusMapper,
} from '../modules/production/helpers';
import {
  MainPartsStatus,
  MaterialStatus,
  PackagingList,
  ProductionMainWorkshopData,
  ProductionMaterialWorkshopData,
  ProductionSummary,
} from '../modules/production/types';
import { InvoiceStatusMapper } from '../modules/shipment_invoice/helpers';
import { ShipmentInvoiceSummaryData } from '../modules/shipment_invoice/types';

const productReducer = (products: OrderProduct[]) => {
  const productString = products.reduce((acc, value) => {
    const count = value.count > 1 ? ` x ${value.count}` : '';
    acc += `${value.name} ${count}\n`;
    return acc;
  }, '');
  return productString;
};

const orders = (data: UserOrder[]) => {
  return data.map((item) => {
    return {
      ...item,
      products: productReducer(item.products),
    };
  });
};

const productionSummary = (data: ProductionSummary[]) => {
  return data.map((item) => {
    const tablaStatus = item.tablaStatus as MainPartsStatus;
    const ayakStatus = item.ayakStatus as MainPartsStatus;
    const glassStatus = item.glassStatus as MaterialStatus;
    const fabricStatus = item.fabricStatus as MaterialStatus;
    const marbleStatus = item.marbleStatus as MaterialStatus;
    return {
      ...item,
      tablaStatus: MainPartsStatusMapper[tablaStatus].text,
      ayakStatus: MainPartsStatusMapper[ayakStatus].text,
      glassStatus: MaterialStatusMapper[glassStatus].text,
      fabricStatus: MaterialStatusMapper[fabricStatus].text,
      marbleStatus: MaterialStatusMapper[marbleStatus].text,
    };
  });
};

const mainProduction = (data: ProductionMainWorkshopData[]) => {
  return data.map((item) => {
    return {
      ...item,
      status: WorkshopStatusMapper[item.status].text,
    };
  });
};

const materialProduction = (data: ProductionMaterialWorkshopData[]) => {
  return data.map((item) => {
    const services = item.externalServices.filter(
      (service: any) => !service.isRawMaterial,
    );
    let sent = '';
    if (services.length > 0) {
      sent = services[0].name;
    }
    return {
      ...item,
      sent: sent,
      status: WorkshopStatusMapper[item.status].text,
    };
  });
};

const packaging = (data: PackagingList[]) => {
  return data.map((item) => {
    const st = item.status as PackageStatus;
    return {
      ...item,
      status: StatusMapper[st].text,
      isCollectable: item.isCollectable ? 'Toplanacak' : 'Toplanmayacak',
    };
  });
};

const shipmentInvoice = (data: ShipmentInvoiceSummaryData[]) => {
  return data.map((item) => {
    return {
      ...item,
      products: productReducer(item.products),
      invoiceStatus: InvoiceStatusMapper[item.invoiceStatus].text,
    };
  });
};

export default {
  orders,
  productionSummary,
  mainProduction,
  materialProduction,
  packaging,
  shipmentInvoice,
};
