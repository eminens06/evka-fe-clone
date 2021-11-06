import { Typography } from 'antd';
import React, { FunctionComponent } from 'react';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import { InvoiceStatus, ShipmentStatus } from './types';
import Status from '../../atoms/Status';
import { InvoiceStatusMapper, ShipmentStatusMapper } from './helpers';
import Table from '../../molecules/Table';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import GET_SUMMARY_LIST, {
  ShipmentInvoiceRelaySummaryQuery,
} from '../../__generated__/ShipmentInvoiceRelaySummaryQuery.graphql';
import mappers from '../../mappers';
import { OrderProduct } from '../orders/types';
import MultiProductDisplayer from '../../molecules/MultiProductDisplayer';
import settings from '../../settings';
import excelFormatter from '../../utils/excelFormatter';

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
  },
  {
    key: 'products',
    title: 'Ürün(ler)',
    dataIndex: 'products',
    render: (products: OrderProduct[]) => {
      return <MultiProductDisplayer products={products} />;
    },
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
    render: (value: number) => {
      if (value <= settings.remainingTimeLevel) {
        return <Typography.Text type="danger">{value}</Typography.Text>;
      }
      return value;
    },
  },
  {
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
  {
    key: 'shipmentStatus',
    title: 'Sevk Durumu',
    dataIndex: 'shipmentStatus',
    render: (value: ShipmentStatus) => {
      const { text, status } = ShipmentStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
  {
    key: 'invoiceStatus',
    title: 'Fatura Durumu',
    dataIndex: 'invoiceStatus',
    render: (value: InvoiceStatus) => {
      const { text, status } = InvoiceStatusMapper[value];
      return <Status status={status} text={text} />;
    },
  },
];

const Summary: FunctionComponent = () => {
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ShipmentInvoiceRelaySummaryQuery>(
    GET_SUMMARY_LIST,
    {
      search: '',
    },
    mappers.shipmentInvoiceSummaryMapper,
  );

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  return (
    <PageContent header={['Sevkiyat/Fatura']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Sevkiyat / Fatura Özeti</Typography.Title>
        </div>
        <Table
          exportFormatter={excelFormatter.shipmentInvoice}
          fileName="sevkiyat_fatura_ozeti"
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'shipmentStatus', text: 'Sevk Durumu' },
            { value: 'invoiceStatus', text: 'Fatura Durumu' },
          ]}
        />
      </div>
    </PageContent>
  );
};

export default Summary;
