import { Roles, RoleTexts } from './layout/roles';
import { User } from './modules/auth/types';
import { UserOrderDTO, UserOrder } from './modules/orders/types';

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
      products: '',
      remainingTime: 12,
    };
  });
};

export default {
  genericTableDataMapper,
  userMapper,
  orderListMapper,
};
