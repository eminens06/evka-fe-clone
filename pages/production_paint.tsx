import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';

const ProductionPaint: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div>Production Paint</div>
    </RelayEnvironmentProvider>
  );
};

export default ProductionPaint;
