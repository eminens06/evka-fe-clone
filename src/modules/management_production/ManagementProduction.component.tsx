import { Breadcrumb, Modal, Button, Input, Form } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

const ManagementProductionPage: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { Search } = Input;

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Management Production Page</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content className="content-container">
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Kaydet"
          cancelText="Vazgeç"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

        <Form name="basic" initialValues={{ remember: true }}>
          <Form.Item label="SKU" name="sku">
            <Search
              style={{ width: '50%' }}
              placeholder="EVKA-ZEMA-00111010441"
              allowClear
              enterButton={<CheckCircleOutlined />}
              size="large"
              onSearch={() => console.log('asd')}
            />
          </Form.Item>
        </Form>

        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </Content>
    </>
  );
};

export default ManagementProductionPage;
