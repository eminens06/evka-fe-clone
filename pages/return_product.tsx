import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import AddReturnProduct from '../src/modules/return_cancel/AddReturnProduct';
import environment from '../src/relay/environment';

const ReturnProduct: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <AddReturnProduct />
    </RelayEnvironmentProvider>
  );
};

export default ReturnProduct;
