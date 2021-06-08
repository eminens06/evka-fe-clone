import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const Packaging: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Packaging</div>
    </RelayEnvironmentProvider>
  );
};

export default Packaging;
