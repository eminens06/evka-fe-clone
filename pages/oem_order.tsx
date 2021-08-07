import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { CreateEditOrder } from '../src/modules/orders';
import { OrderTypes } from '../src/modules/orders/types';
import environment from '../src/relay/environment';

const OemOrder: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <CreateEditOrder orderType={OrderTypes.STORE} />
    </RelayEnvironmentProvider>
  );
};

export default OemOrder;
