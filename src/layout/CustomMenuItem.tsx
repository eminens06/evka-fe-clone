import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { getUserRoles } from '../modules/auth/utils/session.utils';

interface Props {
  role: string;
  title: string;
  icon?: React.ReactNode;
}

const CustomMenuItem: FunctionComponent<Props> = (props) => {
  const { role, title, icon, ...otherProps } = props;
  const [userRoles, setUserRoles] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchRoles = async () => {
      const data = await getUserRoles();
      setUserRoles(data);
    };

    fetchRoles();
  }, []);

  const isHide = useMemo(() => {
    if (userRoles.includes('admin')) return false;
    return userRoles.indexOf(role) === -1;
  }, [role, userRoles]);

  if (!isHide) {
    return (
      <Menu.Item
        key={role}
        icon={icon}
        {...otherProps}
        onClick={() => router.push('/' + role)}
      >
        {title}
      </Menu.Item>
    );
  }
  return null;
};

export default CustomMenuItem;
