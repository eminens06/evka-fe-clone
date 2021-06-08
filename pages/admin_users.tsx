import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const AdminUsers: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Admin Users</div>
    </RelayEnvironmentProvider>
  );
};

export default AdminUsers;
