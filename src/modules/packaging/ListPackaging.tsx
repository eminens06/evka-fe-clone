import { message, Typography } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import excelFormatter from '../../utils/excelFormatter';
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

  const [search, setSearch] = useState('');

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
    setSearch(value);
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
        search,
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
          onRow={(record: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          exportFormatter={excelFormatter.packaging}
          columns={packagingColumns}
          dataSource={data}
          fileName="paketleme"
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'productName', text: 'Ürün Adı' },
            { value: 'status', text: 'Paketleme Durumu' },
          ]}
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
              productId={modalData}
              status={modalData.status}
              productName={modalData.productName}
              marketplaceOrderId={modalData.id}
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
