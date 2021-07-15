import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { MetalProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionMetal: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <MetalProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionMetal;
