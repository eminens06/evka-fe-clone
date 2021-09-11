import { Breadcrumb, Button, Form, message, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchQuery, useMutation, useRelayEnvironment } from 'relay-hooks';
import GET_PRODUCT, {
  ProductsRelayGetProductByIdQuery,
} from '../../../../__generated__/ProductsRelayGetProductByIdQuery.graphql';
import MetalProps from '../MetalProps';
import WoodProps from '../WoodProps';
import OtherWsProps from '../OtherWsProps';
import LaborProps from '../LaborProps';
import OtherProps from '../OtherProps';
import MamuGeneralProps from './MamuGeneralProps';
import mappers from '../../../../mappers';
import useFullPageLoader from '../../../../hooks/useFullPageLoader';
import CREATE_PRODUCT, {
  ProductsRelayCreateProductMutation,
} from '../../../../__generated__/ProductsRelayCreateProductMutation.graphql';
import UPDATE_PRODUCT, {
  ProductsRelayUpdateProductMutation,
} from '../../../../__generated__/ProductsRelayUpdateProductMutation.graphql';
import CREATE_IMAGE_GROUP, {
  ImageUploaderRelayCreateImageMutation,
  ImageUploaderRelayCreateImageMutationResponse,
} from '../../../../__generated__/ImageUploaderRelayCreateImageMutation.graphql';

const MamuProduct: FunctionComponent = () => {
  const router = useRouter();
  const environment = useRelayEnvironment();
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<any>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [fullSku, setFullSku] = useState<string>('');
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);

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
      initData.preSku = initData.sku.split('-')[2];
      setInitialValues(initData);
      setFullSku(product.sku);
      setUploadedImages(initData.defaultFileList);
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

  const [createImageGroup] = useMutation<ImageUploaderRelayCreateImageMutation>(
    CREATE_IMAGE_GROUP,
    {
      onCompleted: (result: any) => {
        if (result.createImageGroup && result.createImageGroup.imageGroup) {
          console.log(result);
        }
      },
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
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

  const onFinish = async (values: any) => {
    let asyncRes = [];
    asyncRes = await Promise.all(
      uploadedImages.map(async (file) => {
        return await new Promise((resolve, reject) => {
          if (file.status === 'uploading') {
            let uploadables;
            if (file) {
              uploadables = {
                image: file.originFileObj,
              };
            }
            createImageGroup({
              variables: {
                input: {
                  name: file.name,
                },
              },
              uploadables,
              onCompleted: (
                response: ImageUploaderRelayCreateImageMutationResponse,
              ) => {
                resolve(response);
              },
              onError: (error) => reject(error),
            });
          } else {
            resolve({
              createImageGroup: {
                imageGroup: {
                  id: file.id,
                },
              },
            });
          }
        });
      }),
    );

    const productData = mappers.productSaveMapper(values);
    productData.sku = fullSku;
    productData.imageIds = asyncRes.map(
      (item: any) => item.createImageGroup.imageGroup.id,
    );

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
          input: { product: productData },
        },
      });
    }
  };

  const getSkuCharacters = () => {
    if (form.getFieldValue('name')) {
      return form.getFieldValue('name')?.substring(0, 4).toUpperCase();
    }
    return '';
  };
  const getPreSku = () => {
    if (form.getFieldValue('preSku')) {
      return form.getFieldValue('preSku');
    }
    return '';
  };

  const createSkuNo = async () => {
    let newSku = '';
    newSku = 'MAMU-' + getSkuCharacters() + '-' + getPreSku();
    setFullSku(newSku);
  };

  const onChangeFormValues = (e: any) => {
    if (
      Object.keys(e).indexOf('name') !== -1 ||
      Object.keys(e).indexOf('preSku') !== -1
    ) {
      createSkuNo();
    }
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
        onValuesChange={(e) => onChangeFormValues(e)}
      >
        <MamuGeneralProps
          form={form}
          initialValues={initialValues}
          fullSku={fullSku}
          setUploadedImages={setUploadedImages}
          uploadedImages={uploadedImages}
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

export default MamuProduct;
