import { Breadcrumb, Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';

const { Title, Text } = Typography;

interface Props {
  breadcrumb: string[];
}

const PageHeader: FC<Props> = ({ breadcrumb }) => {
  return (
    <Header className="site-layout-sub-header-background">
      <Breadcrumb style={{ marginTop: '22px' }}>
        {breadcrumb.map((item, index) => (
          <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Header>
  );
};

export default PageHeader;
