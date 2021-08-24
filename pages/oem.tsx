import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import Oem from '../src/modules/oem';
import environment from '../src/relay/environment';

const OemPage: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Oem />
    </RelayEnvironmentProvider>
  );
};

export default OemPage;
