import React, { FunctionComponent } from 'react';
import { Table } from 'antd';
import { productSales } from './data';
import Text from 'antd/lib/typography/Text';

const { Summary } = Table;

interface Props {
  data?: any[];
}

const columns = [
  {
    title: 'Satış Tarihi',
    dataIndex: 'orderDate',
    key: 'orderDate',
  },
  {
    title: 'Sevk Tarihi',
    dataIndex: 'shipmentOrderDate',
    key: 'shipmentOrderDate',
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
    dataIndex: 'shipmentCompanyName',
    key: 'shipmentCompanyName',
  },
];

const ProductSalesTable: FunctionComponent<Props> = ({ data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      summary={(pageData) => {
        let totalCount = 0;
        let total = 0;

        pageData.forEach(({ price, count }) => {
          total += Number(price);
          totalCount += count;
        });

        return (
          <>
            <Summary.Row>
              <Summary.Cell index={1}>Toplam</Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={1}></Summary.Cell>
              <Summary.Cell index={4}>
                <Text strong type="danger">
                  {totalCount}
                </Text>
              </Summary.Cell>
              <Summary.Cell index={5}>
                <Text strong type="danger">
                  {total.toFixed(2)}
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
