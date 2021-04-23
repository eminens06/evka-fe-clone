import { useState, useEffect } from 'react';
import { isTokenExpired, getOrRefreshToken } from './session.utils';

const useAuthState = (session: any): string => {
  const [authState, setAuthState] = useState<string>('unsure');

  useEffect(() => {
    if (session && session.token) {
      if (!isTokenExpired(session.token)) {
        setAuthState('authenticated');
        return;
      }
      getOrRefreshToken()
        .then(() => {
          setAuthState('authenticated');
        })
        .catch(() => {
          setAuthState('not-authenticated');
        });
      return;
    }
    setAuthState('not-authenticated');
    return;
  }, [session]);

  return authState;
};

export default useAuthState;
