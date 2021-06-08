import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ShipmentSummary: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Shipment Summary</div>
    </RelayEnvironmentProvider>
  );
};

export default ShipmentSummary;
