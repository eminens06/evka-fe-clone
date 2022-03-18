import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import { StoragePage } from '../src/modules/storage';

const Storage: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <StoragePage />
    </RelayEnvironmentProvider>
  );
};

export default Storage;
