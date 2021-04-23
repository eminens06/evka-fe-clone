import { FunctionComponent, useEffect, useState } from 'react';
import LoadingIndicator from '../../common/loading-indicator';
import { loadSession, isTokenExpired } from '../utils/session.utils';
import Redirecting from '../sign-in/SignInForm.component';
import { useRouter } from 'next/router';
import { getOrRefreshToken } from '../utils/session.utils';
import { Routes } from '../../utils/routes';
import useAuthState from '../utils/UseAuthState.hook';

interface Props {
  children: any;
}

const AuthInit: FunctionComponent<Props> = props => {
  const { children } = props;
  // const [authState, setAuthState] = useState('unsure');
  const session = loadSession();
  const authState = useAuthState(session);

  if (authState === 'authenticated') {
    return children;
  }
  if (authState === 'unsure') {
    return <LoadingIndicator loading msg="Authenticating" />;
  }
  if (authState === 'not-authenticated') {
    return <Redirecting />;
  }
  return null;
};

export default AuthInit;
