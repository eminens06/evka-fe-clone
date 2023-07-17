import { Form, message, Typography } from 'antd';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import MultiProductDisplayer from '../../molecules/MultiProductDisplayer';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import GET_KDV_VALUES, {
  ShipmentInvoiceRelayGetSystemParametersQuery,
} from '../../__generated__/ShipmentInvoiceRelayGetSystemParametersQuery.graphql';
import INVOICE_MUTATION, {
  ShipmentInvoiceRelayInvoiceMutation,
} from '../../__generated__/ShipmentInvoiceRelayInvoiceMutation.graphql';
import GET_INVOICE_LIST, {
  ShipmentInvoiceRelayInvoiceQuery,
} from '../../__generated__/ShipmentInvoiceRelayInvoiceQuery.graphql';
import AddEditCard from '../common/AddEditCard';
import { OrderProduct } from '../orders/types';
import InvoiceDetails from './invoiceDetails';
import { Invoice as InvoiceType, KdvParams } from './types';
import moment from 'moment';

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
    defaultSortOrder: 'ascend',
    sorter: {
      compare: (a, b) => a.orderId - b.orderId,
    },
    sortDirections: ['descend', 'ascend'],
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
    key: 'customer',
    title: 'Müşteri Adı',
    dataIndex: 'customer',
    sorter: {
      compare: (a, b) => a.customer.localeCompare(b.customer),
    },
    sortDirections: ['descend', 'ascend'],
    defaultSortOrder: 'ascend',
  },
  {
    key: 'marketplace',
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
    sorter: {
      compare: (a, b) => a.marketplace.localeCompare(b.marketplace),
    },
    sortDirections: ['descend', 'ascend'],
    defaultSortOrder: 'ascend',
  },
  {
    key: 'shipmentOrderDate',
    title: 'Sevk Tarihi',
    dataIndex: 'shipmentOrderDate',
    sorter: {
      compare: (a, b) =>
        moment(a.shipmentOrderDate, 'DD-MM-YYYY').diff(moment(b.shipmentOrderDate, 'DD-MM-YYYY')),
    },
    sortDirections: ['descend', 'ascend'],
    defaultSortOrder: 'descend',
  },
  {
    key: 'shipmentCompany',
    title: 'Sevkiyat Firması',
    dataIndex: 'shipmentCompany',
    sorter: {
      compare: (a, b) => a.shipmentCompany.localeCompare(b.shipmentCompany),
    },
    sortDirections: ['descend', 'ascend'],
    defaultSortOrder: 'ascend',
  },
];

function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function parseDate(str) {
  var mdy = str.split('-');
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

const Invoice: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<InvoiceType>();
  const [kdvParams, setKdvParams] = useState<KdvParams>();
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [search, setSearch] = useState('');

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const [completeInvoice] = useMutation<ShipmentInvoiceRelayInvoiceMutation>(
    INVOICE_MUTATION,
    {
      onError: (error: any) => {
        closeLoader();
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Fatura başarıyla oluşturuldu');
        forceFetchQuery({ search });
        setIsModalVisible(false);
        setModalData(undefined);
      },
    },
  );

  const systemParams = useFetchTablePagination<ShipmentInvoiceRelayGetSystemParametersQuery>(
    GET_KDV_VALUES,
    {
      search: '',
    },
  );

  useEffect(() => {
    if (systemParams.data && systemParams.data.length > 0) {
      setKdvParams(systemParams.data[0].otherParams);
    }
  }, [systemParams.data]);

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ShipmentInvoiceRelayInvoiceQuery>(
    GET_INVOICE_LIST,
    {
      search: '',
    },
    mappers.invoiceMapper,
  );

  const onTableClick = (data: InvoiceType) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    setSearch(value);
    forceFetchQuery({
      search: value,
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onFormFinish = (values: any) => {
    if (modalData) {
      openLoader();
      completeInvoice({
        variables: {
          input: {
            ...values,
            userOrderId: modalData.id,
            invoiceDate: values.invoiceDate.toDate(),
          },
        },
      });
    }
  };

  const onChange: TableProps<DataType>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <PageContent header={['Sevkiyat Fatura', 'Fatura İrsaliye']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Fatura/İrsaliye Listesi</Typography.Title>
        </div>
        <Table
          onChange={onChange}
          onRow={(record: InvoiceType) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          fileName="fatura_listesi"
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading || systemParams.isLoading}
          pagination={{
            total: size,
          }}
        />
        {modalData && (
          <AddEditCard
            isVisible={isModalVisible}
            closeModal={closeModal}
            header="Sevk Bilgileri"
            form={form}
          >
            <InvoiceDetails
              form={form}
              onSubmit={onFormFinish}
              modalData={modalData}
              kdvDetails={kdvParams}
            />
          </AddEditCard>
        )}
        {loader}
      </div>
    </PageContent>
  );
};

export default Invoice;
