import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionWood: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Wood</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionWood;
