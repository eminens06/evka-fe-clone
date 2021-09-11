import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

const AddProductMenu: FC = () => {
  const router = useRouter();
  const handleMenuClick = ({ key }) => {
    router.push('/' + key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="admin_product">Normal Ürün</Menu.Item>
      <Menu.Item key="admin_mamu_product">Al-Sat Ürün</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button>
        Ekle <DownOutlined />
      </Button>
    </Dropdown>
  );
};
export default AddProductMenu;
