import { Button, Col, DatePicker, Form, Modal, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import React, { FC } from 'react';
import { SingleSelect } from '../../atoms';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  orderId: string;
  products: any;
}

const CancelOrderModal: FC<Props> = ({
  isVisible,
  closeModal,
  orderId,
  products,
}) => {
  const [form] = useForm();
  const onSubmit = () => {
    form.submit();
  };

  const onFinish = (values: any) => {
    console.log('Values : ', { ...values, userOrderId: orderId });
    // TODO ADD MUTATION AND CLOSE MODAL
  };

  return (
    <Modal
      visible={isVisible}
      title={'Sipariş İptal'}
      width={'70%'}
      footer={[
        <Button key="back" onClick={closeModal}>
          Vazgeç
        </Button>,
        <Button key="submit" type="primary" danger onClick={onSubmit}>
          İptal Et
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item label="Notlar" name="cancelNotes">
              <TextArea rows={3} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="cancelledDate"
              label="İptal Tarihi"
              rules={[{ required: true, message: 'Zorunlu alan' }]}
            >
              <DatePicker
                style={{ width: '100%' }}
                placeholder=""
                format={'DD-MM-YYYY'}
              />
            </Form.Item>
          </Col>
          {products.length > 0 && (
            <Col span={12}>
              <Form.Item
                name="productOrderIds"
                label="İptal Edilecek Ürünler"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <SingleSelect options={products} multiple />
              </Form.Item>
            </Col>
          )}
        </Row>
      </Form>
    </Modal>
  );
};

export default CancelOrderModal;
