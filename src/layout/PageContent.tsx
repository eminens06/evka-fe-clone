import Layout, { Content } from 'antd/lib/layout/layout';
import React, { FC, ReactChild } from 'react';
import PageHeader from './PageHeader';

interface Props {
  header: string[];
  children: ReactChild;
}

const PageContent: FC<Props> = ({ header, children }) => {
  return (
    <>
      <PageHeader breadcrumb={header} />
      <Layout className="content-container">{children}</Layout>
    </>
  );
};

export default PageContent;
