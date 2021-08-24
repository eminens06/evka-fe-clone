import React, { FC, useMemo, useState } from 'react';
import { Table as AntTable, Typography } from 'antd';
import {
  ColumnsType,
  TablePaginationConfig,
  TableProps as AntdTableProps,
} from 'antd/lib/table';
import { DataSource } from './types';
import settings from '../settings';
import { OrderTypes } from '../modules/orders/types';
import { RowClass } from '../modules/production/types';
import { ExportTableButton } from 'ant-table-extensions';
import { FileExcelOutlined } from '@ant-design/icons';
import moment from 'moment';

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
  scroll?: { y: number };
  exportFormatter?: any;
  fileName?: string;
  preventExport?: boolean;
}

const Table: FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(settings.pageSize);

  const changePagination = (page: number, pgSize?: number) => {
    setCurrentPage(page);
    if (pgSize) setPageSize(pgSize);
  };

  const fileName = useMemo(() => {
    const main = props.fileName || 'tablo';
    return `${main}_${moment().format('DD-MM-YYYY')}`;
  }, [props.fileName]);

  const exportableDataSource = useMemo(() => {
    if (props.exportFormatter) {
      return props.exportFormatter(props.dataSource);
    }
    return props.dataSource;
  }, [props.dataSource, props.exportFormatter]);

  return (
    <>
      {!props.preventExport && (
        <ExportTableButton
          dataSource={exportableDataSource}
          columns={props.columns}
          fileName={fileName}
          btnProps={{ type: 'primary', icon: <FileExcelOutlined /> }}
        >
          İndir
        </ExportTableButton>
      )}
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
        style={{ marginTop: 10 }}
        rowClassName={(record: { orderType: OrderTypes }) => {
          return RowClass[record.orderType];
        }}
      />
    </>
  );
};

export default Table;
