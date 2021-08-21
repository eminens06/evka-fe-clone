import { message, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import Table from '../../molecules/Table';
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

const ListPackaging: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const openModal = () => {
    setIsModalVisible(true);
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
    forceFetchQuery({
      search: value,
    });
  };

  const [
    changeStatus,
  ] = useMutation<PackagingRelayChangePackagingStatusMutation>(CHANGE_STATUS, {
    onError: (error: any) => {
      closeLoader();
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Durum Başarıyla Güncellendi');
      forceFetchQuery({
        search: '',
      });
      setIsModalVisible(false);
    },
  });

  const onChangeStatus = () => {
    if (modalData) {
      openLoader();
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
        {loader}
      </div>
    </PageContent>
  );
};

export default ListPackaging;
