import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ListUsers from '../src/modules/admin/users/ListUsers';
import environment from '../src/relay/environment';

const AdminUsers: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ListUsers />
    </RelayEnvironmentProvider>
  );
};

export default AdminUsers;
