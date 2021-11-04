import { Button, Form, message, Row, Tooltip, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { CaretRightOutlined, WarningOutlined } from '@ant-design/icons';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import { ShipmentFormTypes, ShipmentManagementData } from './types';
import TableProductDetail from '../../molecules/TableProductDetail';
import Table from '../../molecules/Table';
import AddEditCard from '../common/AddEditCard';
import ShipmentSelectorForm from './ShipmentSelectorForm';
import GET_ORDERS, {
  ShipmentInvoiceRelayGetAllUserOrdersQuery,
} from '../../__generated__/ShipmentInvoiceRelayGetAllUserOrdersQuery.graphql';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import CHANGE_STATUS, {
  ShipmentInvoiceRelayStatusChangeMutation,
} from '../../__generated__/ShipmentInvoiceRelayStatusChangeMutation.graphql';
import { useMutation } from 'relay-hooks';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import settings from '../../settings';

const expandable = {
  expandedRowRender: (record: ShipmentManagementData) => (
    <TableProductDetail values={record.tableProduct} />
  ),
  rowExpandable: () => true,
};

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
    render: (value: any, order: any) => {
      if (!order.completed) {
        return (
          <Row className="note">
            <Tooltip
              placement="topLeft"
              title="Üretim Tamamlanmadı"
              arrowPointAtCenter
            >
              <Typography.Text>{`${value}  `}</Typography.Text>
              <WarningOutlined />
            </Tooltip>
          </Row>
        );
      }
      return value;
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
    title: 'Müşteri Adı',
    dataIndex: 'customer',
  },
  {
    key: 'marketplace',
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'desi',
    title: 'Desi',
    dataIndex: 'desi',
  },
];

const ShipmentManagement: FunctionComponent = () => {
  const [selected, setSelected] = useState<ShipmentManagementData[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [search, setSearch] = useState('');

  const [form] = Form.useForm();

  const sendShipment = () => {
    openModal();
  };

  const rowSelection = {
    onChange: (
      selectedRowKeys: any,
      selectedRows: ShipmentManagementData[],
    ) => {
      setSelected(selectedRows);
    },
  };

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ShipmentInvoiceRelayGetAllUserOrdersQuery>(
    GET_ORDERS,
    {
      status: 'R',
    },
    mappers.shipmentManagementMapper,
  );

  const onSearch = (value: string) => {
    setSearch(value);
    forceFetchQuery({
      status: 'R',
      search: value,
    });
  };

  const [changeStatus] = useMutation<ShipmentInvoiceRelayStatusChangeMutation>(
    CHANGE_STATUS,
    {
      onError: (error: any) => {
        closeLoader();
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Durum Başarıyla Güncellendi');
        forceFetchQuery({
          search,
          status: 'R',
        });
        setIsModalVisible(false);
      },
    },
  );

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onChangeStatus = (values: ShipmentFormTypes) => {
    openLoader();
    const input = {
      userOrderIds: selected.map((order) => order.id),
      shipmentType: values.shipmentType,
      shipmentCompanyName: values.shipmentCompanyName,
    };
    changeStatus({
      variables: {
        input,
      },
    });
  };

  return (
    <PageContent header={['Sevkiyat/Fatura']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>
            Sevkiyata Hazır Siparişler
          </Typography.Title>
          <Button
            type="primary"
            disabled={!(selected && selected.length > 0)}
            onClick={sendShipment}
            icon={<CaretRightOutlined />}
          >
            Sevk Et
          </Button>
        </div>
        <Table
          fileName="sevkiyata_hazir"
          rowSelection={rowSelection}
          expandable={expandable}
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'marketplace', text: 'Pazaryeri' },
          ]}
        />
        <AddEditCard
          isVisible={isModalVisible}
          closeModal={closeModal}
          header="Sevk Bilgileri"
          form={form}
        >
          <ShipmentSelectorForm
            form={form}
            onSuccess={(values: ShipmentFormTypes) => onChangeStatus(values)}
            modalData={selected}
          />
        </AddEditCard>
        {loader}
      </div>
    </PageContent>
  );
};

export default ShipmentManagement;
