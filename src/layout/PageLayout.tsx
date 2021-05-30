import React, { FunctionComponent, ReactNode, useState } from 'react';
import SideMenu from './SideMenu';
import './layout.module.less';
import { Layout, Menu, Breadcrumb, Dropdown, Avatar } from 'antd';

import { LogoutOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

interface Props {
  children: ReactNode;
}
const PageLayout: FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menu = (
    <Menu>
      <Menu.Item icon={<LogoutOutlined />}>Çıkış Yap</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header">
        <img src="/evka-logo.png" alt="Evka" className="header-logo" />
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <div className="header-user">
            <Avatar
              style={{
                color: '#65949c',
                backgroundColor: '#F4F9F4',
                marginRight: 10,
              }}
            >
              DM
            </Avatar>
            <a style={{ color: 'white' }}>Deniz Muratoglu</a>
          </div>
        </Dropdown>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <SideMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Layout
          className="page-layout"
          style={{
            marginLeft: collapsed ? 80 : 200,
          }}
        >
          <Header className="site-layout-sub-header-background">
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content className="content-container">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
