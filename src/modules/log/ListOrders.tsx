import { Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import GET_USER_ORDERS, {
  LogRelayGetOrderListQuery,
} from '../../__generated__/LogRelayGetOrderListQuery.graphql';
import LogDetailCard from './details';
import { OrderLogDetail } from './types';

const columns = [
  {
    key: 'orderId',
    title: 'Pazaryeri Sipariş No',
    dataIndex: 'orderId',
    render: (value: any, order: any) => {
      if (order.notes) {
        return (
          <Row className="note">
            <Tooltip placement="topLeft" title={order.notes} arrowPointAtCenter>
              <Typography.Text>{`${value}  `}</Typography.Text>
              <InfoCircleOutlined />
            </Tooltip>
          </Row>
        );
      }
      return value;
    },
  },
  {
    key: 'marketplace',
    title: 'Pazar Yeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'customer',
    title: 'Müşteri',
    dataIndex: 'customer',
  },
  {
    key: 'orderType',
    title: 'Sipariş Tipi',
    dataIndex: 'orderType',
  },
  {
    key: 'status',
    title: 'Durum',
    dataIndex: 'status',
  },
];

const ListOrders: FunctionComponent = () => {
  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<LogRelayGetOrderListQuery>(
    GET_USER_ORDERS,
    {
      search: '',
    },
    mappers.logListMapper,
  );

  const [modalData, setModalData] = useState<OrderLogDetail>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onTableClick = (record: any) => {
    setModalVisible(true);
    setModalData(record);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData(undefined);
  };

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
    });
  };

  return (
    <PageContent header={['Sipariş Geçmişi ve Loglar']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Sipariş Geçmişi</Typography.Title>
        </div>
        <Table
          onRow={(record: OrderLogDetail) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          fileName="log_siparisler"
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
        {modalData && (
          <LogDetailCard
            isVisible={modalVisible}
            closeModal={closeModal}
            data={modalData}
          />
        )}
      </div>
    </PageContent>
  );
};

export default ListOrders;
