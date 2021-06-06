import { FunctionComponent, useEffect, useState } from 'react';
import { loadSession, isTokenExpired } from '../utils/session.utils';
import Redirecting from '../sign-in/SignInForm.component';
import useAuthState from '../utils/UseAuthState.hook';

interface Props {
  children: any;
}

const AuthInit: FunctionComponent<Props> = (props) => {
  const { children } = props;
  // const [authState, setAuthState] = useState('unsure');
  const session = loadSession();
  const authState = useAuthState(session);

  if (authState === 'authenticated') {
    return children;
  }
  if (authState === 'unsure') {
    return <div>Loading</div>;
  }
  if (authState === 'not-authenticated') {
    return <Redirecting />;
  }
  return null;
};

export default AuthInit;
