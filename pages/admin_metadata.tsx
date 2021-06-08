import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const AdminMetadata: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Admin Metadata</div>
    </RelayEnvironmentProvider>
  );
};

export default AdminMetadata;
