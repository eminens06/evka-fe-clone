import { Table, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import TableFilter from '../../molecules/TableFilter';
import GET_PRODUCTION_SUMMARY, {
  ProductionRelaySummaryQuery,
} from '../../__generated__/ProductionRelaySummaryQuery.graphql';
import { summaryColumns } from './helpers';

const ProductionSummary: FunctionComponent = () => {
  const [page, setPage] = useState(1);

  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ProductionRelaySummaryQuery>(
    GET_PRODUCTION_SUMMARY,
    {},
    mappers.productionSummaryMapper,
  );

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  return (
    <PageContent header={['Üretim', 'Üretim Özeti']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Üretim Özeti</Typography.Title>
        </div>
        <Table
          columns={summaryColumns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
            defaultCurrent: 1,
            current: page,
            onChange: (page, pageSize) => changePagination(page),
          }}
        />
      </div>
    </PageContent>
  );
};

export default ProductionSummary;
