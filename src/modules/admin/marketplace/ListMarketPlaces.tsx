import { Button, Form, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useState } from 'react';
import PageContent from '../../../layout/PageContent';
import TableFilter from '../../../molecules/TableFilter';
import GET_MARKETPLACES, {
  MarketplaceRelayGetMarketplacesQuery,
} from '../../../__generated__/MarketplaceRelayGetMarketplacesQuery.graphql';
import useFetchTablePagination from '../../../hooks/useFetchTableData';
import AddEditCard from '../../common/AddEditCard';
import MarketPlaceForm from './MarketPlaceForm';
import Table from '../../../molecules/Table';

const columns = [
  {
    key: 'name',
    title: 'Pazaryeri Adı',
    dataIndex: 'name',
  },
  {
    key: 'commissionRate',
    title: 'Komisyon Oranı (%)',
    dataIndex: 'commissionRate',
  },
  {
    key: 'deliveryDate',
    title: 'Teslim Süresi',
    dataIndex: 'deliveryDate',
  },
];

const ListMarketPlaces: FunctionComponent = () => {
  const [modalData, setModalData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [search, setSearch] = useState('');

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<MarketplaceRelayGetMarketplacesQuery>(
    GET_MARKETPLACES,
    {
      search: '',
    },
  );

  const onSearch = (value: string) => {
    setSearch(value);
    forceFetchQuery({
      search: value,
    });
  };

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const addNewUser = () => {
    setModalData(undefined);
    openModal();
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Admin', 'Pazaryeri']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Pazaryerleri</Typography.Title>
          <Button type="primary" onClick={addNewUser} icon={<PlusOutlined />}>
            Ekle
          </Button>
        </div>
        <Table
          onRow={(record, rowIndex) => {
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
        <AddEditCard
          isVisible={isModalVisible}
          closeModal={closeModal}
          header="Pazaryeri Bilgileri"
          form={form}
        >
          <MarketPlaceForm
            initialValues={modalData}
            form={form}
            onSuccess={() => onSearch(search)}
          />
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ListMarketPlaces;
