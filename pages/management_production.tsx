import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ManagementProductionPage from '../src/modules/managementProduction';
import environment from '../src/relay/environment';

const ManagementProduction: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ManagementProductionPage />
    </RelayEnvironmentProvider>
  );
};

export default ManagementProduction;
