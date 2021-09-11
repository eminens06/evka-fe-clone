import { Card, Form, Row, Col, Input, FormInstance, Alert } from 'antd';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SingleSelect } from '../../../../atoms';
import {
  generalMamuPropsFileds,
  generalPropsFileds,
  isCollectableOptions,
  isMonteOptions,
  kdvOptions,
  skuMustFields,
} from '../enums';
import GET_META_DATA, {
  MetadataRelayAllMetadataQuery,
} from '../../../../__generated__/MetadataRelayAllMetadataQuery.graphql';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import mappers, { getDesi } from '../../../../mappers';
import PicturesWall from '../../../../molecules/ImageUploader/PicturesWall';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
  fullSku?: string;
  setUploadedImages: Dispatch<SetStateAction<any[]>>;
  uploadedImages: any[];
}

const MamuGeneralProps: FC<Props> = ({
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
    setOptions((prevState: any) => ({
      ...prevState,
      isMonte: isMonteOptions,
      isCollectable: isCollectableOptions,
      kdv: kdvOptions,
    }));
  }, []);

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
        {generalMamuPropsFileds.map((item, index) => {
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
            label="SKU No"
            rules={[
              {
                required: true,
                message: 'Zorunlu alan',
              },
            ]}
          >
            <Input onChange={(e) => handleChange(e)} maxLength={11} />
          </Form.Item>
        </Col>
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

export default MamuGeneralProps;
