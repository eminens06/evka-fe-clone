import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ShipmentManagementList } from '../src/modules/shipment_invoice';
import environment from '../src/relay/environment';

const ShipmentManagement: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ShipmentManagementList />
    </RelayEnvironmentProvider>
  );
};

export default ShipmentManagement;
