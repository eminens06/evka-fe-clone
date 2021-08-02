import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ListProducts from '../src/modules/admin/products/ListProducts';
import environment from '../src/relay/environment';

const AdminProducts: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ListProducts />
    </RelayEnvironmentProvider>
  );
};

export default AdminProducts;
