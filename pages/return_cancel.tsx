import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ReturnCancel: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Return Cancel</div>
    </RelayEnvironmentProvider>
  );
};

export default ReturnCancel;
