import { FormInstance, Tabs } from 'antd';
import React, { FC } from 'react';
import { Invoice } from '../types';
import InvoiceForm from './InvoiceForm';
import InvoiceOrderDetails from './InvoiceOrderDetails';

interface Props {
  form: FormInstance<any>;
  onSubmit: Function;
  modalData: Invoice;
}
const { TabPane } = Tabs;

const InvoiceDetails: FC<Props> = ({ form, modalData, onSubmit }) => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Siparişler" key="1">
        <InvoiceOrderDetails
          products={modalData.products}
          customerInfo={modalData.customerDetail}
        />
      </TabPane>
      <TabPane tab="Fatura Bilgileri" key="2">
        <InvoiceForm form={form} onSubmit={onSubmit} />
      </TabPane>
    </Tabs>
  );
};

export default InvoiceDetails;
