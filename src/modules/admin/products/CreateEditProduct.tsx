import { Breadcrumb, Button, Form, message, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import GET_PRODUCT, {
  ProductsRelayGetProductByIdQuery,
} from '../../../__generated__/ProductsRelayGetProductByIdQuery.graphql';
import MetalProps from './MetalProps';
import WoodProps from './WoodProps';
import OtherWsProps from './OtherWsProps';
import LaborProps from './LaborProps';
import OtherProps from './OtherProps';
import GeneralProps from './GeneralProps.';

const CreateEditProduct: FunctionComponent = () => {
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<any>();

  const getProductDetail = async () => {
    const { product } = await fetchQuery<ProductsRelayGetProductByIdQuery>(
      environment,
      GET_PRODUCT,
      {
        id: router.query.id as string,
      },
    );

    if (product) {
      console.log(product);
    }
  };

  useEffect(() => {
    if (router?.query?.id) {
      getProductDetail();
    }
  }, [router]);

  const onFinish = () => {
    console.log('TODO: create update system params');
  };

  const draggerProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Ürün Ekleme</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <GeneralProps
          form={form}
          initialValues={initialValues}
          draggerProps={draggerProps}
        />
        <MetalProps form={form} initialValues={initialValues} />
        <WoodProps form={form} initialValues={initialValues} />
        <OtherWsProps form={form} initialValues={initialValues} />
        <LaborProps form={form} initialValues={initialValues} />
        <OtherProps form={form} initialValues={initialValues} />
        <Row className="buttons-row">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default CreateEditProduct;
