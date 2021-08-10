import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import CreateEditProduct from '../src/modules/admin/products/CreateEditProduct';
import environment from '../src/relay/environment';

const AdminProducts: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <CreateEditProduct />
    </RelayEnvironmentProvider>
  );
};

export default AdminProducts;
