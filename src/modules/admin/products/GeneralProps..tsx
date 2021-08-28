import {
  Card,
  Form,
  Row,
  Col,
  Input,
  FormInstance,
  Upload,
  Alert,
  Button,
} from 'antd';
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
} from './enums';
import ImageUploader from '../../../molecules/ImageUploader/ImageUploader';
import { ImageUploaderRelayCreateImageMutationResponse } from '../../../__generated__/ImageUploaderRelayCreateImageMutation.graphql';
import { ImageUploaderFragment } from '../../../__generated__/ImageUploaderFragment.graphql';
import GET_META_DATA, {
  MetadataRelayAllMetadataQuery,
} from '../../../__generated__/MetadataRelayAllMetadataQuery.graphql';
import { fetchQuery, useRelayEnvironment } from 'relay-hooks';
import mappers, { getDesi } from '../../../mappers';
import { CheckCircleOutlined } from '@ant-design/icons';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
  onImageUploadSuccess: (image: ImageUploaderFragment) => void;
  preSku: string;
  setPreSku: Dispatch<SetStateAction<string>>;
  createSkuNo: () => void;
  fullSku?: string;
}

const GeneralProps: FC<Props> = ({
  form,
  initialValues,
  isDisabled,
  onImageUploadSuccess,
  preSku,
  setPreSku,
  createSkuNo,
  fullSku,
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

  const onSkuChange = (e: any) => setPreSku(e.target.value);

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
                <Form.Item name={item.name} label={item.label}>
                  <SingleSelect
                    options={options[item.name] || []}
                    defaultValue={initialValues && initialValues[item.name]}
                  />
                </Form.Item>
              ) : (
                <Form.Item name={item.name} label={item.label}>
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
          <Row>
            <Col span={12}>
              <Input
                onChange={(e) => onSkuChange(e)}
                maxLength={3}
                placeholder="123"
                value={preSku}
              />
            </Col>
            <Col
              span={12}
              style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
            >
              <Button
                type="primary"
                onClick={() => createSkuNo()}
                icon={<CheckCircleOutlined />}
              >
                SKU Oluştur
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={8} offset={8}>
          <Alert message={fullSkuNo} type="success" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ImageUploader onImageUploadSuccess={onImageUploadSuccess} />
        </Col>
      </Row>
    </Card>
  );
};

export default GeneralProps;
