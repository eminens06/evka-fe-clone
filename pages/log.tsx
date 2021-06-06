import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const Log: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Log</div>
    </RelayEnvironmentProvider>
  );
};

export default Log;
