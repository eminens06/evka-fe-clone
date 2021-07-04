import { Roles, RoleTexts } from './layout/roles';
import { MetadataDTO, Metadata } from './modules/metadata/types';
import {
  UserOrderDTO,
  UserOrder,
  UserOrderProductDTO,
} from './modules/orders/types';
import { User } from './modules/auth/types';
import { OrdersAllMarketplacesQueryResponse } from './__generated__/OrdersAllMarketplacesQuery.graphql';

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

const genericTableDataMapper = (data: any): any[] => {
  if (!data) return [];
  const withoutObjName = data[Object.keys(data)[0]];
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
    };
  });
};

const orderProductMapper = (data: UserOrderProductDTO) => {
  const productArr = data.edges.map((product) => product.node);
  debugger;
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

export default {
  genericTableDataMapper,
  userMapper,
  orderListMapper,
  metadataMapper,
};
