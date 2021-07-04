import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { FC } from 'react';

const AddOrderMenu: FC = () => {
  const handleMenuClick = () => {
    console.log('Add Order Menu');
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Normal Sipariş</Menu.Item>
      <Menu.Item key="2">Özel Sipariş</Menu.Item>
      <Menu.Item key="3">Gel-Al Sipariş</Menu.Item>
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
