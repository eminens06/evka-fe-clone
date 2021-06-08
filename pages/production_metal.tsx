import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionMetal: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Metal</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionMetal;
