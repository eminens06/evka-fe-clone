import { message, Row, Tooltip, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import mappers from '../../mappers';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import settings from '../../settings';
import { Oem, OemFormData } from './types';
import GET_OEM_LIST, {
  OemRelayGetListQuery,
} from '../../__generated__/OemRelayGetListQuery.graphql';
import OemModal from './OemModal';
import APPROVE_OEM, {
  OemRelayApproveMutation,
} from '../../__generated__/OemRelayApproveMutation.graphql';
import { useMutation } from 'relay-hooks';

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
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'productName',
    title: 'Ürün Adı',
    dataIndex: 'productName',
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
];

const ListOem: FunctionComponent = () => {
  const openModal = () => {
    setIsModalVisible(true);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<Oem>();
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [search, setSearch] = useState('');

  const [approveOem] = useMutation<OemRelayApproveMutation>(APPROVE_OEM, {
    onError: (error: any) => {
      closeLoader();
      message.error(
        'Hata! ',
        error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
      );
    },
    onCompleted: (res) => {
      closeLoader();
      forceFetchQuery({
        search,
      });
      message.success('Başarıyla Onaylandı');
      closeModal();
    },
  });

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<OemRelayGetListQuery>(
    GET_OEM_LIST,
    {
      search: '',
    },
    mappers.oemMapper,
  );

  const onTableClick = (data: any) => {
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
    setModalData(undefined);
  };

  const onApprove = (data: OemFormData) => {
    openLoader();
    approveOem({
      variables: {
        input: {
          ...data,
        },
      },
    });
  };

  return (
    <PageContent header={['Al - Sat']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>
            Al - Sat Onayı Bekleyen Siparişler
          </Typography.Title>
        </div>
        <Table
          onRow={(record: any, rowIndex: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
        {modalData && (
          <OemModal
            modalData={modalData}
            onApprove={onApprove}
            isVisible={isModalVisible}
            closeModal={() => setIsModalVisible(false)}
          />
        )}
        {loader}
      </div>
    </PageContent>
  );
};

export default ListOem;
