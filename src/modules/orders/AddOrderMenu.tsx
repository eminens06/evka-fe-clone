import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

const AddOrderMenu: FC = () => {
  const router = useRouter();
  const handleMenuClick = ({ key }) => {
    router.push('/' + key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="normal_order">Normal Sipariş</Menu.Item>
      <Menu.Item key="custom_order">Özel Sipariş</Menu.Item>
      <Menu.Item key="store_order">Gel-Al Sipariş</Menu.Item>
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
export default AddOrderMenu;
