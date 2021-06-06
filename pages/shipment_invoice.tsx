import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ShipmentInvoice: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Shipment Invoice</div>
    </RelayEnvironmentProvider>
  );
};

export default ShipmentInvoice;
