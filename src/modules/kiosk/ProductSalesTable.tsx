import React, { FunctionComponent } from 'react';
import { Table } from 'antd';
import { productSales } from './data';
import Text from 'antd/lib/typography/Text';

const { Summary } = Table;

const columns = [
  {
    title: 'Satış Tarihi',
    dataIndex: 'saleDate',
    key: 'saleDate',
  },
  {
    title: 'Sevk Tarihi',
    dataIndex: 'shipmentDate',
    key: 'shipmentDate',
  },
  {
    title: 'Adı',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
    key: 'marketplace',
  },
  {
    title: 'Adet',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'Fiyat',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Nakliyat',
    dataIndex: 'cargoName',
    key: 'cargoName',
  },
];

const ProductSalesTable: FunctionComponent = () => {
  return (
    <Table
      columns={columns}
      dataSource={productSales}
      summary={(pageData) => {
        let total = 0;

        pageData.forEach(({ price }) => {
          total += Number(price);
        });

        return (
          <>
            <Summary.Row>
              <Summary.Cell index={1}>Toplam</Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={5}>
                <Text strong type="danger">
                  {total}
                </Text>
              </Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
            </Summary.Row>
          </>
        );
      }}
    />
  );
};

export default ProductSalesTable;
