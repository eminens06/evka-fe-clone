import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { MarbleProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionMarble: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <MarbleProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionMarble;
