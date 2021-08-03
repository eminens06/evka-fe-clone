import React, { useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { loadSession } from '../src/modules/auth/utils/session.utils';
import useAuthState from '../src/modules/auth/utils/UseAuthState.hook';
import PageLayout from '../src/layout/PageLayout';
import SignIn from './signIn';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  const session = loadSession();
  const state = useAuthState(session);
  const router = useRouter();

  const withoutLayout = useMemo(() => {
    return router.route.startsWith('/template');
  }, [router.route]);

  const isAuthenticated = useMemo(() => {
    return state === 'authenticated';
  }, [state]);

  if (!isAuthenticated) {
    return (
      <div className="container">
        <Head>
          <title>EVKA | Evde Kalite!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SignIn />
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>EVKA | Evde Kalite!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {withoutLayout ? (
        <Component {...pageProps} />
      ) : (
        <PageLayout user={session.user}>
          <Component {...pageProps} />
        </PageLayout>
      )}
    </div>
  );
};

export default MyApp;
