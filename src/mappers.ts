import { Roles, RoleTexts } from './layout/roles';
import { User } from './modules/auth/types';

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

export default {
  genericTableDataMapper,
  userMapper,
};
