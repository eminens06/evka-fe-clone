import { ajax } from 'rxjs/ajax';

import { Observable } from 'rxjs';
import settings from '../../../settings';

export const REFRESH_TOKEN = `mutation RefreshToken($refreshToken: String!) {
  refreshToken(input: { refreshToken: $refreshToken }) {
		token
    payload
  }
}`;

export const apiRefreshToken = (refreshToken: string): Observable<any> =>
  ajax.post(
    settings.apiUrl,
    {
      query: REFRESH_TOKEN,
      variables: {
        refreshToken,
      },
    },
    {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  );
