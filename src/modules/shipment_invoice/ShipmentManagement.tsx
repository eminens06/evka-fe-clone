import { Button, Form, Row, Tooltip, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { CaretRightOutlined, WarningOutlined } from '@ant-design/icons';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import { ShipmentManagementData } from './types';
import { dummyManagmentData } from './helpers';
import TableProductDetail from '../../molecules/TableProductDetail';
import Table from '../../molecules/Table';
import AddEditCard from '../common/AddEditCard';
import ShipmentSelectorForm from './ShipmentSelectorForm';

const isLoading = false;
const size = 10;

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

  /* const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<UsersRelayGetAllUsersQuery>(
    GET_USERS,
    {
      search: '',
    },
    mappers.userMapper,
  ); */

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const addNewUser = () => {
    openModal();
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
          rowSelection={rowSelection}
          expandable={expandable}
          columns={columns}
          dataSource={dummyManagmentData}
          rowKey="orderId"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
        <AddEditCard
          isVisible={isModalVisible}
          closeModal={closeModal}
          header="Sevk Bilgileri"
          form={form}
        >
          <ShipmentSelectorForm
            form={form}
            onSuccess={() => onSearch('')}
            modalData={selected}
          />
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ShipmentManagement;
