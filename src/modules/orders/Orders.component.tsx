import { Breadcrumb } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent } from 'react';

const OrdersPage: FunctionComponent = () => {
  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Listeleme</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
    </>
  );
};

export default OrdersPage;
