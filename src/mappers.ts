import { Roles, RoleTexts } from './layout/roles';
import { MetadataDTO, Metadata, MetadataType } from './modules/metadata/types';
import { UserOrderDTO, UserOrder, CustomerDTO } from './modules/orders/types';
import { User } from './modules/auth/types';
import { OrdersAllMarketplacesQueryResponse } from './__generated__/OrdersAllMarketplacesQuery.graphql';
import { daysInMonth, months, productMetaData } from './utils/enums';
import {
  ProductionManagementDataDTO,
  ProductionManagment,
  ProductManagmentMetaProduct,
  ProductManagmentMetaProductDTO,
} from './modules/managementProduction/types';
import {
  PackagingList,
  PackagingListDTO,
  ProductionMainWorkshopData,
  ProductionMaterialWorkshopData,
  ProductionSummary,
  ProductionSummaryDTO,
  ProductionWorkshopDataDTO,
  WorkshopExternalService,
  WorkshopExternalServiceDTO,
  WorkshopTypes,
} from './modules/production/types';
import {
  MainPartsShortNames,
  MaterialTypeShortName,
  WorkshopStatusNames,
} from './modules/production/helpers';
import { ProductionRelayWorkshopQueryResponse } from './__generated__/ProductionRelayWorkshopQuery.graphql';
import moment from 'moment';
import {
  ProductOrderStatusType,
  ShipmentTableDTO,
  ShipmentTableProduct,
  ShipmentType,
  ShipmentTypeValue,
  Invoice,
  InvoiceStatus,
  ShipmentInvoiceSummaryData,
  ShipmentStatus,
} from './modules/shipment_invoice/types';
import { TemplateData } from './modules/template/types';
import {
  laborFields,
  metalFields,
  otherFields,
  otherWorkshopFields,
  woodFields,
} from './modules/admin/parameters/enums';
import { LogOrderTypeTexts } from './modules/log/helpers';
import {
  HistoryDTO,
  LogOrderProduct,
  OrderHistory,
  OrderLogDetail,
  ProductHistory,
  ProductHistoryDTO,
} from './modules/log/types';
import { ReturnCancelData } from './modules/return_cancel/types';
import { ModuleType } from './modules/admin/externalService/types';
import { Oem } from './modules/oem/types';
import {
  laborPropsFileds,
  metalPropsFileds,
  otherPropsFileds,
  otherWsPropsFileds,
  woodPropsFileds,
} from './modules/admin/products/enums';
import { getImageGroupByWidth } from './utils/helpers';

export const metaDataMapper = (data: any) => {
  return data.edges.reduce((acc: any, key: any) => {
    if (acc[key.node.categoryName]) {
      acc[key.node.categoryName].push({
        text: key.node.materialName,
        value: key.node.materialName,
      });
    } else {
      acc[key.node.categoryName] = [
        {
          text: key.node.materialName,
          value: key.node.materialName,
        },
      ];
    }
    return acc;
  }, []);
};

export const productsMapper = (data: any) => {
  return data.edges.map((item: any) => {
    return { text: item.node.name, value: item.node };
  });
};

export const marketplacesDataMapper = (
  data: OrdersAllMarketplacesQueryResponse,
): Option[] => {
  if (data.allMarketplaces) {
    return data.allMarketplaces.edges.map((item: any) => {
      return { text: item.node.name, value: item.node };
    });
  }
  return [];
};

export const orderSaveMapper = (values: any) => {
  let totalPrice = 0;
  const productList = values.products.map((product: any) => {
    totalPrice =
      totalPrice + parseFloat(product.price) * parseFloat(product.count);
    return {
      productId: product.productId,
      price: product.price,
      orderCount: product.count,
      notes: product.notes,
    };
  });
  const userOrderInput = {
    marketplaceId: JSON.parse(values.marketplaceId).id,
    commissionRate: values.commissionRate,
    orderDeliveryTime: values.orderDeliveryTime,
    orderDate: values.orderDate.toDate(),
    totalPrice: totalPrice,
    notes: values.notes,
    customerInfo: {
      isCorporate: values.isCorporate,
      name: values.name,
      surname: values.surname,
      tc: values.tc,
      phoneNumber: values.phoneNumber,
      deliveryAddress: values.deliveryAddress,
      invoiceAddress: values.isSameAddress
        ? values.deliveryAddress
        : values.invoiceAddress,
    },
    marketplaceOrderId: values.marketplaceOrderId?.trim() || undefined,
    orderType: values.orderType,
    isKdvInclude: values.isKdvInclude,
  };
  return {
    productList: productList,
    userOrderInput: userOrderInput,
    invoiceNo: values.invoiceNo,
    invoiceDate: values.invoiceDate,
  };
};

export const orderEditMapper = (
  values: any,
  productOrderIds: string[],
  orderId: string,
): any => {
  let totalPrice = 0;
  const productList = values.products.map((product: any) => {
    totalPrice =
      totalPrice + parseFloat(product.price) * parseFloat(product.count);
    return {
      productId: product.productId,
      price: product.price,
      orderCount: product.count,
    };
  });
  const userOrderInput = {
    marketplaceId: JSON.parse(values.marketplaceId).id,
    commissionRate: values.commissionRate,
    orderDeliveryTime: values.orderDeliveryTime,
    orderDate: values.orderDate.toDate(),
    totalPrice: totalPrice,
    notes: values.notes,
    customerInfo: {
      isCorporate: values.isCorporate,
      name: values.name,
      surname: values.surname,
      tc: values.tc,
      phoneNumber: values.phoneNumber,
      deliveryAddress: values.deliveryAddress,
      invoiceAddress: values.isSameAddress
        ? values.deliveryAddress
        : values.invoiceAddress,
    },
    marketplaceOrderId: values.marketplaceOrderId?.trim() || undefined,
    productOrderIds: productOrderIds,
    isKdvInclude: values.isKdvInclude,
  };
  return {
    productList: productList,
    userOrderInput: userOrderInput,
    orderId: orderId,
    invoiceNo: values.invoiceNo,
    invoiceDate: values.invoiceDate,
  };
};

const genericTableDataMapper = (data: any, custom?: any): any[] => {
  if (!data) return [];
  let withoutObjName;
  if (custom) {
    withoutObjName = data[custom];
  } else {
    withoutObjName = data[Object.keys(data)[0]];
  }
  const arr = withoutObjName.edges;
  return arr.map((elem: any) => elem.node);
};

const userMapper = (data: User[]) => {
  return data.map((user) => {
    return {
      fullName: `${user.firstName} ${user.lastName}`,
      roles: user.roles.includes(Roles.admin)
        ? RoleTexts[Roles.admin]
        : user.roles.map((role) => RoleTexts[role]).join(','),
      email: user.email,
      id: user.id,
      password: user.password,
    };
  });
};

const orderProductMapper = (data: any) => {
  const products = genericTableDataMapper(data, 'products').filter(
    (item) =>
      item.productOrderStatus !== 'CC' && item.productOrderStatus !== 'RR',
  );
  const grouped = products.reduce((acc: any, key: any) => {
    if (acc[key.product.sku]) {
      acc[key.product.sku].push(key);
    } else {
      acc[key.product.sku] = [key];
    }
    return acc;
  }, []);

  const productArr = Object.keys(grouped).map((key) => {
    {
      return {
        count: grouped[key].length,
        name: grouped[key][0].product.name,
        productName: grouped[key][0].product.name,
        metaInfo: grouped[key][0].product.metaInfo
          ? JSON.parse(grouped[key][0].product.metaInfo)
          : undefined,
        sku: grouped[key][0].product.sku,
        price: grouped[key][0].price,
        kdv: grouped[key][0].product.kdv,
      };
    }
  });
  return productArr;
};

const getRemainingDate = (estimatedDeliveryDate: moment.Moment) => {
  return moment().diff(moment(estimatedDeliveryDate), 'days') * -1 + 1;
};

const orderListMapper = (data: UserOrderDTO[]): UserOrder[] => {
  return data.map((order) => {
    const { name, surname } = JSON.parse(order.customerInfo);
    return {
      customer: `${name} ${surname || ''}`,
      id: order.id,
      orderId: order.marketplaceOrderId,
      notes: order.notes,
      marketplace: order.marketplace.name,
      status: order.orderStatus,
      price: order.totalPrice,
      products: orderProductMapper(order),
      remainingTime: getRemainingDate(order.estimatedDeliveryDate),
      orderType: order.orderType,
    };
  });
};

const metadataMapper = (data: MetadataDTO[]): Metadata[] => {
  return data.map((item) => {
    return {
      id: item.id,
      material: item.materialName,
      number: item.materialId,
      metaType: item.metaType,
      paintType: item.paintType,
    };
  });
};

const allProductsMapper = (data: any) => {
  return data.map((item: any) => {
    const metaProducts = item.metaProducts.edges.reduce(
      (acc: any, key: any) => {
        const selectedProduct = productMetaData.find(
          (item: any) => item.description === key.node.type,
        );

        if (selectedProduct) {
          acc[selectedProduct?.name] = key.node.materialName;
        }
        return acc;
      },
      [],
    );
    return {
      id: item.id,
      name: item.name,
      sku: item.sku,
      data: item,
      ...metaProducts,
    };
  });
};

const cancelModalProductMapper = (userOrder: any) => {
  const products = genericTableDataMapper(userOrder, 'products');
  if (products.length <= 1) {
    return [];
  }
  const generateName = (metadata: any, productName: any) => {
    return `${productName}: ${metadata.AY}(Ayak) ${metadata.TB}(Tabla)`;
  };
  const removedProducts = products.filter(
    (prd) => prd.productOrderStatus !== 'CC' && prd.productOrderStatus !== 'RR',
  );
  return removedProducts.map((item) => {
    const metaProducts = genericTableDataMapper(item.product, 'metaProducts');
    const metaInfo = {
      AY: undefined,
      TB: undefined,
    };
    metaProducts.forEach((mt) => {
      if (mt.categoryName === 'TB' || mt.categoryName === 'AY') {
        metaInfo[mt.categoryName] = mt.materialName;
      }
    });
    return {
      value: item.id,
      text: generateName(metaInfo, item.product.name),
    };
  });
};

export const userOrderMapper = (userOrder: any) => {
  const customer: CustomerDTO = JSON.parse(userOrder?.customerInfo as string);
  return {
    commissionRate: userOrder?.commissionRate,
    notes: userOrder?.notes,
    tc: customer.tc,
    name: customer.name,
    surname: customer.surname,
    phoneNumber: customer.phone_number,
    invoiceAddress: customer.invoice_address,
    deliveryAddress: customer.delivery_address,
    orderDeliveryTime: userOrder.orderDeliveryTime,
    marketplaceOrderId: userOrder.marketplaceOrderId,
    marketplaceId: JSON.stringify(userOrder.marketplace),
    products: productCardMapper(userOrder),
    cancelModalProducts: cancelModalProductMapper(userOrder),
    isSameAddress: customer.delivery_address === customer.invoice_address,
    isCorporate: customer.is_corporate,
    invoiceDate: userOrder.invoiceDate,
    invoiceNo: userOrder.invoiceNo,
    isKdvInclude: userOrder.isKdvInclude,
  };
};

const productCardMapper = (data: any) => {
  const products = genericTableDataMapper(data, 'products').filter(
    (item) =>
      item.productOrderStatus !== 'CC' && item.productOrderStatus !== 'RR',
  );
  const grouped = products.reduce((acc: any, key: any) => {
    if (acc[key.product.sku]) {
      acc[key.product.sku].push(key);
    } else {
      acc[key.product.sku] = [key];
    }
    return acc;
  }, []);

  const mapped = Object.keys(grouped).map((key) => {
    return {
      sku: grouped[key][0].product.sku,
      count: grouped[key].length,
      price: grouped[key][0].price,
      productData: grouped[key][0].product,
      notes: grouped[key][0].notes,
    };
  });
  return mapped;
};
const allProductsAdminMapper = (data: any) => {
  return data.map((item: any) => {
    const metaData = findMetadataWithType(
      genericTableDataMapper(item, 'metaProducts'),
    );
    return {
      id: item.id,
      name: item.name,
      sku: item.sku,
      ...metaData,
    };
  });
};

const externalServiceSelectMapper = (data: WorkshopExternalServiceDTO[]) => {
  return data.map((item) => {
    return {
      text: item.name,
      value: item.id,
    };
  });
};

const findMetadata = (
  product: ProductManagmentMetaProductDTO[],
): ProductManagmentMetaProduct => {
  const metaData: ProductManagmentMetaProduct = {};
  product.forEach((pr) => {
    switch (pr.categoryName) {
      case MetadataType.CT:
        metaData['category'] = pr.materialName;
        return;
      case MetadataType.CA:
        metaData['subCategory'] = pr.materialName;
        return;
      case MetadataType.TB:
        metaData['tableMaterial'] = pr.materialName;
        return;
      case MetadataType.AY:
        metaData['legMaterial'] = pr.materialName;
        return;
      default:
        return;
    }
  });
  return metaData;
};

const findMetadataWithType = (product: any[]): ProductManagmentMetaProduct => {
  const metaData: ProductManagmentMetaProduct = {};
  product.forEach((pr) => {
    switch (pr.type) {
      case 'Kategori':
        metaData['category'] = pr.materialName;
        return;
      case 'Alt Kategori':
        metaData['subCategory'] = pr.materialName;
        return;
      case 'Tabla':
        metaData['tableMaterial'] = pr.materialName;
        return;
      case 'Ayak':
        metaData['legMaterial'] = pr.materialName;
        return;
      default:
        return;
    }
  });
  return metaData;
};

const managementProductionMapper = (
  data: ProductionManagementDataDTO[],
): ProductionManagment[] => {
  return data.map(
    (item): ProductionManagment => {
      const { product } = item;
      const newProduct = genericTableDataMapper(product, 'metaProducts');
      const {
        category,
        subCategory,
        legMaterial,
        tableMaterial,
      } = findMetadata(newProduct);

      const order = genericTableDataMapper(item, 'userOrder');

      const images = genericTableDataMapper(product, 'productImages');
      const imageList = images
        ? images.map((img) => getImageGroupByWidth(img, 320))
        : [];

      return {
        id: item.id,
        orderId: order[0].marketplaceOrderId,
        marketplace: order[0].marketplace.name,
        productName: product.name,
        customerInfo: JSON.parse(order[0].customerInfo),
        category,
        count: item.orderCount,
        notes: item.notes,
        orderType: order[0].orderType,
        subCategory,
        legMaterial,
        tableMaterial,
        remainingTime: getRemainingDate(order[0].estimatedDeliveryDate),
        productImages: imageList,
      };
    },
  );
};

const productionSummaryMapper = (
  data: ProductionSummaryDTO[],
): ProductionSummary[] => {
  return data.map((item) => {
    const order = genericTableDataMapper(item, 'userOrder');
    return {
      orderId: order[0].marketplaceOrderId,
      id: item.id,
      ayakStatus: item.ayakStatus,
      tablaStatus: item.tablaStatus,
      fabricStatus: item.fabricStatus,
      marbleStatus: item.marbleStatus,
      glassStatus: item.glassStatus,
      orderCount: item.orderCount,
      productName: item.product.name,
    };
  });
};

const productionMainPartsMapper = (
  data: ProductionWorkshopDataDTO[],
  type: WorkshopTypes.WOOD | WorkshopTypes.METAL,
) => {
  const finalRes = data.map((item) => {
    const metaProducts = genericTableDataMapper(item.product, 'metaProducts');
    const order = genericTableDataMapper(item, 'userOrder');
    const itemTypes: any[] = [];

    const images = genericTableDataMapper(item.product, 'productImages');
    const imageList = images
      ? images.map((img) => getImageGroupByWidth(img, 320))
      : [];

    metaProducts.forEach((mp) => {
      if (mp.metaType === MainPartsShortNames[type]) {
        itemTypes.push({
          type: mp.categoryName,
          materialName: mp.materialName,
        });
      }
    });
    const res: any[] = [];
    itemTypes.forEach((it, index) => {
      let status = undefined;
      if (it.type === 'TB') {
        status = item.tablaStatus;
      } else if (it.type === 'AY') {
        status = item.ayakStatus;
      }
      res.push({
        id: item.id,
        rowKey: `${item.id}-${index}`,
        sku: item.product.sku,
        orderId: `${order[0].marketplace.name} - ${order[0].marketplaceOrderId}`,
        remainingTime: getRemainingDate(order[0].estimatedDeliveryDate),
        productName: item.product.name,
        productImages: imageList,
        status: status,
        type: it.type === 'TB' ? 'Tabla' : 'Ayak',
        dimensions: {
          width: item.product.width,
          height: item.product.height,
          length: item.product.length,
        },
        materialName: it.materialName,
        orderType: order[0].orderType,
        notes: item.notes,
      });
    });
    return res;
  });
  const finalValue: ProductionMainWorkshopData[] = [];
  finalRes.forEach((arr) => {
    arr?.forEach((arr2) => {
      if (arr2.status !== 'DEFAULT' && arr2.status !== 'COMPLETED')
        finalValue.push(arr2);
    });
  });
  return finalValue;
};

const productionMaterialMapper = (
  data: ProductionWorkshopDataDTO[],
  type: WorkshopTypes,
  moduleType?: ModuleType,
): ProductionMaterialWorkshopData[] => {
  return data.map((item, index) => {
    const order = genericTableDataMapper(item, 'userOrder');
    let services: WorkshopExternalService[] = genericTableDataMapper(
      item,
      'externalService',
    );
    if (moduleType) {
      services = services.filter((service) => service.module === moduleType);
    }
    const metaProducts = genericTableDataMapper(item.product, 'metaProducts');
    let categoryName = undefined;
    metaProducts.forEach((mt) => {
      if (mt.metaType === MaterialTypeShortName[type]) {
        categoryName = mt.categoryName;
      }
    });

    const tablaNode = metaProducts.find((mt) => mt.categoryName === 'TB');

    let finalCategoryName;
    if (categoryName) {
      finalCategoryName = categoryName === 'TB' ? 'tabla' : 'ayak';
    }

    const images = genericTableDataMapper(item.product, 'productImages');
    const imageList = images
      ? images.map((img) => getImageGroupByWidth(img, 320))
      : [];

    return {
      id: item.id,
      sku: item.product.sku,
      orderId: `${order[0].marketplace.name} - ${order[0].marketplaceOrderId}`,
      remainingTime: getRemainingDate(order[0].estimatedDeliveryDate),
      orderCount: item.orderCount,
      productName: item.product.name,
      productImages: imageList,
      type: type,
      dimensions: {
        width: item.product.width,
        height: item.product.height,
        length: item.product.length,
      },
      categoryName: finalCategoryName,
      status: item[WorkshopStatusNames[type]],
      externalServices: services || [],
      orderType: order[0].orderType,
      notes: item.notes,
      tablaName: tablaNode.materialName,
      rowKey: `${item.id}-${index}`,
    };
  });
};

const productionPaintMapper = (
  data: ProductionWorkshopDataDTO[],
  type: WorkshopTypes.WOOD_PAINT | WorkshopTypes.METAL_PAINT,
  moduleType?: ModuleType,
) => {
  const finalRes = data.map((item) => {
    const metaProducts = genericTableDataMapper(item.product, 'metaProducts');
    const order = genericTableDataMapper(item, 'userOrder');

    const images = genericTableDataMapper(item.product, 'productImages');
    const imageList = images
      ? images.map((img) => getImageGroupByWidth(img, 320))
      : [];

    let services: WorkshopExternalService[] = genericTableDataMapper(
      item,
      'externalService',
    );
    if (moduleType) {
      services = services.filter((service) => service.module === moduleType);
    }
    const itemTypes: any[] = [];
    metaProducts.forEach((mp) => {
      if (mp.paintType === MainPartsShortNames[type]) {
        itemTypes.push({
          type: mp.categoryName,
          materialName: mp.materialName,
        });
      }
    });
    const res: any[] = [];
    itemTypes.forEach((it, index) => {
      let status = undefined;
      if (it.type === 'TB') {
        status = item.tablaPaintStatus;
      } else if (it.type === 'AY') {
        status = item.ayakPaintStatus;
      }
      res.push({
        id: item.id,
        rowKey: `${item.id}-${index}`,
        sku: item.product.sku,
        orderId: `${order[0].marketplace.name} - ${order[0].marketplaceOrderId}`,
        remainingTime: getRemainingDate(order[0].estimatedDeliveryDate),
        productName: item.product.name,
        productImages: imageList,
        status: status,
        externalServices: services || [],
        type: it.type === 'TB' ? 'Tabla' : 'Ayak',
        dimensions: {
          width: item.product.width,
          height: item.product.height,
          length: item.product.length,
        },
        materialName: it.materialName,
        orderType: order[0].orderType,
        notes: item.notes,
      });
    });
    return res;
  });
  const finalValue: ProductionMainWorkshopData[] = [];
  finalRes.forEach((arr) => {
    arr?.forEach((arr2) => {
      if (arr2.status !== 'DEFAULT' && arr2.status !== 'COMPLETED')
        finalValue.push(arr2);
    });
  });
  return finalValue;
};

const productionWorkshopMapper = (
  rawData: ProductionRelayWorkshopQueryResponse,
  type: WorkshopTypes,
  moduleType?: ModuleType,
) => {
  const data = genericTableDataMapper(rawData);
  if (type === WorkshopTypes.METAL || type === WorkshopTypes.WOOD) {
    return productionMainPartsMapper(data, type);
  } else if (
    type === WorkshopTypes.METAL_PAINT ||
    type === WorkshopTypes.WOOD_PAINT
  ) {
    return productionPaintMapper(data, type, moduleType);
  } else {
    return productionMaterialMapper(data, type, moduleType);
  }
};

const packagingListMapper = (data: PackagingListDTO[]): PackagingList[] => {
  return data.map((item) => {
    const order = genericTableDataMapper(item, 'userOrder');
    const newProduct = genericTableDataMapper(item.product, 'metaProducts');
    const { legMaterial, tableMaterial } = findMetadata(newProduct);
    return {
      orderId: `${order[0].marketplace.name} - ${order[0].marketplaceOrderId}`,
      productName: item.product.name,
      remainingDate: getRemainingDate(order[0].estimatedDeliveryDate),
      isCollectable: item.product.isCollectable,
      status: item.packagingStatus,
      packageCount: item.product.packageCount,
      legMaterial,
      tableMaterial,
      isMonte: item.product.isMonte,
      id: item.id,
    };
  });
};
const getTableProducts = (products: ShipmentTableProduct[]) => {
  return products.map((product) => {
    return {
      name: product.product.name,
      status: ProductOrderStatusType[product.productOrderStatus],
    };
  });
};

export const getDesi = (
  width: number,
  height: number,
  length: number,
): string => {
  const hacim = width * height * length;
  const desi = hacim / 3000000;
  return desi.toFixed(2);
};

export const getProductDesi = (products: ShipmentTableProduct[]): string => {
  let desi = 0;
  products.map((product) => {
    const { width, height, length } = product.product;
    const hacim = width * height * length;
    desi = desi + hacim / 3000000;
  });
  return desi.toFixed(2);
};

const shipmentManagementMapper = (data: ShipmentTableDTO[]) => {
  return data.map((item) => {
    const { name, surname } = JSON.parse(item.customerInfo);
    const products = genericTableDataMapper(item, 'products');

    return {
      id: item.id,
      orderId: item.marketplaceOrderId,
      remainingTime: getRemainingDate(item.estimatedDeliveryDate),
      customer: `${name} ${surname || ''}`,
      marketplace: item.marketplace.name,
      desi: getProductDesi(products),
      completed: item.orderStatus,
      tableProduct: getTableProducts(products),
    };
  });
};

const shipmentOrderMapper = (data: ShipmentTableDTO[]) => {
  const shipmentTypeMapper: Record<ShipmentTypeValue, ShipmentType> = {
    S: 'Nakliyat',
    C: 'Kargo',
  };
  return data.map((item) => {
    const { name, surname } = JSON.parse(item.customerInfo);

    return {
      id: item.id,
      orderId: item.marketplaceOrderId,
      remainingTime: getRemainingDate(item.estimatedDeliveryDate),
      customer: `${name} ${surname || ''}`,
      marketplace: item.marketplace.name,
      completed: item.orderStatus,
      cargoChaseNumber:
        item.cargoChaseNumber === 0 ? '' : item.cargoChaseNumber?.toString(),
      shipmentType: shipmentTypeMapper[item.shipmentType],
      shipmentCompanyName: item.shipmentCompanyName,
    };
  });
};

const invoiceMapper = (data: UserOrderDTO[]): Invoice[] => {
  return data.map((order) => {
    const customerInfo = JSON.parse(order.customerInfo);
    return {
      customer: `${customerInfo.name} ${customerInfo.surname || ''}`,
      id: order.id,
      customerDetail: customerInfo,
      orderId: order.marketplaceOrderId,
      notes: order.notes,
      marketplace: order.marketplace.name,
      products: orderProductMapper(order) || [],
      shipmentCompany: order.shipmentCompanyName || 'Seçilmedi',
      shipmentType: order.shipmentType || ' - ',
      shipmentOrderDate: order.shipmentOrderDate
        ? moment(order.shipmentOrderDate).format('DD-MM-YYYY')
        : 'Sevk Emri Girilmedi',
    };
  });
};

const shipmentInvoiceSummaryMapper = (
  data: UserOrderDTO[],
): ShipmentInvoiceSummaryData[] => {
  // TODO: Burayı kaldır şimdilik summary düzelsin diye yaptığımız birşey bu
  const filteredData = data.filter((item) => item.invoiceStatus !== 'Default');

  return filteredData.map((order) => {
    const { name, surname } = JSON.parse(order.customerInfo);
    return {
      customer: `${name} ${surname || ''}`,
      id: order.id,
      orderId: order.marketplaceOrderId,
      notes: order.notes,
      remainingTime: getRemainingDate(order.estimatedDeliveryDate),
      shipmentStatus: order.shipmentStatus as ShipmentStatus,
      invoiceStatus: order.invoiceStatus as InvoiceStatus,
      products: orderProductMapper(order) || [],
    };
  });
};

const templateMapper = (data: any): TemplateData => {
  let ayak = '';
  let tabla = '';
  const metaData = genericTableDataMapper(data.product, 'metaProducts');
  const images = genericTableDataMapper(data.product, 'productImages');
  const imageList = images
    ? images.map((img) => getImageGroupByWidth(img, 320))
    : [];

  metaData.forEach((mt) => {
    if (mt.categoryName == 'TB') {
      tabla = mt.materialName;
    } else if (mt.categoryName == 'AY') {
      ayak = mt.materialName;
    }
  });
  return {
    sku: data.product.sku,
    name: data.product.name,
    notes: data.notes === '' ? undefined : data.notes,
    measure: `${data.product.width} x ${data.product.height} x ${data.product.length} mm`,
    ayak,
    tabla,
    imageList,
  };
};

const reduceSystemParams = (fields: any, values: any) =>
  fields.reduce((acc: any, field: any) => {
    acc[field.name] = values[field.name];
    return acc;
  }, {});

const systemParamsSaveMapper = (values: any) => {
  const metalParams = reduceSystemParams(metalFields, values);
  const woodParams = reduceSystemParams(woodFields, values);
  const otherWorkshopParams = reduceSystemParams(otherWorkshopFields, values);
  const laborParams = reduceSystemParams(laborFields, values);
  const otherParams = reduceSystemParams(otherFields, values);

  const willSaveData: any = {
    systemParamInput: {
      metalParams: metalParams,
      woodParams: woodParams,
      otherWorkshopParams: otherWorkshopParams,
      laborParams: laborParams,
      otherParams: otherParams,
    },
  };
  return willSaveData;
};
const mapLogProducts = (data: any): LogOrderProduct[] => {
  return data.map((item: any) => {
    const externalService = genericTableDataMapper(item, 'externalService');
    return {
      sku: item.product.sku,
      name: item.product.name,
      metaInfo: JSON.parse(item.product.metaInfo),
      externalService: externalService,
    };
  });
};

const logListMapper = (data: any): OrderLogDetail[] => {
  const getInvoiceInfo = (isAval: boolean, date: any, number: string) => {
    if (!isAval) {
      return 'Fatura Kesilmeyecek';
    }

    if (number && date) {
      return `${moment(date).format('DD-MM-YYYY')} - ${number}`;
    }

    return 'Kesilmedi';
  };

  return data.map(
    (order: any): OrderLogDetail => {
      const customerInfo = JSON.parse(order.customerInfo);
      return {
        id: order.id,
        orderId: order.marketplaceOrderId,
        marketplace: order.marketplace.name,
        customer: `${customerInfo.name} ${customerInfo.surname || ''}`,
        status: order.orderStatus,
        orderType: LogOrderTypeTexts[order.orderType],
        orderDate: moment(order.orderDate).format('DD-MM-YYYY'),
        commissionRate: order.commissionRate,
        notes: order.notes,
        totalPrice: order.totalPrice,
        invoiceInfo: getInvoiceInfo(
          order.isKdvInclude,
          order.orderDate,
          order.invoiceNo,
        ),
        cargoChaseNumber: order.cargoChaseNumber,
        shipmentOrderDate: order.shipmentOrderDate
          ? moment(order.orderDate).format('DD-MM-YYYY')
          : '',
        customerInfo: customerInfo,
        completedDate: order.completedDate,
        products: mapLogProducts(genericTableDataMapper(order, 'products')),
      };
    },
  );
};

const orderHistoryMapper = (data: HistoryDTO[]): OrderHistory[] => {
  return data.map((item) => {
    return {
      id: item.id,
      date: moment(item.updatedDate).format('DD-MM-YYYY HH:mm:ss'),
      user: `${item.user.firstName} ${item.user.lastName}`,
      change: {
        oldStatus: item.oldStatus,
        newStatus: item.newStatus,
      },
    };
  });
};

const productHistoryMapper = (data: ProductHistoryDTO[]): ProductHistory[] => {
  return data.map((item) => {
    return {
      id: item.id,
      date: moment(item.updatedDate).format('DD-MM-YYYY HH:mm:ss'),
      user: `${item.user.firstName} ${item.user.lastName}`,
      change: {
        oldStatus: item.oldStatus,
        newStatus: item.newStatus,
      },
      type: item.type,
      module: item.module,
      product: item.productOrder.product.name,
    };
  });
};

const systemParamMapper = (systemParams: any) => {
  let returnData = {};
  Object.keys(systemParams).map((key, index) => {
    if (key !== 'id') {
      returnData = { ...returnData, ...systemParams[key] };
    }
  });
  return returnData;
};

const getPartlyProductText = (order: any) => {
  const products = genericTableDataMapper(order, 'products');
  if (products.length === 1) {
    return 'Tüm Sipariş';
  }
  let text = '';
  products.forEach((product) => {
    if (product.productOrderStatus === 'CC') {
      text += `${product.product.name} - İptal\n`;
    }
    if (product.productOrderStatus === 'RR') {
      text += `${product.product.name} - İade\n`;
    }
  });
  return text === '' ? 'Tüm Sipariş' : text;
};

const getCancelReturnNote = (cancelNote: string, returnNote: string) => {
  if (cancelNote !== '' && returnNote !== '') {
    return `İptal: ${cancelNote}, İade: ${returnNote}`;
  }
  if (cancelNote !== '') {
    return cancelNote;
  }
  if (returnNote !== '') {
    return returnNote;
  }
  return '';
};

const cancelReturnMapper = (data: any): ReturnCancelData[] => {
  return data.map(
    (order: any): ReturnCancelData => {
      const customerInfo = JSON.parse(order.customerInfo);
      return {
        id: order.id,
        orderId: order.marketplaceOrderId,
        marketplace: order.marketplace.name,
        customer: `${customerInfo.name} ${customerInfo.surname || ''}`,
        status: order.orderStatus,
        isPartlyCanceled: order.isPartlyCanceled,
        isPartlyReturned: order.isPartlyReturned,
        productText: getPartlyProductText(order),
        note: getCancelReturnNote(order.cancelNote, order.returnNote),
      };
    },
  );
};

const oemMapper = (data: any[]): Oem[] => {
  return data.map((item) => {
    const order = genericTableDataMapper(item, 'userOrder');
    return {
      id: item.id,
      sku: item.product.sku,
      productName: item.product.name,
      orderId: order[0].marketplaceOrderId,
      marketplace: order[0].marketplace.name,
      purchasePrice: item.purchasePrice,
      remainingTime: getRemainingDate(order[0].estimatedDeliveryDate),
    };
  });
};
const metaDataOptionMapper = (data: any) => {
  return data.edges
    .map((metaData: any) => {
      return {
        text: metaData.node.materialName,
        value: metaData.node.id,
      };
    })
    .sort((a: any, b: any) => {
      return a.text.localeCompare(b.text);
    });
};

const metaAttributesMapper = (product: any) => {
  const metaData: ProductManagmentMetaProduct = {};
  product.forEach((pr: any) => {
    switch (pr.type) {
      case 'Kategori':
        metaData['category'] = pr.id;
        return;
      case 'Alt Kategori':
        metaData['subCategory'] = pr.id;
        return;
      case 'Tabla':
        metaData['tabla'] = pr.id;
        return;
      case 'Ayak':
        metaData['ayak'] = pr.id;
        return;
      default:
        return;
    }
  });
  return metaData;
};

const productAttributesMapper = (data: any) => {
  const metaData = genericTableDataMapper(data, 'metaProducts');
  const productImages = genericTableDataMapper(data, 'productImages');

  return {
    ...data,
    ...data.labor,
    ...data.metalAttributes,
    ...data.other,
    ...data.otherAttributes,
    ...data.woodAttributes,
    ...metaAttributesMapper(metaData),
    isMonte: data.isMonte ? 'monte' : 'demonte',
    isCollectable: data.isCollectable ? 'toplanacak' : 'toplanmayacak',
    desi: getDesi(data.width, data.height, data.length),
    defaultFileList: productImages,
  };
};

const productSaveMapper = (data: any): any => {
  const metal = metalPropsFileds.reduce((acc: any, field: any) => {
    acc[field.name] = data[field.name];
    return acc;
  }, {});

  const wood = woodPropsFileds.reduce((acc: any, field: any) => {
    acc[field.name] = data[field.name];
    return acc;
  }, {});

  const otherAtt = otherWsPropsFileds.reduce((acc: any, field: any) => {
    acc[field.name] = data[field.name];
    return acc;
  }, {});

  const other = otherPropsFileds.reduce((acc: any, field: any) => {
    acc[field.name] = data[field.name];
    return acc;
  }, {});

  const labor = laborPropsFileds.reduce((acc: any, field: any) => {
    acc[field.name] = data[field.name];
    return acc;
  }, {});

  return {
    name: data.name,
    productName: data.name,
    metaProductIds: [data.category, data.subCategory, data.ayak, data.tabla],
    kdv: data.kdv,
    isCollectable: data.isCollectable,
    packageCount: data.packageCount,
    metalAttributes: { ...metal },
    woodAttributes: { ...wood },
    otherAttributes: { ...otherAtt },
    other: { ...other },
    labor: { ...labor },
    aluminiumPrice: data.aliminyumDokum || 0,
    sivamaPrice: data.sivama || 0,
    silikonHirdavatPrice: data.silikonHirdavat || 0,
    aksesuarPrice: data.aksesuar || 0,
    packingPrice: data.ambalajMalzeme || 0,
    width: data.width,
    height: data.height,
    length: data.length,
  };
};

const monthlySalesMapper = (data: any): any => {
  const averageSales = data.map((item: any, index: any) =>
    (item / daysInMonth[index]).toFixed(2),
  );
  return {
    labels: [...months],
    options: {
      scales: {
        yAxes: [
          {
            id: 'A',
            type: 'linear',
            position: 'left',
          },
          {
            id: 'B',
            type: 'linear',
            position: 'right',
          },
        ],
      },
    },
    datasets: [
      {
        label: 'Toplam Satış(TL)',
        data: [...data],
        borderWidth: 1,
        backgroundColor: '#587889',
        yAxisID: 'A',
      },
      {
        label: 'Ortalama Satış(TL)',
        data: [...averageSales],
        borderWidth: 1,
        backgroundColor: '#c37878',
        yAxisID: 'B',
      },
    ],
  };
};

const productBasedSalesMapper = (data: any) => {
  const userOrderList = genericTableDataMapper(data);
  const mappedData: any[] = [];

  userOrderList.forEach((order: any): any => {
    const grouped = order.products.edges.reduce((acc: any, key: any) => {
      if (acc[key.node.product.sku]) {
        acc[key.node.product.sku].push(key.node);
      } else {
        acc[key.node.product.sku] = [key.node];
      }
      return acc;
    }, []);

    const data = Object.keys(grouped).map((key) => {
      let totalPrice = 0;
      grouped[key].forEach((product: any) => {
        totalPrice = totalPrice + parseFloat(product.price);
      });

      return {
        id: order.id,
        marketplace: order.marketplace.name,
        orderDate: moment(order.orderDate).format('DD-MM-YYYY'),
        shipmentCompanyName: order.shipmentCompanyName,
        shipmentOrderDate: moment(order.shipmentOrderDate).format('DD-MM-YYYY'),
        name: order.products.edges[0].node.product.name,
        count: grouped[key].length,
        price: totalPrice.toFixed(2),
      };
    });
    mappedData.push(...data);
  });

  return mappedData;
};

const marketplaceTotalsMapper = (data: any) => {
  if (!!data) {
    const parsedData = JSON.parse(data);
    const labels = Object.keys(parsedData.marketplace_totals);
    const values = Object.values(parsedData.marketplace_totals);
    return {
      data: {
        labels: [...labels],
        datasets: [
          {
            label: 'Satış(TL)',
            data: [...values],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
        ],
      },
      return_sum: parsedData.return_sum,
      cancel_sum: parsedData.cancel_sum,
    };
  }
  return null;
};

const vastedMapper = (data: any) => {
  const testObj: any = {};
  const parsedData = JSON.parse(data as string);
  Object.keys(parsedData).map((item) => {
    const data = parsedData[item];
    const temp = Object.keys(data).map((item) => {
      return { title: item, data: data[item].toString() };
    });
    testObj[item] = temp;
  });
  console.log(testObj);
  return testObj;
};
export default {
  productionPaintMapper,
  genericTableDataMapper,
  userMapper,
  orderListMapper,
  invoiceMapper,
  shipmentInvoiceSummaryMapper,
  metadataMapper,
  allProductsMapper,
  managementProductionMapper,
  allProductsAdminMapper,
  productionSummaryMapper,
  productionWorkshopMapper,
  externalServiceSelectMapper,
  packagingListMapper,
  shipmentManagementMapper,
  shipmentOrderMapper,
  templateMapper,
  systemParamsSaveMapper,
  logListMapper,
  orderHistoryMapper,
  productHistoryMapper,
  systemParamMapper,
  cancelModalProductMapper,
  cancelReturnMapper,
  oemMapper,
  metaDataOptionMapper,
  productAttributesMapper,
  productSaveMapper,
  monthlySalesMapper,
  productBasedSalesMapper,
  marketplaceTotalsMapper,
  vastedMapper,
};
