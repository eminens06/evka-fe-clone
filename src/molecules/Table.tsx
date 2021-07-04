import React, { FC, ReactChild } from 'react';
import { Card, Table as AntTable, Typography } from 'antd';
import {
  ColumnsType,
  TablePaginationConfig,
  TableProps as AntdTableProps,
} from 'antd/lib/table';

const { Title } = Typography;

type Columns = ColumnsType<Record<string, any>>;

interface Props {
  onRow: any;
  columns: Columns;
  dataSource: DataSource;
  rowKey?: string;
  loading?: boolean;
  pagination: TablePaginationConfig;
}

const Table: FC<Props> = (props) => {
  return <AntTable {...props} />;
};

export default Table;
