import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const AdminParameters: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Admin Parameters</div>
    </RelayEnvironmentProvider>
  );
};

export default AdminParameters;
