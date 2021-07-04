import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import { NormalOrderPage } from '../src/modules/orders';

const NormalOrder: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <NormalOrderPage />
    </RelayEnvironmentProvider>
  );
};

export default NormalOrder;
