import { Button, Col, Form, Row, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { FunctionComponent, useMemo, useState } from 'react';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import TableFilter from '../../molecules/TableFilter';
import GET_METADATA, {
  MetadataRelayAllMetadataQuery,
} from '../../__generated__/MetadataRelayAllMetadataQuery.graphql';
import { Metadata, MetadataType, MetaWorkshopType } from './types';
import AddEditCard from '../common/AddEditCard';
import { SingleSelect } from '../../atoms';
import MetadataForm from './MetadataForm';
import Table from '../../molecules/Table';

export const MetadataText: Record<MetadataType, string> = {
  [MetadataType.CT]: 'Kategori',
  [MetadataType.CA]: 'Alt Kategori',
  [MetadataType.AY]: 'Ayak Renk',
  [MetadataType.TB]: 'Tabla',
};

export const CategoryOptions = [
  {
    value: MetadataType.CT,
    text: 'Kategori',
  },
  {
    value: MetadataType.CA,
    text: 'Alt Kategori',
  },
  {
    value: MetadataType.AY,
    text: 'Ayak Renk',
  },
  {
    value: MetadataType.TB,
    text: 'Tabla',
  },
];

export const WorkshopOptions = [
  {
    value: MetaWorkshopType.MT,
    text: 'Metal',
  },
  {
    value: MetaWorkshopType.WD,
    text: 'Ahşap',
  },
  {
    value: MetaWorkshopType.DF,
    text: 'Yok',
  },
];

export interface MetadataFormProps extends Metadata {
  category: MetadataType;
  metaType?: MetaWorkshopType;
  paintType?: MetaWorkshopType;
}

const ListMetadata: FunctionComponent = () => {
  const [category, setCategory] = useState<MetadataType>(MetadataType.CA);
  const [modalData, setModalData] = useState<MetadataFormProps>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const columns = useMemo(() => {
    if (category === MetadataType.AY || category === MetadataType.TB) {
      return [
        {
          key: 'material',
          title: MetadataText[category],
          dataIndex: 'material',
        },
        {
          key: 'number',
          title: 'No',
          dataIndex: 'number',
        },
        {
          key: 'paintType',
          title: 'Boya Tipi',
          dataIndex: 'paintType',
        },
        {
          key: 'metaType',
          title: 'Atölye Tipi',
          dataIndex: 'materialType',
        },
      ];
    }
    return [
      {
        key: 'material',
        title: MetadataText[category],
        dataIndex: 'material',
      },
      {
        key: 'number',
        title: 'No',
        dataIndex: 'number',
      },
    ];
  }, [category]);

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<MetadataRelayAllMetadataQuery>(
    GET_METADATA,
    {
      search: '',
      category,
    },
    mappers.metadataMapper,
  );

  const onSearch = (value: string) => {
    forceFetchQuery({
      search: value,
      category,
    });
  };

  const onTableClick = (data: Metadata) => {
    setModalData({ ...data, category });
    openModal();
  };

  const addNewMetadata = () => {
    setModalData(undefined);
    openModal();
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <PageContent header={['Admin', 'Metadata']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>Metadata Listesi</Typography.Title>
          <Row gutter={24}>
            <Col>
              <SingleSelect
                options={CategoryOptions}
                defaultValue={category}
                onChange={(value: MetadataType) => setCategory(value)}
              />
            </Col>
            <Col>
              <Button
                type="primary"
                onClick={addNewMetadata}
                icon={<PlusOutlined />}
              >
                Ekle
              </Button>
            </Col>
          </Row>
        </div>
        <Table
          onRow={(record: Metadata, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          dataSource={data}
          rowKey="name"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />
        <AddEditCard
          isVisible={isModalVisible}
          closeModal={closeModal}
          header="Metadata Bilgileri"
          form={form}
        >
          <MetadataForm
            initialValues={modalData}
            form={form}
            onSuccess={() => onSearch('')}
          />
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ListMetadata;
