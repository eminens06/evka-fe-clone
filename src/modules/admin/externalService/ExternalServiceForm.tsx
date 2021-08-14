import {
  Input,
  Form,
  Row,
  Col,
  message,
  FormInstance,
  Button,
  Checkbox,
} from 'antd';
import React, { FC, useEffect } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from 'relay-hooks';
import { SingleSelect } from '../../../atoms';
import { ModuleType } from './types';
import CREATE_EXTERNALSERVICE, {
  ExternalServiceRelayCreateExternalServiceMutation,
} from '../../../__generated__/ExternalServiceRelayCreateExternalServiceMutation.graphql';
import UPDATE_EXTERNALSERVICE, {
  ExternalServiceRelayUpdateExternalServiceMutation,
} from '../../../__generated__/ExternalServiceRelayUpdateExternalServiceMutation.graphql';
import DELETE_EXTERNALSERVICE, {
  ExternalServiceRelayDeleteExternalServiceMutation,
} from '../../../__generated__/ExternalServiceRelayDeleteExternalServiceMutation.graphql';

export interface ExternalServiceProps {
  initialValues?: any;
  form: FormInstance<any>;
  onSuccess: Function;
}

export const ModuleOptions = [
  {
    value: ModuleType.GL,
    text: 'Cam Atölyesi',
  },
  {
    value: ModuleType.MR,
    text: 'Mermer Atölyesi',
  },
  {
    value: ModuleType.PT,
    text: 'Boya Atölyesi',
  },
  {
    value: ModuleType.F,
    text: 'Kumaş Atölyesi',
  },
  {
    value: ModuleType.AS,
    text: 'Al-Sat',
  },
];

const ExternalServiceForm: FC<ExternalServiceProps> = (props) => {
  const { form, initialValues } = props;
  const [
    createExternalService,
  ] = useMutation<ExternalServiceRelayCreateExternalServiceMutation>(
    CREATE_EXTERNALSERVICE,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Dış hizmet başarıyla oluşturuldu');
        props.onSuccess();
        props.close();
      },
    },
  );

  const [
    updateExternalService,
  ] = useMutation<ExternalServiceRelayUpdateExternalServiceMutation>(
    UPDATE_EXTERNALSERVICE,
    {
      onError: (error: any) => {
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        message.success('Dış hizmet başarıyla güncellendi');
        props.onSuccess();
        props.close();
      },
    },
  );

  const [
    deleteExternalService,
  ] = useMutation<ExternalServiceRelayDeleteExternalServiceMutation>(
    DELETE_EXTERNALSERVICE,
    {
      onError: (error: any) => {
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        message.success('Dış hizmet başarıyla silindi');
        props.onSuccess();
        props.close();
      },
    },
  );

  useEffect(() => form.resetFields(), [initialValues]);

  // TODO BACKEND GELINCE RETURN KALDIRILACAK
  const onFormFinish = (values: any) => {
    console.log('VALUES ! ', values);
    return;
    if (initialValues) {
      updateExternalService({
        variables: {
          input: { ...values, id: initialValues.id },
        },
      });
      return;
    }
    createExternalService({
      variables: {
        input: { ...values },
      },
    });
  };

  const onPressDelete = () => {
    const id = initialValues.id;
    if (!id) return;
    deleteExternalService({
      variables: {
        input: {
          id,
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
            label="Hizmet Alanı"
            name="module"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <SingleSelect
              options={ModuleOptions}
              defaultValue={initialValues?.module}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Firma Adı"
            name="name"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="phoneNumber"
            label="Telefon"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="address"
            label="Adresi"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="isRawMaterial" valuePropName="checked">
            <Checkbox>Hammaddeci mi?</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      {initialValues && (
        <Row gutter={24}>
          <Col offset={9}>
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={onPressDelete}
            >
              Pazaryeri Sil
            </Button>
          </Col>
        </Row>
      )}
    </Form>
  );
};

export default ExternalServiceForm;
