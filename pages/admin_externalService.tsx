import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ListExternalServices from '../src/modules/admin/externalService/ListExternalServices';
import environment from '../src/relay/environment';

const AdminExternalService: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ListExternalServices />
    </RelayEnvironmentProvider>
  );
};

export default AdminExternalService;
