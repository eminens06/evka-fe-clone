import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import Logs from '../src/modules/log';
import environment from '../src/relay/environment';

const Log: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Logs />
    </RelayEnvironmentProvider>
  );
};

export default Log;
