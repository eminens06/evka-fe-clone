import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionGlass: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Glass</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionGlass;
