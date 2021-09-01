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
import CREATE_PRODUCT, {
  ProductsRelayCreateProductMutation,
} from '../../../__generated__/ProductsRelayCreateProductMutation.graphql';
import UPDATE_PRODUCT, {
  ProductsRelayUpdateProductMutation,
} from '../../../__generated__/ProductsRelayUpdateProductMutation.graphql';
import GET_META_PROD, {
  ProductsRelayGetMetaProductByIdQuery,
} from '../../../__generated__/ProductsRelayGetMetaProductByIdQuery.graphql';

const CreateEditProduct: FunctionComponent = () => {
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<any>();
  const [uploadedImage, setUploadedImage] = useState<any>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [preSku, setPreSku] = useState<string>('');
  const [fullSku, setFullSku] = useState<string>('');

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
      const initData = mappers.productAttributesMapper(product);
      setInitialValues(initData);
      setPreSku(initData.sku.split('-')[2].substring(0, 3));
      closeLoader();
    }
  };

  const [createProduct] = useMutation<ProductsRelayCreateProductMutation>(
    CREATE_PRODUCT,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Ürün başarıyla oluşturuldu');
        router.back();
      },
    },
  );

  const [updateProduct] = useMutation<ProductsRelayUpdateProductMutation>(
    UPDATE_PRODUCT,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Ürün başarıyla güncellendi');
        router.back();
      },
    },
  );

  useEffect(() => {
    if (router?.query?.id) {
      openLoader();
      setIsEdit(true);
      getProductDetail();
    }
  }, [router]);

  const onFinish = (values: any) => {
    console.log('TODO: create update system params');
    console.log(values);
    const productData = mappers.productSaveMapper(values);
    productData.sku = fullSku;

    if (isEdit) {
      productData.id = router?.query?.id;
      updateProduct({
        variables: {
          input: { product: productData },
        },
      });
    } else {
      createProduct({
        variables: {
          input: { ...productData },
        },
      });
    }
  };

  const handleSelectedSuccess = useCallback((image: ImageUploaderFragment) => {
    if (image.id) {
      setUploadedImage(image);
    }
  }, []);

  const getMetaProductId = async () => {
    const formFields = form.getFieldsValue();
    const metaData = [
      formFields.category,
      formFields.subCategory,
      formFields.tabla,
      formFields.ayak,
    ];
    let asyncRes = [];
    asyncRes = await Promise.all(
      metaData.map(async (item) => {
        const {
          metaProduct,
        } = await fetchQuery<ProductsRelayGetMetaProductByIdQuery>(
          environment,
          GET_META_PROD,
          {
            id: item,
          },
        );
        return metaProduct?.materialId;
      }),
    );
    const isMonte = formFields.isMonte === 'demonte' ? '0' : '1';
    return asyncRes.join('') + isMonte;
  };

  const createSkuNo = async () => {
    const generated = await getMetaProductId();
    let newSku = '';
    newSku =
      'EVKA-' +
      form.getFieldValue('name').substring(0, 4).toUpperCase() +
      '-' +
      preSku +
      generated;
    setFullSku(newSku);
  };

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
          preSku={preSku}
          setPreSku={setPreSku}
          createSkuNo={createSkuNo}
          fullSku={fullSku}
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
