import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime';
import { ajax } from 'rxjs/ajax';
import { saveSession } from '../modules/auth/utils/session.utils';
import settings from '../settings';
import { getOrRefreshToken } from '../modules/auth/utils/session.utils';

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

async function fetchQuery(
  operation: any,
  variables: any,
  cacheConfig: any,
  uploadables: any,
): Promise<any> {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;
  const fromCache = cache.get(queryID, variables);
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  let body;
  const headers: any = {
    Accept: 'application/json',
  };
  let token;
  try {
    token = await getOrRefreshToken();
  } catch (err) {
    token = null;
  }
  if (token) {
    headers['Authorization'] = `JWT ${token}`;
  }
  if (uploadables) {
    if (!window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.');
    }

    const formData = new FormData();
    formData.append('query', operation.text);
    formData.append('variables', JSON.stringify(variables));

    Object.entries(uploadables).forEach(([key, uploadable]: any) => {
      formData.append(key, uploadable);
    });

    body = formData;
  } else {
    headers['Content-Type'] = 'application/json';
    body = {
      query: operation.text,
      variables,
    };
  }
  return ajax
    .post(settings.apiUrl, body, headers)
    .toPromise()
    .then((response: any) => {
      if (response.status !== 200) {
        throw Error(`Network error ${response.status}`);
      }
      if (isQuery && response.response) {
        cache.set(queryID, variables, response.response);
      }
      // Clear cache on mutations
      if (isMutation) {
        cache.clear();
      }
      if (response.response && response.response.errors) {
        throw new Error(response.response.errors[0].message);
      }
      if (response.response && response.response.data.tokenAuth) {
        const { tokenAuth } = response.response.data;
        saveSession(tokenAuth.user, tokenAuth.token, tokenAuth.refreshToken);
      }
      return response.response;
    })
    .catch((err) => {
      throw err;
    });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

export function clearCache(): void {
  cache.clear();
}

export default new Environment({
  network,
  store,
}) as any;
