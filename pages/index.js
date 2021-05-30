import Head from 'next/head';
import { Button } from '../src/atoms';
import DummyComponent from '../src/modules/dummy';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>EVKA | Evde Kalite!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DummyComponent />
    </div>
  );
}
