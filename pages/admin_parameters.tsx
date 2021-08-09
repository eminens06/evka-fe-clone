import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import CreateEditParameters from '../src/modules/admin/parameters/CreateEditParameters';
import environment from '../src/relay/environment';

const AdminParameters: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <CreateEditParameters />
    </RelayEnvironmentProvider>
  );
};

export default AdminParameters;
