import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import Kiosk from './kiosk';

const App: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Kiosk />
    </RelayEnvironmentProvider>
  );
};

export default App;
