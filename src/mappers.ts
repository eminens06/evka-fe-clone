import { Roles, RoleTexts } from './layout/roles';
import { MetadataDTO, Metadata, MetadataType } from './modules/metadata/types';
import {
  UserOrderDTO,
  UserOrder,
  UserOrderProductDTO,
  CustomerDTO,
} from './modules/orders/types';
import { User } from './modules/auth/types';
import { OrdersAllMarketplacesQueryResponse } from './__generated__/OrdersAllMarketplacesQuery.graphql';
import { productMetaData } from './utils/enums';
import {
  ProductionManagementDataDTO,
  ProductionManagment,
  ProductManagmentMetaProduct,
  ProductManagmentMetaProductDTO,
} from './modules/managementProduction/types';
import {
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
  WorkshopStatusNames,
} from './modules/production/helpers';
import { ProductionRelayWorkshopQueryResponse } from './__generated__/ProductionRelayWorkshopQuery.graphql';

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
    marketplaceOrderId: values.marketplaceOrderId,
  };
  return { productList: productList, userOrderInput: userOrderInput };
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
    marketplaceOrderId: values.marketplaceOrderId,
    productOrderIds: productOrderIds,
  };
  return {
    productList: productList,
    userOrderInput: userOrderInput,
    orderId: orderId,
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

const orderProductMapper = (data: UserOrderProductDTO) => {
  const grouped = data.edges.reduce((acc: any, key: any) => {
    if (acc[key.node.product.sku]) {
      acc[key.node.product.sku].push(key.node);
    } else {
      acc[key.node.product.sku] = [key.node];
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
      };
    }
  });
  return productArr;
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
      products: orderProductMapper(order.products),
      remainingTime: 12,
    };
  });
};

const metadataMapper = (data: MetadataDTO[]): Metadata[] => {
  return data.map((item) => {
    return {
      id: item.id,
      material: item.materialName,
      number: item.materialId,
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
    products: productCardMapper(userOrder.products),
    isSameAddress: customer.delivery_address === customer.invoice_address,
    isCorporate: customer.is_corporate,
  };
};

const productCardMapper = (data: any) => {
  const grouped = data.edges.reduce((acc: any, key: any) => {
    if (acc[key.node.product.sku]) {
      acc[key.node.product.sku].push(key.node);
    } else {
      acc[key.node.product.sku] = [key.node];
    }
    return acc;
  }, []);

  const mapped = Object.keys(grouped).map((key) => {
    return {
      sku: grouped[key][0].product.sku,
      count: grouped[key].length,
      price: grouped[key][0].price,
      productData: grouped[key][0].product,
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
        console.log('Category : ', pr);
        metaData['category'] = pr.materialName;
        return;
      case MetadataType.CA:
        console.log('Sub Category : ', pr);
        metaData['subCategory'] = pr.materialName;
        return;
      case MetadataType.TB:
        console.log('Tabla : ', pr);
        metaData['tableMaterial'] = pr.materialName;
        return;
      case MetadataType.AY:
        console.log('Ayak : ', pr);
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
        console.log('Category : ', pr);
        metaData['category'] = pr.materialName;
        return;
      case 'Alt Kategori':
        console.log('Sub Category : ', pr);
        metaData['subCategory'] = pr.materialName;
        return;
      case 'Tabla':
        console.log('Tabla : ', pr);
        metaData['tableMaterial'] = pr.materialName;
        return;
      case 'Ayak':
        console.log('Ayak : ', pr);
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
      return {
        id: item.id,
        orderId: order[0].marketplaceOrderId,
        marketplace: order[0].marketplace.name,
        productName: product.name,
        customerInfo: JSON.parse(order[0].customerInfo),
        category,
        count: item.orderCount,
        notes: item.notes,
        subCategory,
        legMaterial,
        tableMaterial,
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
      res.push({
        id: item.id,
        rowKey: `${item.id}-${index}`,
        sku: item.product.sku,
        orderId: `${order[0].marketplace.name} - ${order[0].marketplaceOrderId}`,
        productName: item.product.name,
        status:
          type === WorkshopTypes.WOOD ? item.woodStatus : item.metalStatus,
        type: it.type === 'TB' ? 'Tabla' : 'Ayak',
        dimensions: {
          width: item.product.width,
          height: item.product.height,
          length: item.product.length,
        },
        materialName: it.materialName,
      });
    });
    return res;
  });
  const finalValue: ProductionMainWorkshopData[] = [];
  finalRes.forEach((arr) => {
    arr?.forEach((arr2) => {
      finalValue.push(arr2);
    });
  });
  return finalValue;
};

const productionMaterialMapper = (
  data: ProductionWorkshopDataDTO[],
  type: WorkshopTypes,
): ProductionMaterialWorkshopData[] => {
  return data.map((item) => {
    const order = genericTableDataMapper(item, 'userOrder');
    const services: WorkshopExternalService[] = genericTableDataMapper(
      item,
      'externalService',
    );
    return {
      id: item.id,
      sku: item.product.sku,
      orderId: `${order[0].marketplace.name} - ${order[0].marketplaceOrderId}`,
      orderCount: item.orderCount,
      productName: item.product.name,
      type: type,
      dimensions: {
        width: item.product.width,
        height: item.product.height,
        length: item.product.length,
      },
      status: item[WorkshopStatusNames[type]],
      externalServices: services || [],
    };
  });
};

const productionWorkshopMapper = (
  rawData: ProductionRelayWorkshopQueryResponse,
  type: WorkshopTypes,
) => {
  const data = genericTableDataMapper(rawData);
  if (type === WorkshopTypes.METAL || type == WorkshopTypes.WOOD) {
    return productionMainPartsMapper(data, type);
  } else {
    return productionMaterialMapper(data, type);
  }
};

export default {
  genericTableDataMapper,
  userMapper,
  orderListMapper,
  metadataMapper,
  allProductsMapper,
  managementProductionMapper,
  allProductsAdminMapper,
  productionSummaryMapper,
  productionWorkshopMapper,
  externalServiceSelectMapper,
};
