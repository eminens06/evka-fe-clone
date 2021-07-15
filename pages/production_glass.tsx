import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { GlassProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionGlass: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <GlassProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionGlass;
