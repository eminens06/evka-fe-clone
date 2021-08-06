import { Button, Row, Tooltip, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { CaretRightOutlined, WarningOutlined } from '@ant-design/icons';
import PageContent from '../../layout/PageContent';
import TableFilter from '../../molecules/TableFilter';
import { ShipmentManagementData } from './types';
import { dummyManagmentData } from './helpers';
import TableProductDetail from '../../molecules/TableProductDetail';
import Table from '../../molecules/Table';

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

  const sendShipment = () => {
    console.log('Send shipment');
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
      </div>
    </PageContent>
  );
};

export default ShipmentManagement;
