import { Roles, RoleTexts } from './layout/roles';
import { MetadataDTO, Metadata, MetadataType } from './modules/metadata/types';
import {
  UserOrderDTO,
  UserOrder,
  UserOrderProductDTO,
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
  const productArr = data.edges.map((product) => product.node);
  return productArr.map((item) => {
    return {
      count: item.orderCount,
      name: item.product.name,
      productName: item.product.name,
      metaInfo: item.product.metaInfo
        ? JSON.parse(item.product.metaInfo)
        : undefined,
    };
  });
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
  console.log('--------------------------', data);
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
    console.log(metaProducts);
    return {
      id: item.id,
      name: item.name,
      sku: item.sku,
      data: item,
      ...metaProducts,
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

      const order = genericTableDataMapper(item, 'userorderSet');
      console.log('ITEM !! ', item);
      return {
        id: product.id,
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

export default {
  genericTableDataMapper,
  userMapper,
  orderListMapper,
  metadataMapper,
  allProductsMapper,
  managementProductionMapper,
};
