import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ShipmentShipmentOrder: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Shipment Shipment Order</div>
    </RelayEnvironmentProvider>
  );
};

export default ShipmentShipmentOrder;
