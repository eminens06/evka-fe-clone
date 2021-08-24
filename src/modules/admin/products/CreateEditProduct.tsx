import { Breadcrumb, Button, Form, message, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { fetchQuery, useMutation, useRelayEnvironment } from 'relay-hooks';
import GET_PRODUCT, {
  ProductsRelayGetProductByIdQuery,
} from '../../../__generated__/ProductsRelayGetProductByIdQuery.graphql';
import MetalProps from './MetalProps';
import WoodProps from './WoodProps';
import OtherWsProps from './OtherWsProps';
import LaborProps from './LaborProps';
import OtherProps from './OtherProps';
import GeneralProps from './GeneralProps.';
import { ImageUploaderFragment } from '../../../__generated__/ImageUploaderFragment.graphql';
import mappers from '../../../mappers';
import useFullPageLoader from '../../../hooks/useFullPageLoader';

const CreateEditProduct: FunctionComponent = () => {
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<any>();
  const [uploadedImage, setUploadedImage] = useState<any>('');

  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const getProductDetail = async () => {
    const { product } = await fetchQuery<ProductsRelayGetProductByIdQuery>(
      environment,
      GET_PRODUCT,
      {
        id: router.query.id as string,
      },
    );

    if (product) {
      setInitialValues(mappers.productAttributesMapper(product));
      closeLoader();
    }
  };

  useEffect(() => {
    if (router?.query?.id) {
      openLoader();
      getProductDetail();
    }
  }, [router]);

  const onFinish = (values: any) => {
    console.log('TODO: create update system params');
    console.log(values);
  };

  const handleSelectedSuccess = useCallback((image: ImageUploaderFragment) => {
    if (image.id) {
      setUploadedImage(image);
    }
  }, []);

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Ürün Ekleme</Breadcrumb.Item>
        </Breadcrumb>
      </Header>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <GeneralProps
          form={form}
          initialValues={initialValues}
          onImageUploadSuccess={handleSelectedSuccess}
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
      {loader}
    </>
  );
};

export default CreateEditProduct;
