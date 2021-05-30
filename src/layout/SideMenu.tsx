import React, { FunctionComponent } from 'react';
import { Layout, Menu } from 'antd';
import {
  TableOutlined,
  UploadOutlined,
  InboxOutlined,
  DashboardOutlined,
  AuditOutlined,
  SisternodeOutlined,
  InteractionOutlined,
  MinusCircleOutlined,
  CodeOutlined,
  SettingOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

interface Props {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const SideMenu: FunctionComponent<Props> = (props) => {
  const { collapsed, toggleCollapsed } = props;

  return (
    <Sider
      width={200}
      className="side-menu"
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      trigger={
        <div className="menu-trigger">
          <MenuFoldOutlined
            className={collapsed ? 'trigger-icon' : 'trigger-icon-reverse'}
            style={{ color: 'black' }}
          />
        </div>
      }
    >
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Ana Sayfa
        </Menu.Item>
        <Menu.Item key="2" icon={<TableOutlined />}>
          Siparişler
        </Menu.Item>
        <Menu.Item key="3" icon={<AuditOutlined />}>
          Üretim Yönetimi
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<SisternodeOutlined />}
          title="Üretim"
          onTitleClick={() => console.log('asd')}
        >
          <Menu.Item key="sub1-1">Ahşap Atölyesi</Menu.Item>
          <Menu.Item key="sub1-2">Metal Atölyesi</Menu.Item>
          <Menu.Item key="sub1-3">Boya Atölyesi</Menu.Item>
          <Menu.Item key="sub1-4">Cam Atölyesi</Menu.Item>
          <Menu.Item key="sub1-5">Mermer Atölyesi</Menu.Item>
          <Menu.Item key="sub1-6">Kumaş Atölyesi</Menu.Item>
        </SubMenu>
        <Menu.Item key="4" icon={<InboxOutlined />}>
          Toplama/Paketleme
        </Menu.Item>
        <SubMenu
          key="sub2"
          icon={<UploadOutlined />}
          title="Sevkiyat/Fatura"
          onTitleClick={() => console.log('asd')}
        >
          <Menu.Item key="sub2-1">Sevkiyat</Menu.Item>
          <Menu.Item key="sub2-2">Fatura</Menu.Item>
        </SubMenu>
        <Menu.Item key="5" icon={<InteractionOutlined />}>
          Al-Sat
        </Menu.Item>
        <Menu.Item key="6" icon={<MinusCircleOutlined />}>
          İptal-İade
        </Menu.Item>
        <Menu.Item key="7" icon={<CodeOutlined />}>
          Log
        </Menu.Item>
        <SubMenu key="sub3" icon={<SettingOutlined />} title="Admin Panel">
          <Menu.Item key="sub3-1">Dış Hizmetler</Menu.Item>
          <Menu.Item key="sub3-2">Sistem Parametreleri</Menu.Item>
          <Menu.Item key="sub3-3">Pazaryerleri</Menu.Item>
          <Menu.Item key="sub3-4">Kullanıcılar</Menu.Item>
          <Menu.Item key="sub3-5">Metadata</Menu.Item>
          <Menu.Item key="sub3-6">Ürünler</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
