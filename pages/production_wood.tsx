import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { WoodProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionWood: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <WoodProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionWood;
