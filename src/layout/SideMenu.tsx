import React, { FunctionComponent, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  TableOutlined,
  InboxOutlined,
  DashboardOutlined,
  AuditOutlined,
  SisternodeOutlined,
  InteractionOutlined,
  MinusCircleOutlined,
  CodeOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import CustomMenuItem from './CustomMenuItem';
import { Roles } from './roles';
import CustomSubMenu from './CustomSubMenu';

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
        <CustomMenuItem
          role={Roles.kiosk}
          title="KIOSK"
          icon={<DashboardOutlined />}
        />
        <CustomMenuItem
          role={Roles.orders}
          title="Siparişler"
          icon={<TableOutlined />}
        />
        <CustomMenuItem
          role={Roles.management_production}
          title="Üretim Yönetimi"
          icon={<AuditOutlined />}
        />
        <CustomMenuItem
          role={Roles.storage}
          title="Depo"
          icon={<ShopOutlined />}
        />
        <CustomSubMenu
          role="production"
          icon={<SisternodeOutlined />}
          title="Üretim"
        >
          <CustomMenuItem
            role={Roles.production_summary}
            title="Üretim Özeti"
          />
          <CustomMenuItem role={Roles.production_wood} title="Ahşap Atölyesi" />
          <CustomMenuItem
            role={Roles.production_metal}
            title="Metal Atölyesi"
          />
          <CustomMenuItem role={Roles.production_paint} title="Boya Atölyesi" />
          <CustomMenuItem role={Roles.production_glass} title="Cam Atölyesi" />
          <CustomMenuItem
            role={Roles.production_marble}
            title="Mermer Atölyesi"
          />
          <CustomMenuItem
            role={Roles.production_fabric}
            title="Kumaş Atölyesi"
          />
        </CustomSubMenu>
        <CustomMenuItem
          role={Roles.packaging}
          title="Toplama/Paketleme"
          icon={<InboxOutlined />}
        />

        <CustomSubMenu
          role="shipment"
          icon={<SisternodeOutlined />}
          title="Sevkiyat/Fatura"
        >
          <CustomMenuItem
            role={Roles.shipment_summary}
            title="Sevkiyat/Fatura Özeti"
          />
          <CustomMenuItem
            role={Roles.shipment_shipmentManagement}
            title="Sevkiyat Yönetimi"
          />
          <CustomMenuItem
            role={Roles.shipment_shipmentOrder}
            title="Sevkiyat"
          />
          <CustomMenuItem role={Roles.shipment_invoice} title="Fatura" />
        </CustomSubMenu>

        <CustomMenuItem
          role={Roles.oem}
          title="Al-Sat"
          icon={<InteractionOutlined />}
        />
        <CustomMenuItem
          role={Roles.return_cancel}
          title="İptal-İade"
          icon={<MinusCircleOutlined />}
        />
        <CustomMenuItem role={Roles.log} title="Log" icon={<CodeOutlined />} />

        <CustomSubMenu
          role="admin"
          icon={<SettingOutlined />}
          title="Admin Panel"
        >
          <CustomMenuItem
            role={Roles.admin + '_externalService'}
            title="Dış Hizmetler"
          />
          <CustomMenuItem
            role={Roles.admin + '_parameters'}
            title="Sistem Parametreleri"
          />
          <CustomMenuItem
            role={Roles.admin + '_marketplaces'}
            title="Pazaryerleri"
          />
          <CustomMenuItem role={Roles.admin + '_users'} title="Kullanıcılar" />
          <CustomMenuItem role={Roles.admin + '_metadata'} title="Metadata" />
          <CustomMenuItem role={Roles.admin + '_products'} title="Ürünler" />
        </CustomSubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
