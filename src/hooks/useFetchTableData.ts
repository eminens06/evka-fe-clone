import { useEffect, useMemo, useState } from 'react';
import {
  STORE_OR_NETWORK,
  useQuery,
  useRelayEnvironment,
  fetchQuery,
} from 'relay-hooks';
import { ConcreteRequest, OperationType } from 'relay-runtime';
import mappers from '../mappers';

function useFetchTablePagination<
  TOperationType extends OperationType = OperationType
>(
  gqlQuery: ConcreteRequest,
  variables: any,
  customMapper?: (arr: any[]) => any[],
) {
  const { data, isLoading } = useQuery<TOperationType>(gqlQuery, variables, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const environment = useRelayEnvironment();

  const forceFetchQuery = async (queryParams: any) => {
    setLoading(true);
    const res = await fetchQuery<TOperationType>(
      environment,
      gqlQuery,
      queryParams,
    );

    if (customMapper) {
      setLoading(false);
      setTableData(customMapper(mappers.genericTableDataMapper(res)));
    } else {
      setLoading(false);
      setTableData(mappers.genericTableDataMapper(res));
    }
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (customMapper) {
      setTableData(customMapper(mappers.genericTableDataMapper(data)));
    } else {
      setTableData(mappers.genericTableDataMapper(data));
    }
  }, [data]);

  return {
    data: tableData,
    isLoading: loading,
    size: 0,
    forceFetchQuery,
  };
}

export default useFetchTablePagination;
