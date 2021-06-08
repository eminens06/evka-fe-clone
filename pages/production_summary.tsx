import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionSummary: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Summary</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionSummary;
