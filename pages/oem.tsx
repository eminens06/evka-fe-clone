import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const AdminMarketplaces: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div> Yapım aşamasında</div>
    </RelayEnvironmentProvider>
  );
};

export default AdminMarketplaces;
