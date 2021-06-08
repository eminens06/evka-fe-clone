import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const AdminOutsource: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Admin Outsource</div>
    </RelayEnvironmentProvider>
  );
};

export default AdminOutsource;
