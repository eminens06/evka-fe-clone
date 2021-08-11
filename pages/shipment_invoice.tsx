import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import Invoice from '../src/modules/shipment_invoice/Invoice';
import environment from '../src/relay/environment';

const ShipmentInvoice: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Invoice />
    </RelayEnvironmentProvider>
  );
};

export default ShipmentInvoice;
