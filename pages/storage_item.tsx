import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import { CreateEditStorageItem } from '../src/modules/storage';

const StorageItem: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <CreateEditStorageItem />
    </RelayEnvironmentProvider>
  );
};

export default StorageItem;
