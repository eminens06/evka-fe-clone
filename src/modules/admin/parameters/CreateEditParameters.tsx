import { Breadcrumb, Form, Row, Button, message } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import mappers from '../../../mappers';
import SAVE_PARAMS, {
  ParametersRelayCreateMutation,
  SystemParamCreateInput,
} from '../../../__generated__/ParametersRelayCreateMutation.graphql';
import {
  laborFields,
  metalFields,
  otherFields,
  otherWorkshopFields,
  woodFields,
} from './enums';
import LaborCard from './LaborCard';
import MetalCard from './MetalCard';
import OtherCard from './OtherCard';
import OtherWorkshopCard from './OtherWorkshopCard';
import { SystemFormTypes } from './types';
import WoodCard from './WoodCard';

const CreateEditParameters: FunctionComponent = () => {
  const [initialValues, setInitialValues] = useState<any>();

  const [form] = Form.useForm();

  const [saveParams] = useMutation<ParametersRelayCreateMutation>(SAVE_PARAMS, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      message.success('Sistem parametreleri kaydedildi.');
    },
  });

  const onSave = (values: any) => {
    const willSaveData = mappers.systemParamsSaveMapper(values);

    saveParams({
      variables: {
        input: { ...willSaveData },
      },
    });
  };

  return (
    <>
      <Header className="site-layout-sub-header-background">
        <Breadcrumb style={{ marginTop: '22px' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Sistem Parametreleri</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Form form={form} layout="vertical" onFinish={onSave}>
        <MetalCard form={form} initialValues={initialValues} />
        <WoodCard form={form} initialValues={initialValues} />
        <OtherWorkshopCard form={form} initialValues={initialValues} />
        <LaborCard form={form} initialValues={initialValues} />
        <OtherCard form={form} initialValues={initialValues} />
        <Row className="buttons-row">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </>
  );
};

export default CreateEditParameters;
