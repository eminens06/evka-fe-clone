import { Form } from 'antd';
import React, { FC } from 'react';
import { useEffect } from 'react';
import { SingleSelect } from '../../atoms';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import GET_EXTERNAL_SERVICES, {
  ExternalServiceRelayGetExternalServiceQuery,
} from '../../__generated__/ExternalServiceRelayGetExternalServiceQuery.graphql';

interface Props {
  form: any;
  saveForm: any;
  withRawMaterial: boolean;
}

const AddOutSourceServiceForm: FC<Props> = ({
  form,
  saveForm,
  withRawMaterial,
}) => {
  const onFormFinish = (values: any) => {
    console.log('On Form Finish ', values);
    saveForm(values);
  };

  useEffect(() => form.resetFields());

  const {
    data,
    isLoading,
  } = useFetchTablePagination<ExternalServiceRelayGetExternalServiceQuery>(
    GET_EXTERNAL_SERVICES,
    {
      search: '',
    },
    mappers.externalServiceSelectMapper,
  );

  if (isLoading) {
    return <div>Yükleniyor ....</div>;
  }
  return (
    <Form form={form} name="basic" layout="vertical" onFinish={onFormFinish}>
      {withRawMaterial && (
        <Form.Item
          name="rawMaterial"
          label="Hammadde"
          rules={[{ required: true, message: 'Zorunlu alan' }]}
        >
          <SingleSelect options={data} />
        </Form.Item>
      )}
      <Form.Item
        name="externalServiceIds"
        label="Atölye"
        rules={[{ required: true, message: 'Zorunlu alan' }]}
      >
        <SingleSelect options={data} />
      </Form.Item>
    </Form>
  );
};

export default AddOutSourceServiceForm;
