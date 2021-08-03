import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ListPackaging from '../src/modules/packaging/ListPackaging';
import environment from '../src/relay/environment';

const Packaging: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ListPackaging />
    </RelayEnvironmentProvider>
  );
};

export default Packaging;
