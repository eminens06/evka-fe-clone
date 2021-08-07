import { Form, Typography, Row, Col, Input } from 'antd';
import React, { FunctionComponent, useMemo, useState } from 'react';
import PageContent from '../../layout/PageContent';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import AddEditCard from '../common/AddEditCard';
import { dummyShipmentData } from './helpers';

const size = 10;
const isLoading = false;

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş Id',
    dataIndex: 'orderId',
  },
  {
    key: 'remainingTime',
    title: 'Kalan Süre',
    dataIndex: 'remainingTime',
  },
  {
    key: 'customer',
    title: 'Müşteri Adı',
    dataIndex: 'customer',
  },
  {
    key: 'marketplace',
    title: 'Pazaryeri',
    dataIndex: 'marketplace',
  },
  {
    key: 'cargoNo',
    title: 'Kargo Takip Numarası',
    dataIndex: 'cargoNo',
  },
  {
    key: 'shipmentType',
    title: 'Sevkiyat Türü',
    dataIndex: 'shipmentType',
  },
  {
    key: 'company',
    title: 'Şirket Türü',
    dataIndex: 'company',
  },
];

const ShipmentOrder: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  /* const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<UsersRelayGetAllUsersQuery>(
    GET_USERS,
    {
      search: '',
    },
    mappers.userMapper,
  ); */

  const onTableClick = (data: any) => {
    form.setFieldsValue({ cargoNo: data.cargoNo });
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    /*forceFetchQuery({
      search: value,
    }); */
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onFormFinish = (values: any) => {
    console.log(values);
  };

  const FormComponent = useMemo(() => {
    const withPrice = modalData?.cargoNo !== '';
    return (
      <Row gutter={24}>
        {withPrice && (
          <Col span={12}>
            <Form.Item
              label="Kargo Fiyatı (TL)"
              name="cargoPrice"
              rules={[{ required: true, message: 'Zorunlu alan' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        )}
        <Col span={12} offset={withPrice ? 0 : 6}>
          <Form.Item
            label="Kargo Takip No"
            name="cargoNo"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    );
  }, [modalData]);

  return (
    <PageContent header={['Sevkiyat Fatura']}>
      <div>
        <TableFilter onSearchComplete={onSearch} />
        <div className="table-header">
          <Typography.Title level={5}>
            Sevk Emir Girilen Siparişler
          </Typography.Title>
        </div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          columns={columns}
          dataSource={dummyShipmentData}
          rowKey="orderId"
          loading={isLoading}
          pagination={{
            total: size,
          }}
        />

        <AddEditCard
          isVisible={isModalVisible}
          closeModal={closeModal}
          header="Sevk Bilgileri"
          form={form}
        >
          <Form
            form={form}
            name="basic"
            layout="vertical"
            onFinish={onFormFinish}
          >
            {FormComponent}
          </Form>
        </AddEditCard>
      </div>
    </PageContent>
  );
};

export default ShipmentOrder;
