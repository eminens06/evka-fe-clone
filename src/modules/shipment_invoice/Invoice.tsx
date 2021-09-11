import { Form, message, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import MultiProductDisplayer from '../../molecules/MultiProductDisplayer';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import INVOICE_MUTATION, {
  ShipmentInvoiceRelayInvoiceMutation,
} from '../../__generated__/ShipmentInvoiceRelayInvoiceMutation.graphql';
import GET_INVOICE_LIST, {
  ShipmentInvoiceRelayInvoiceQuery,
} from '../../__generated__/ShipmentInvoiceRelayInvoiceQuery.graphql';
import AddEditCard from '../common/AddEditCard';
import { OrderProduct } from '../orders/types';
import InvoiceDetails from './invoiceDetails';
import { Invoice as InvoiceType } from './types';

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
    key: 'customer',
    title: 'Müşteri Adı',
    dataIndex: 'customer',
  },
  {
    key: 'marketplace',
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'shipmentOrderDate',
    title: 'Sevk Tarihi',
    dataIndex: 'shipmentOrderDate',
  },
  {
    key: 'shipmentCompany',
    title: 'Sevkiyat Firması',
    dataIndex: 'shipmentCompany',
  },
];

const Invoice: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<InvoiceType>();
  const { loader, openLoader, closeLoader } = useFullPageLoader();

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
        forceFetchQuery({ search: '' });
        setIsModalVisible(false);
        setModalData(undefined);
      },
    },
  );

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

  return (
    <PageContent header={['Sevkiyat Fatura', 'Fatura İrsaliye']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Fatura/İrsaliye Listesi</Typography.Title>
        </div>
        <Table
          onRow={(record: InvoiceType) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          fileName="fatura_listesi"
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
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
            />
          </AddEditCard>
        )}
        {loader}
      </div>
    </PageContent>
  );
};

export default Invoice;
