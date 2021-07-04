import { Input, Form, Row, Col, message, FormInstance } from 'antd';
import React, { FC, useEffect } from 'react';
import { useMutation } from 'relay-hooks';
import { SingleSelect } from '../../atoms';
import CREATE_METADATA, {
  MetadataRelayCreateMetadataMutation,
} from '../../__generated__/MetadataRelayCreateMetadataMutation.graphql';
import UPDATE_METADATA, {
  MetadataRelayUpdateMetadataMutation,
} from '../../__generated__/MetadataRelayUpdateMetadataMutation.graphql';
import { CategoryOptions, MetadataFormProps } from './ListMetadata';

export interface MetadataProps {
  initialValues?: MetadataFormProps;
  form: FormInstance<any>;
}

const mapFormData = (data: any): any => {
  return {
    categoryName: data.category,
    materialName: data.material,
    materialId: data.number,
    id: data.id || undefined,
  };
};

const MetadataForm: FC<MetadataProps> = (props) => {
  const { form, initialValues } = props;
  const [createMetadata] = useMutation<MetadataRelayCreateMetadataMutation>(
    CREATE_METADATA,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        console.log(res);
        message.success('Siparişiniz başarıyla oluşturuldu');
        props.close();
      },
    },
  );

  const [updateMetadata] = useMutation<MetadataRelayUpdateMetadataMutation>(
    UPDATE_METADATA,
    {
      onError: (error: any) => {
        console.log('ERROR ! ', error);
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        console.log(res);
        message.success('Siparişiniz başarıyla oluşturuldu');
        props.close();
      },
    },
  );

  useEffect(() => form.resetFields(), [initialValues]);

  const onFormFinish = (values: any) => {
    console.log('Values : ', values);
    console.log('Finish Form');
    if (initialValues) {
      updateMetadata({
        variables: {
          input: mapFormData({ ...values, id: initialValues.id }),
        },
      });
      return;
    }
    createMetadata({
      variables: {
        input: {
          metaProductInput: mapFormData({ ...values }),
        },
      },
    });
  };

  return (
    <Form
      form={form}
      name="basic"
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFormFinish}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="Adı"
            name="material"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="No"
            name="number"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Col span={12}>
        <Form.Item
          name="category"
          label="Tipi"
          rules={[{ required: true, message: 'Zorunlu alan' }]}
          style={{ width: '100%' }}
        >
          <SingleSelect
            options={CategoryOptions}
            defaultValue={initialValues?.category}
          />
        </Form.Item>
      </Col>
    </Form>
  );
};

export default MetadataForm;
