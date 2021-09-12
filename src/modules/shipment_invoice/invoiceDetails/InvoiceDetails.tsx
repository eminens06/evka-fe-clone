import { FormInstance, Tabs } from 'antd';
import React, { FC } from 'react';
import { Invoice, KdvParams } from '../types';
import InvoiceForm from './InvoiceForm';
import InvoiceOrderDetails from './InvoiceOrderDetails';

interface Props {
  form: FormInstance<any>;
  onSubmit: Function;
  modalData: Invoice;
  kdvDetails?: KdvParams;
}
const { TabPane } = Tabs;

const InvoiceDetails: FC<Props> = ({
  form,
  modalData,
  onSubmit,
  kdvDetails,
}) => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Siparişler" key="1">
        <InvoiceOrderDetails
          products={modalData.products}
          customerInfo={modalData.customerDetail}
          kdvDetails={kdvDetails}
        />
      </TabPane>
      <TabPane tab="Fatura Bilgileri" key="2">
        <InvoiceForm form={form} onSubmit={onSubmit} />
      </TabPane>
    </Tabs>
  );
};

export default InvoiceDetails;
