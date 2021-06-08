import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import OrdersaPage from '../src/modules/orders';

const Orders: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <OrdersaPage />
    </RelayEnvironmentProvider>
  );
};

export default Orders;
