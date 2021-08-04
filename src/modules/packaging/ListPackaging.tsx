import { message, Table, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import TableFilter from '../../molecules/TableFilter';
import GET_PACKAGE_LIST, {
  PackagingRelayallProductOrdersQuery,
} from '../../__generated__/PackagingRelayallProductOrdersQuery.graphql';
import CHANGE_STATUS, {
  PackagingRelayChangePackagingStatusMutation,
} from '../../__generated__/PackagingRelayChangePackagingStatusMutation.graphql';
import StatusModal from '../common/StatusModal';
import { packagingColumns, statusArray, statusNextButtonText } from './helpers';
import PackagingDetail from './PackagingDetail';
import { PackageStatus, PackagingTableData } from './types';

const dummyData: PackagingTableData[] = [
  {
    orderId: '1',
    productName: 'asd',
    remainingDate: '15',
    isCollectable: true,
    status: PackageStatus.READY,
    packageCount: 5,
    isMonte: true,
  },
];

const ListPackaging: FunctionComponent = () => {
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const changePagination = (page: number) => {
    setPage(page);
  };

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<PackagingRelayallProductOrdersQuery>(
    GET_PACKAGE_LIST,
    {
      search: '',
    },
    mappers.packagingListMapper,
  );

  const onTableClick = (data: any) => {
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const [
    changeStatus,
  ] = useMutation<PackagingRelayChangePackagingStatusMutation>(CHANGE_STATUS, {
    onError: (error: any) => {
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      console.log(res);
      message.success('Durum Başarıyla Güncellendi');
      forceFetchQuery({
        search: '',
      });
      setIsModalVisible(false);
    },
  });

  const onChangeStatus = () => {
    if (modalData) {
      const input = {
        productOrderId: modalData.id,
      };
      changeStatus({
        variables: {
          input,
        },
      });
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Toplama/Paketleme']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Toplama/Paketleme</Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={packagingColumns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
            defaultCurrent: 1,
            current: page,
            onChange: (page, pageSize) => changePagination(page),
          }}
        />
        {modalData && (
          <StatusModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            onChangeStatus={onChangeStatus}
            modalData={modalData}
            header="Parça Bilgileri"
            progressSteps={statusArray}
            saveTextArray={statusNextButtonText}
          >
            <PackagingDetail
              productName={modalData.productName}
              isMonte={modalData.isMonte}
              packageCount={modalData.packageCount}
            />
          </StatusModal>
        )}
      </div>
    </PageContent>
  );
};

export default ListPackaging;
