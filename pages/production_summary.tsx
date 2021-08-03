import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { SummaryProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionSummary: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <SummaryProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionSummary;
