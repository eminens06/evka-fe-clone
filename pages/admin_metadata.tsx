import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ListMetadata from '../src/modules/metadata/ListMetadata';
import environment from '../src/relay/environment';

const AdminMetadata: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ListMetadata />
    </RelayEnvironmentProvider>
  );
};

export default AdminMetadata;
