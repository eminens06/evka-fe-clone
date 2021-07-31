import { Breadcrumb, Button, Card, Image, Layout, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect } from 'react';
import { PrinterOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const TemplatePage: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id) {
      //TODO: get request
      console.log(router?.query?.id);
    }
  }, [router]);
  return (
    <Layout>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px', float: 'left' }}>
          <Breadcrumb.Item>Şablon</Breadcrumb.Item>
        </Breadcrumb>
        <Button
          type="primary"
          icon={<PrinterOutlined />}
          style={{ marginTop: '16px', float: 'right' }}
          onClick={() => window.print()}
        >
          Şablonu Yazdır
        </Button>
      </Header>
      <Card title="Özellikleri" bordered={false} className="form-card">
        <Row gutter={24}></Row>
      </Card>
      <Card title="Resimler" bordered={false} className="form-card">
        <Row gutter={24}>
          <Image
            width={300}
            style={{ padding: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={300}
            style={{ padding: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={300}
            style={{ padding: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Row>
      </Card>
      <Card title="Teknik Resimler" bordered={false} className="form-card">
        <Row gutter={24}>
          <Image
            width={300}
            style={{ padding: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={300}
            style={{ padding: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image
            width={300}
            style={{ padding: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Row>
      </Card>
    </Layout>
  );
};

export default TemplatePage;
