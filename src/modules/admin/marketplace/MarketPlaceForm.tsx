import { Input, Form, Row, Col, message, FormInstance, Button } from 'antd';
import React, { FC, useEffect } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from 'relay-hooks';
import CREATE_MARKETPLACE, {
  MarketplaceRelayCreateMarketplaceMutation,
} from '../../../__generated__/MarketplaceRelayCreateMarketplaceMutation.graphql';
import UPDATE_MARKETPLACE, {
  MarketplaceRelayUpdateMarketplaceMutation,
} from '../../../__generated__/MarketplaceRelayUpdateMarketplaceMutation.graphql';
import DELETE_MARKETPLACE, {
  MarketplaceRelayDeleteMarketplaceMutation,
} from '../../../__generated__/MarketplaceRelayDeleteMarketplaceMutation.graphql';
import useFullPageLoader from '../../../hooks/useFullPageLoader';

export interface MarketPlaceProps {
  initialValues?: any;
  form: FormInstance<any>;
  onSuccess: Function;
}

const MarketPlaceForm: FC<MarketPlaceProps> = (props) => {
  const { form, initialValues } = props;
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [
    createMarketplace,
  ] = useMutation<MarketplaceRelayCreateMarketplaceMutation>(
    CREATE_MARKETPLACE,
    {
      onError: (error: any) => {
        closeLoader();
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Pazaryeri başarıyla oluşturuldu');
        props.onSuccess();
        props.close();
      },
    },
  );

  const [
    updateMarketPlace,
  ] = useMutation<MarketplaceRelayUpdateMarketplaceMutation>(
    UPDATE_MARKETPLACE,
    {
      onError: (error: any) => {
        closeLoader();
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Pazaryeri başarıyla güncellendi');
        props.onSuccess();
        props.close();
      },
    },
  );

  const [
    deleteMarketPlace,
  ] = useMutation<MarketplaceRelayDeleteMarketplaceMutation>(
    DELETE_MARKETPLACE,
    {
      onError: (error: any) => {
        closeLoader();
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Pazaryeri başarıyla silindi');
        props.onSuccess();
        props.close();
      },
    },
  );

  useEffect(() => form.resetFields(), [initialValues]);

  const onFormFinish = (values: any) => {
    openLoader();
    if (initialValues) {
      updateMarketPlace({
        variables: {
          input: { ...values, id: initialValues.id },
        },
      });
      return;
    }
    createMarketplace({
      variables: {
        input: { ...values },
      },
    });
  };

  const onPressDelete = () => {
    openLoader();
    const id = initialValues.id;
    if (!id) return;
    deleteMarketPlace({
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
            label="Pazaryeri Adı"
            name="name"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Komisyon Oranı(%)"
            name="commissionRate"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Col span={12}>
        <Form.Item
          name="deliveryDate"
          label="Teslim Süresi"
          rules={[{ required: true, message: 'Zorunlu alan' }]}
        >
          <Input />
        </Form.Item>
      </Col>
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
      {loader}
    </Form>
  );
};

export default MarketPlaceForm;
