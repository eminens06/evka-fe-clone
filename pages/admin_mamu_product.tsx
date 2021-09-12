import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import MamuProduct from '../src/modules/admin/products/mamu/MamuProduct';
import environment from '../src/relay/environment';

const AdminMamuProduct: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <MamuProduct />
    </RelayEnvironmentProvider>
  );
};

export default AdminMamuProduct;
