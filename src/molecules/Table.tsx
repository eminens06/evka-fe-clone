import React, { FC, useEffect, useMemo, useState } from 'react';
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
import { FileExcelOutlined } from '@ant-design/icons';
import moment from 'moment';
import TableSort from './TableSort';
import ExportTableButton from './ExportTableButton';
import DropdownFilter from '../molecules/DropdownFilter';

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
  sortKeys?: Option[];
}

const Table: FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(settings.pageSize);
  const [sortedData, setSortedData] = useState<any>();
  const [initial, setInitial] = useState<any>();
  const [sort, setSort] = useState<string>();
  const [filteredType, setFilteredType] = useState<string>();

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

  const handleFilter = (value: string) => {
    setFilteredType(value);
    // let filtered = sortedData.filter(e => e.)
  };

  useEffect(() => {
    setSortedData(props.dataSource);
    setInitial([...props.dataSource]);
    if (props.sortKeys) {
      setSort(props.sortKeys[0].value);
    }
  }, [props.dataSource, props.sortKeys]);

  useEffect(() => {
    if (!sort) return;
    if (sort === 'remainingTime') {
      setSortedData(initial);
      return;
    }
    setSortedData((prev: any) => {
      const newData = prev.sort((a, b) => {
        if (typeof a[sort] === 'string') {
          if (sort.indexOf('Date') !== -1) {
            const value1 = a[sort].split('-').reverse().join('');
            const value2 = b[sort].split('-').reverse().join('');
            return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
          }
          const value1 = a[sort] as string;
          const value2 = b[sort] as string;
          if (!value1) return -1;
          return value1.localeCompare(value2);
        } else if (typeof a[sort] === 'number') {
          return a[sort] - b[sort];
        } else {
          return 0;
        }
      });
      return [...newData];
    });
  }, [sort]);

  const onSortChange = (value: any) => {
    setSort(value);
    changePagination(1);
  };

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
      {props.sortKeys && sort && (
        <TableSort
          onChange={onSortChange}
          options={props.sortKeys}
          value={sort}
        />
      )}
      <AntTable
        {...props}
        dataSource={sortedData}
        sortDirections={['ascend']}
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
