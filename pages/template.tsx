import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import TemplatePage from '../src/modules/template/Template.component';

const Template: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <TemplatePage />
    </RelayEnvironmentProvider>
  );
};

export default Template;
