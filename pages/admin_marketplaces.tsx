import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ListMarketPlaces from '../src/modules/admin/marketplace/ListMarketPlaces';
import environment from '../src/relay/environment';

const AdminMarketplaces: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ListMarketPlaces />
    </RelayEnvironmentProvider>
  );
};

export default AdminMarketplaces;
