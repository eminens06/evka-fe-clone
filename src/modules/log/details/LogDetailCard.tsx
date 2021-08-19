import { Button, Tabs, Modal } from 'antd';
import React, { FC } from 'react';
import { OrderLogDetail } from '../types';
import OrderHistory from './OrderHistory';
import OrderInformation from './OrderInformation';
import ProductHistory from './ProductHistory';
import ProductInformation from './ProductInformation';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  data: OrderLogDetail;
}

const { TabPane } = Tabs;

const LogDetailCard: FC<Props> = ({ isVisible, closeModal, data }) => {
  return (
    <Modal
      visible={isVisible}
      title="Sipariş Detayları"
      width={'70%'}
      onCancel={closeModal}
      footer={[
        <Button key="back" onClick={closeModal}>
          Vazgeç
        </Button>,
        <Button key="submit" disabled danger>
          Tamam
        </Button>,
      ]}
    >
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Sipariş Hareketleri" key="1">
          <OrderHistory id={data.id} />
        </TabPane>
        <TabPane tab="Sipariş Bilgileri" key="2">
          <OrderInformation data={data} />
        </TabPane>
        <TabPane tab="Ürün Hareketleri" key="3">
          <ProductHistory id={data.id} />
        </TabPane>
        <TabPane tab="Ürün Bilgileri" key="4">
          <ProductInformation products={data.products} />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default LogDetailCard;
