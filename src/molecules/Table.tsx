import React, { FC, useState } from 'react';
import { Table as AntTable, Typography } from 'antd';
import {
  ColumnsType,
  TablePaginationConfig,
  TableProps as AntdTableProps,
} from 'antd/lib/table';
import { DataSource } from './types';
import settings from '../settings';

const { Title } = Typography;

type Columns = ColumnsType<Record<string, any>>;

interface Props {
  expandable?: any;
  rowSelection?: any;
  onRow?: any;
  columns: Columns;
  dataSource: DataSource;
  rowKey?: string;
  loading?: boolean;
  pagination: TablePaginationConfig;
}

const Table: FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(settings.pageSize);

  const changePagination = (page: number, pgSize?: number) => {
    setCurrentPage(page);
    if (pgSize) setPageSize(pgSize);
  };

  return (
    <AntTable
      {...props}
      key={props.rowKey}
      pagination={{
        ...props.pagination,
        defaultCurrent: 1,
        current: currentPage,
        pageSize,
        onChange: changePagination,
        pageSizeOptions: settings.pageSizeOptions,
      }}
    />
  );
};

export default Table;
