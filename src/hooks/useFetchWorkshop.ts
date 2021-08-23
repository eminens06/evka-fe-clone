import { useEffect, useState } from 'react';
import {
  STORE_OR_NETWORK,
  useQuery,
  useRelayEnvironment,
  fetchQuery,
} from 'relay-hooks';
import mappers from '../mappers';
import { ModuleType } from '../modules/admin/externalService/types';
import { WorkshopTypes } from '../modules/production/types';
import GET_WORKSHOP_DATA, {
  ProductionRelayWorkshopQuery,
  ProductionRelayWorkshopQueryResponse,
} from '../__generated__/ProductionRelayWorkshopQuery.graphql';

function useFetchWorkShop(
  workshopType: WorkshopTypes,
  moduleType?: ModuleType,
) {
  const { data, isLoading } = useQuery<ProductionRelayWorkshopQuery>(
    GET_WORKSHOP_DATA,
    { workshopType },
    {
      fetchPolicy: STORE_OR_NETWORK,
    },
  );

  const [tableData, setTableData] = useState<
    ProductionRelayWorkshopQueryResponse[]
  >([]);
  const [loading, setLoading] = useState(false);

  const environment = useRelayEnvironment();

  const forceFetchQuery = async (search?: string) => {
    setLoading(true);
    const res = await fetchQuery<ProductionRelayWorkshopQuery>(
      environment,
      GET_WORKSHOP_DATA,
      {
        workshopType,
        search,
      },
    );
    setLoading(false);
    setTableData(
      mappers.productionWorkshopMapper(res, workshopType, moduleType),
    );
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (data) {
      setTableData(
        mappers.productionWorkshopMapper(data, workshopType, moduleType),
      );
    }
  }, [data]);

  return {
    data: tableData,
    isLoading: loading,
    size: tableData.length,
    forceFetchQuery,
  };
}

export default useFetchWorkShop;
