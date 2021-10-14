import { Breadcrumb, Form, Row, Button, message } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { fetchQuery, useMutation, useRelayEnvironment } from 'relay-hooks';
import useFullPageLoader from '../../../hooks/useFullPageLoader';
import mappers from '../../../mappers';
import SAVE_PARAMS, {
  ParametersRelayCreateMutation,
} from '../../../__generated__/ParametersRelayCreateMutation.graphql';
import GET_PARAMS, {
  ParametersRelayCreateQuery,
} from '../../../__generated__/ParametersRelayCreateQuery.graphql';
import LaborCard from './LaborCard';
import MetalCard from './MetalCard';
import OtherCard from './OtherCard';
import OtherWorkshopCard from './OtherWorkshopCard';
import WoodCard from './WoodCard';

const CreateEditParameters: FunctionComponent = () => {
  const environment = useRelayEnvironment();

  const [initialValues, setInitialValues] = useState<any>();
  const [id, setId] = useState<string>('');
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [form] = Form.useForm();

  const getSystemParams = async () => {
    const { allSystemParams } = await fetchQuery<ParametersRelayCreateQuery>(
      environment,
      GET_PARAMS,
      {},
    );
    const systemParams = allSystemParams?.edges[0]?.node;
    if (systemParams) {
      setId(systemParams.id);
      setInitialValues(mappers.systemParamMapper(systemParams));
    }
    closeLoader();
  };

  useEffect(() => {
    openLoader();
    getSystemParams();
  }, []);

  const [saveParams] = useMutation<ParametersRelayCreateMutation>(SAVE_PARAMS, {
    onError: (error: any) => {
      closeLoader();
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Sistem parametreleri kaydedildi.');
      getSystemParams();
    },
  });

  const onSave = (values: any) => {
    openLoader();
    const willSaveData = mappers.systemParamsSaveMapper(values);
    if (id !== '') {
      willSaveData.systemParamInput.id = id;
    }
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
      <Form
        form={form}
        layout="vertical"
        onFinish={onSave}
        initialValues={initialValues}
      >
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
        {loader}
      </Form>
    </>
  );
};

export default CreateEditParameters;
