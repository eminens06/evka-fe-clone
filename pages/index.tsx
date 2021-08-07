import { NextPage } from 'next';
import React from 'react';
import Kiosk from './kiosk';
import { loadSession } from '../src/modules/auth/utils/session.utils';
import { useRouter } from 'next/router';

const App: NextPage = (props: any) => {
  const session = loadSession();
  const router = useRouter();
  const roles = session?.user.roles;
  if (roles && !roles.includes('admin')) {
    router.push(roles[0]);
    return null;
  }
  if (!roles) {
    return null;
  }
  return <Kiosk />;
};

export default App;
