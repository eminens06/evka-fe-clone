import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import { CreateEditOrder } from '../src/modules/orders';
import { OrderTypes } from '../src/modules/orders/types';

const NormalOrder: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <CreateEditOrder orderType={OrderTypes.CUSTOM} />
    </RelayEnvironmentProvider>
  );
};

export default NormalOrder;
