import { Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import excelFormatter from '../../utils/excelFormatter';
import GET_PRODUCTION_SUMMARY, {
  ProductionRelaySummaryQuery,
} from '../../__generated__/ProductionRelaySummaryQuery.graphql';
import { summaryColumns } from './helpers';

const ProductionSummary: FunctionComponent = () => {
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
          exportFormatter={excelFormatter.productionSummary}
          fileName="uretim_ozeti"
          columns={summaryColumns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'productName', text: 'Ürün Adı' },
            { value: 'tablaStatus', text: 'Tabla Durumu' },
            { value: 'ayakStatus', text: 'Ayak Durumu' },
          ]}
        />
      </div>
    </PageContent>
  );
};

export default ProductionSummary;
