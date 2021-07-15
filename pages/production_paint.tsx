import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { PaintProduction } from '../src/modules/production';
import environment from '../src/relay/environment';

const ProductionPaint: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <PaintProduction />
    </RelayEnvironmentProvider>
  );
};

export default ProductionPaint;
