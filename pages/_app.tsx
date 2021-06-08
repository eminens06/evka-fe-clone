import React, { useEffect, useMemo, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { loadSession } from '../src/modules/auth/utils/session.utils';
import useAuthState from '../src/modules/auth/utils/UseAuthState.hook';
import SignInForm from '../src/modules/auth/sign-in/SignInForm.component';
import PageLayout from '../src/layout/PageLayout';
import App from '.';
import SignIn from './signIn';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  const session = loadSession();
  const state = useAuthState(session);

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
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  );
};

export default MyApp;
