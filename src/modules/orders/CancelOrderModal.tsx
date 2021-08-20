import { Button, Col, DatePicker, Form, message, Modal, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useMutation } from 'relay-hooks';
import { SingleSelect } from '../../atoms';
import CREATE_ORDER_MUTATION, {
  OrdersCancelOrderMutation,
} from '../../__generated__/OrdersCancelOrderMutation.graphql';

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
  const router = useRouter();
  const onSubmit = () => {
    form.submit();
  };

  const [cancelOrder] = useMutation<OrdersCancelOrderMutation>(
    CREATE_ORDER_MUTATION,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Sipariş İptal Edildi');
        closeModal();
        router.back();
      },
    },
  );

  const onFinish = (values: any) => {
    // TODO ADD MUTATION AND CLOSE MODAL
    cancelOrder({
      variables: {
        input: {
          ...values,
          userOrderId: orderId,
          productOrderIds: values.productOrderIds || [],
        },
      },
    });
  };

  return (
    <Modal
      visible={isVisible}
      title={'Sipariş İptal'}
      width={'70%'}
      onCancel={closeModal}
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
            <Form.Item label="Notlar" name="cancelNote">
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
