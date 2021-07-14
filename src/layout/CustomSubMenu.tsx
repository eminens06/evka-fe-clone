import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import { getUserRoles } from '../modules/auth/utils/session.utils';

interface Props {
  role: string;
  title: string;
  icon?: React.ReactNode;
  children: ReactNode;
}

const CustomSubMenu: FunctionComponent<Props> = (props) => {
  const { role, title, icon, children, ...otherProps } = props;
  const [userRoles, setUserRoles] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await getUserRoles();
      setUserRoles(data);
    };

    fetchRoles();
  }, []);

  const isHide = useMemo(() => {
    if (userRoles.includes('admin')) return false;
    const test = userRoles.findIndex((userRole) => {
      return userRole.startsWith(role);
    }, role);
    return test === -1;
  }, [role, userRoles]);

  if (!isHide) {
    return (
      <SubMenu key={role} icon={icon} title={title} {...otherProps}>
        {children}
      </SubMenu>
    );
  }
  return null;
};

export default CustomSubMenu;
