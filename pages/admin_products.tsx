import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const AdminProducts: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Admin Products</div>
    </RelayEnvironmentProvider>
  );
};

export default AdminProducts;
