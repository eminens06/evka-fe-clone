import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const Oem: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>OEM</div>
    </RelayEnvironmentProvider>
  );
};

export default Oem;
