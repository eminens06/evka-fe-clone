import { Breadcrumb, Button, Form, message, Row, Alert , Col } from 'antd';
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
import GeneralProps from './GeneralProps';
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
import CREATE_IMAGE_GROUP, {
  ImageUploaderRelayCreateImageMutation,
  ImageUploaderRelayCreateImageMutationResponse,
} from '../../../__generated__/ImageUploaderRelayCreateImageMutation.graphql';
import { generalPropsFileds, skuMustFields } from './enums';

const CreateEditProduct: FunctionComponent = () => {
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
      initData.preSku = initData.sku.split('-')[2].substring(0, 3);
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
          if (!file.id) {
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

  const getMetaProductId = async () => {
    const formFields = form.getFieldsValue();
    const metaData = [
      formFields.category,
      formFields.subCategory,
      formFields.tabla,
      formFields.ayak,
    ];
    if (metaData.indexOf(undefined) === -1) {
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
    }
    return '';
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
    const generated = await getMetaProductId();
    let newSku = '';
    newSku = 'EVKA-' + getSkuCharacters() + '-' + getPreSku() + generated;
    setFullSku(newSku);
  };

  const onChangeFormValues = (e: any) => {
    skuMustFields.forEach((item) => {
      if (
        Object.keys(e).indexOf(item.name) !== -1 ||
        Object.keys(e).indexOf('preSku') !== -1
      ) {
        createSkuNo();
      }
    });
  };
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Ürün Ekleme</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Row gutter={[0, 22]}>
      <Col span={24} 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}           
      onClick={() => setIsAlertVisible(!isAlertVisible)}>
    <Alert 
      type="info" 
      showIcon 
      style={{ maxWidth: '97%', width: '100%' , marginTop: '20px'}}
      message="    Çoklu Ürün Oluşturma Hususları (Tıklayınız)"
      description={isAlertVisible && (
        <>
          <p>Çoklu ürün oluşturmak için orijinal ürüne ait ürün adını olduğu gibi kopyalayıp, şu formata uygun hale getiriniz:
            Orijinal Ürün Adı_COKLU_İstenilen Ürün Adeti. </p>
          <p>Örnek: Orijinal Ürün: "Tulip Beyaz Geniş Masa", İstenilen adet: 10, Olması gereken ürün adı: "Tulip Beyaz Geniş Masa_COKLU_10"</p>
          <p>Bunun yanı sıra, orijinal ürüne ait reçeteyi istenilen adet ile çarpıp elde edilen sonuçları bu ürün için girmeniz gerekmektedir. Gerçekleşen paket adetini ise ürün depoya eklenmeden önce değiştirebileceksiniz.
          </p>
          <p>Son olarak ise çoklu ürünün SKUsunun orijinal ürünün sahip olduğu SKUdan farklı bir değere sahip olması adına ilk 3 rakamı farklı girmeniz önem arz etmektedir; aksi takdirde ürünlerin depoya eklenmesinde sorun yaşanacaktır.</p>
        </>
      )}
    
    />
  </Col>
</Row>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
        onValuesChange={(e) => onChangeFormValues(e)}
      >
        <GeneralProps
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

export default CreateEditProduct;
