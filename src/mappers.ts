import { Roles, RoleTexts } from './layout/roles';
import { User } from './modules/auth/types';
import { Metadata, MetadataDTO } from './modules/metadata/types';
import {
  UserOrderDTO,
  UserOrder,
  UserOrderProductDTO,
} from './modules/orders/types';

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
      customer: `${name} ${surname}`,
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
