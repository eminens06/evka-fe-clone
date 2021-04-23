import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime';

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });
export function clearCache(): void {
  cache.clear();
}
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
  // console.log('operation', operation, variables, cacheConfig);
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  let body;
  const headers: any = {
    Accept: 'application/json',
  };

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

  return fetch('https://audio-book-be-kttmv.ondigitalocean.app/graphql/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log({ err }));
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

export default new Environment({
  network,
  store,
}) as any;
