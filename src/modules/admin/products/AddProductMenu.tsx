import { Dropdown, Button, Menu } from 'antd';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineDown } from 'react-icons/ai';

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
        Ekle <AiOutlineDown />
      </Button>
    </Dropdown>
  );
};
export default AddProductMenu;
