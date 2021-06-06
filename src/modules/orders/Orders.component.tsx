import { Breadcrumb } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent } from 'react';
import Table from '../common/table';

const OrdersPage: FunctionComponent = () => {
  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Ana Sayfa</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content className="content-container">
        <Table />
      </Content>
    </>
  );
};

export default OrdersPage;
