import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { FabricProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionFabric: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <FabricProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionFabric;
