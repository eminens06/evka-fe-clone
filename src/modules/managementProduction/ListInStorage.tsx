import React, { FunctionComponent } from 'react';
import mappers from '../../mappers';
import Table from '../../molecules/Table';

const columns = [
  {
    key: 'location',
    title: 'Yeri',
    dataIndex: 'location',
  },
  {
    key: 'count',
    title: 'Adet',
    dataIndex: 'count',
  },
  {
    key: 'missingParts',
    title: 'Eksik Parçalar',
    dataIndex: 'missingParts',
  },
];

interface Props {
  data: any[];
  setSelectedRow: any;
}

const ListInStorage: FunctionComponent<Props> = ({ data, setSelectedRow }) => {
  return (
    <div>
      <Table
        rowSelection={{
          type: 'radio',
          onChange: (selected: any) => {
            setSelectedRow(selected);
          },
        }}
        preventExport
        columns={columns}
        dataSource={mappers.genericTableDataMapper(data)}
        rowKey="id"
        loading={false}
        pagination={{
          total: data.length || 0,
        }}
        scroll={{ y: 300 }}
      />
    </div>
  );
};

export default ListInStorage;
