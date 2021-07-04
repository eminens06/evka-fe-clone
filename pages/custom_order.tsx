import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import { CustomOrderPage } from '../src/modules/orders';

const NormalOrder: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <CustomOrderPage />
    </RelayEnvironmentProvider>
  );
};

export default NormalOrder;
