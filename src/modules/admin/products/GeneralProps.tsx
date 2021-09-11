import { Card, Form, Row, Col, Input, FormInstance, Alert } from 'antd';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SingleSelect } from '../../../atoms';
import {
  generalPropsFileds,
  isCollectableOptions,
  isMonteOptions,
  kdvOptions,
  skuMustFields,
} from './enums';
import GET_META_DATA, {
  MetadataRelayAllMetadataQuery,
} from '../../../__generated__/MetadataRelayAllMetadataQuery.graphql';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import mappers, { getDesi } from '../../../mappers';
import PicturesWall from '../../../molecules/ImageUploader/PicturesWall';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
  fullSku?: string;
  setUploadedImages: Dispatch<SetStateAction<any[]>>;
  uploadedImages: any[];
}

const GeneralProps: FC<Props> = ({
  form,
  initialValues,
  isDisabled,
  fullSku,
  setUploadedImages,
  uploadedImages,
}) => {
  useEffect(() => form.resetFields(), [initialValues]);

  const environment = useRelayEnvironment();
  const [options, setOptions] = useState<any>({});

  useEffect(() => {
    generalPropsFileds.forEach((item) => {
      if (item.filter) {
        getMetaData(item).then((res) => {
          setOptions((prevState: any) => ({ ...prevState, [item.name]: res }));
        });
      }
    });
    setOptions((prevState: any) => ({
      ...prevState,
      isMonte: isMonteOptions,
      isCollectable: isCollectableOptions,
      kdv: kdvOptions,
    }));
  }, []);

  const getMetaData = async ({ filter }: any) => {
    const { allMetaProducts } = await fetchQuery<MetadataRelayAllMetadataQuery>(
      environment,
      GET_META_DATA,
      {
        search: '',
        category: filter,
      },
    );

    return mappers.metaDataOptionMapper(allMetaProducts);
  };

  const handleChange = (e: any) => {
    if (
      e.target.id === 'width' ||
      e.target.id === 'height' ||
      e.target.id === 'length'
    ) {
      const { width, height, length } = form.getFieldsValue();
      form.setFieldsValue({ desi: getDesi(width, height, length) });
    }
  };

  const fullSkuNo = useMemo(() => {
    return fullSku ? fullSku : initialValues?.sku || '';
  }, [initialValues, fullSku]);

  return (
    <Card title="Genel Bilgiler" bordered={false} className="form-card">
      <Row gutter={24}>
        {generalPropsFileds.map((item, index) => {
          return (
            <Col span={8} key={`other-${index}`}>
              {item.isDropdown ? (
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={[
                    {
                      required: item.isRequired,
                      message: 'Zorunlu alan',
                    },
                  ]}
                >
                  <SingleSelect
                    options={options[item.name] || []}
                    defaultValue={initialValues && initialValues[item.name]}
                  />
                </Form.Item>
              ) : (
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={[
                    {
                      required: item.isRequired,
                      message: 'Zorunlu alan',
                    },
                  ]}
                >
                  <Input
                    type={item.isText ? 'text' : 'number'}
                    disabled={isDisabled}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Item>
              )}
            </Col>
          );
        })}
      </Row>

      <Row gutter={24}>
        <Col span={8} offset={8}>
          <Form.Item
            name="preSku"
            label="SKU No(İlk 3 Rakam)"
            rules={[
              {
                required: true,
                message: 'Zorunlu alan',
              },
            ]}
          >
            <Input onChange={(e) => handleChange(e)} maxLength={3} />
          </Form.Item>
        </Col>
        {/*<Col style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Button
                type="primary"
                onClick={() => createSkuNo()}
                icon={<CheckCircleOutlined />}
              >
                SKU Oluştur
              </Button>
            </Col>*/}
        <Col span={8} offset={8} style={{ marginTop: '2em' }}>
          {fullSkuNo ? (
            <Alert message={fullSkuNo} type="success" />
          ) : (
            <Alert message="SKU Oluşturunuz" type="error" />
          )}
        </Col>
      </Row>
      <Row>
        <Col span={24} className="image-uploader">
          <PicturesWall
            setUploadedImages={setUploadedImages}
            imageFragmentGroup={uploadedImages}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default GeneralProps;
