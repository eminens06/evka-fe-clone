import {
  Row,
  Col,
  Card,
  Modal,
  Button,
  Typography,
  Form,
  InputNumber,
} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { FC, useEffect, useMemo } from 'react';
import { useMutation } from 'relay-hooks';
import { SingleSelect } from '../../atoms';
import Input from '../../atoms/Input';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import GET_EXTERNAL_SERVICES, {
  ExternalServiceRelayGetExternalServiceQuery,
} from '../../__generated__/ExternalServiceRelayGetExternalServiceQuery.graphql';
import { Oem, OemFormData } from './types';

interface Props {
  modalData: Oem;
  onApprove: (data: OemFormData) => void;
  isVisible: boolean;
  closeModal: () => void;
}

const OemModal: FC<Props> = ({
  modalData,
  onApprove,
  isVisible,
  closeModal,
}) => {
  const { productName, sku } = modalData;

  const [form] = useForm();

  useEffect(() => form.resetFields());

  const {
    data,
    isLoading,
  } = useFetchTablePagination<ExternalServiceRelayGetExternalServiceQuery>(
    GET_EXTERNAL_SERVICES,
    {
      search: '',
      byModuleName: 'AS',
    },
    mappers.externalServiceSelectMapper,
  );

  if (isLoading) {
    return <div>Yükleniyor ....</div>;
  }

  const onFormFinish = (values: any) => {
    onApprove({
      ...values,
      productId: modalData.id,
    });
  };

  return (
    <Modal
      visible={isVisible}
      title={'Sipariş Özeti'}
      width={'70%'}
      onCancel={closeModal}
      footer={[
        <Button key="back" onClick={closeModal}>
          Vazgeç
        </Button>,
        <Button type="primary" onClick={() => form.submit()}>
          Alım İşlemini Onayla
        </Button>,
      ]}
    >
      <Card title="Ürün Bilgileri" bordered className="form-card">
        <Row gutter={24}>
          <Col span={12}>
            <Typography.Title level={5}>{productName}</Typography.Title>
            <br></br>
            <Typography.Title level={5}>Siparişte KDV Durumu: {modalData.kdvStatus? "Dahil" : "Değil"}</Typography.Title>
            <br></br>
            <Typography.Text>{sku}</Typography.Text>
          </Col>
          <Col span={12}>
            <Form
              form={form}
              name="basic"
              layout="vertical"
              onFinish={onFormFinish}
            >
              <Form.Item
                label="Alış Fiyatı"
                name="purchasePrice"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <InputNumber decimalSeparator="," style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Tedarikçi"
                name="externalId"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <SingleSelect options={data} />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </Modal>
  );
};

export default OemModal;
