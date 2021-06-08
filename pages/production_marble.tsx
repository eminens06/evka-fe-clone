import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionMarble: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Marble</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionMarble;
