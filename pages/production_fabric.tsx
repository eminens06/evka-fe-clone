import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionFabric: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Fabric</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionFabric;
