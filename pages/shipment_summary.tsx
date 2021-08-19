import React from 'react';
import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ShipmentInvoiceSummary } from '../src/modules/shipment_invoice';
import environment from '../src/relay/environment';

const ShipmentSummary: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ShipmentInvoiceSummary />
    </RelayEnvironmentProvider>
  );
};

export default ShipmentSummary;
