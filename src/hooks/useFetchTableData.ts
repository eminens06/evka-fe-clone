import { useMemo } from 'react';
import { STORE_OR_NETWORK, useQuery } from 'relay-hooks';
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

  const tableData = useMemo(() => {
    if (customMapper) {
      return customMapper(mappers.genericTableDataMapper(data));
    }
    return mappers.genericTableDataMapper(data);
  }, [data]);

  return {
    data: tableData,
    isLoading,
    size: tableData.length,
  };
}

export default useFetchTablePagination;
