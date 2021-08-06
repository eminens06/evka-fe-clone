import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import SideMenu from './SideMenu';
import './layout.module.less';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import signOut from '../modules/auth/utils/sign-out';
import { useRouter } from 'next/router';
import { User } from '../modules/auth/types';
const { Header, Content } = Layout;

interface Props {
  children: ReactNode;
  user?: User;
}
const PageLayout: FunctionComponent<Props> = (props: Props) => {
  const { children, user } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const router = useRouter();
  const handleSignOut = useCallback(() => {
    signOut(router);
  }, [router]);

  const menu = (
    <Menu>
      <Menu.Item onClick={handleSignOut} icon={<LogoutOutlined />} key="logout">
        Çıkış Yap
      </Menu.Item>
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
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </Avatar>
            <a style={{ color: 'white' }}>
              {`${user?.firstName} ${user?.lastName}`}
            </a>
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
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
