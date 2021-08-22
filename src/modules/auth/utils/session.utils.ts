import * as jwt from 'jsonwebtoken';
import { apiRefreshToken } from './refreshToken.utils';

export const saveSession = (
  user: User,
  token: string,
  refreshToken: string,
): Session => {
  const session = {
    user,
    token,
    refreshToken,
  };
  localStorage.setItem('session', JSON.stringify(session));
  return session;
};

export const loadSession = (): Session => {
  let session = null;
  if (process.browser) {
    const sessionJson = localStorage.getItem('session');
    if (sessionJson) {
      session = JSON.parse(sessionJson);
    }
  }
  return session;
};

export class TokenError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

export const isTokenExpired = (token: string): boolean => {
  const decoded: any = jwt.decode(token);
  if (!decoded) return true;
  const nowTime = Date.now() / 1000;
  if (nowTime + 60 < decoded.exp) {
    return false;
  }
  return true;
};

export const deleteSession = (): void => {
  localStorage.removeItem('session');
};

export async function getOrRefreshToken(): Promise<string | null> {
  const session = loadSession();

  if (session && session.token) {
    if (isTokenExpired(session.token)) {
      let response;
      try {
        response = await apiRefreshToken(session.refreshToken).toPromise();
      } catch (err) {
        throw new TokenError('SessionExpired', 'Session expired');
      }
      if (response && response.response.errors) {
        throw new TokenError('SessionExpired', 'Session expired');
      }
      const { token } = response.response.data.refreshToken;
      saveSession(session.user, token, session.refreshToken);
      return token;
    }
    return session.token;
  }
  return null;
}

export async function getUserRoles(): Promise<string[]> {
  const session = loadSession();
  if (session && session.token && session.user.roles) {
    return session.user.roles;
  }
  return [];
}
