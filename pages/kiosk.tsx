import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import KioskPage from '../src/modules/kiosk/';
import React from 'react';
import { Breadcrumb } from 'antd';
import { Header } from 'antd/lib/layout/layout';

const Kiosk: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <KioskPage />
    </RelayEnvironmentProvider>
  );
};

export default Kiosk;
