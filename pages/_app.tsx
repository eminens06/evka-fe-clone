import React, { useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { loadSession } from '../src/modules/auth/utils/session.utils';
import useAuthState from '../src/modules/auth/utils/UseAuthState.hook';
import PageLayout from '../src/layout/PageLayout';
import SignIn from './signIn';
import { useRouter } from 'next/router';
import { RolesMapper } from '../src/layout/roles';
import { Button } from 'antd';

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

  const authorization = useMemo(() => {
    if (session?.user?.roles.includes('admin')) return true;
    const routeName = router.route.replace('/', '');

    if (routeName === '') {
      return true;
    }

    return session?.user?.roles.some((role: any) =>
      RolesMapper.hasOwnProperty(routeName)
        ? RolesMapper[routeName].indexOf(role) >= 0
        : routeName.indexOf(role) >= 0,
    );
  }, [session?.user?.roles, router.route]);

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

  if (!authorization && !withoutLayout) {
    return (
      <div className="not-auth">
        Bu Sayfayı Görmeye Yetkiniz Yoktur
        <br />
        <br />
        Lütfen yöneticinize başvurunuz.
        <br />
        Yetkiniz yeni tanımlandıysa çıkış yapıp tekrar deneyiniz.
        <br />
        <br />
        <Button onClick={() => router.replace('/')}>Geri</Button>
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
        <PageLayout user={session?.user}>
          <Component {...pageProps} />
        </PageLayout>
      )}
    </div>
  );
};

export default MyApp;
