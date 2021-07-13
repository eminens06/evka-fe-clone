import { Row, Col, Card, Modal, Button, Typography } from 'antd';
import React, { FC, useMemo } from 'react';
import { ProductionManagment } from './types';

interface Props {
  data: ProductionManagment;
  onApprove: any;
  onStorage: any;
  isVisible: boolean;
  closeModal: () => void;
}

const ProductOrderSummary: FC<Props> = ({
  data,
  onApprove,
  onStorage,
  isVisible,
  closeModal,
}) => {
  const {
    customerHeader,
    phoneNumber,
    deliveryAddress,
    metadataHeader,
    metadata,
  } = useMemo(() => {
    if (!data) return {};
    const { customerInfo, productName, legMaterial, tableMaterial } = data;
    return {
      customerHeader: `${customerInfo.name} ${customerInfo.surname || ''}`,
      phoneNumber: customerInfo.phone_number,
      deliveryAddress: customerInfo.delivery_address,
      metadataHeader: productName,
      metadata: `${legMaterial} / ${tableMaterial}`,
    };
  }, [data]);

  return (
    <Modal
      visible={isVisible}
      title={'Sipariş Özeti'}
      width={'70%'}
      onCancel={closeModal}
      footer={[
        <Button type="primary" onClick={onApprove}>
          Depoda Var
        </Button>,
        <Button type="primary" onClick={onStorage}>
          Üretime Gönder
        </Button>,
      ]}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Card title="Ürün Bilgileri" bordered className="form-card">
            <Typography.Title level={5}>{metadataHeader}</Typography.Title>
            <br></br>
            <Typography.Text>{metadata}</Typography.Text>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Müşteri Bilgileri" bordered className="form-card">
            <Typography.Title level={5}>{customerHeader}</Typography.Title>
            <br></br>
            <Typography.Text>{phoneNumber}</Typography.Text>
            <br></br>
            <Typography.Text>{deliveryAddress}</Typography.Text>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

export default ProductOrderSummary;
