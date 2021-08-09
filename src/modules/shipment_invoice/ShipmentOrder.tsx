import { Form, Typography, Row, Col, Input, message } from 'antd';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import ADD_CARGO_NO, {
  ShipmentRelayAddCargoNoMutation,
} from '../../__generated__/ShipmentRelayAddCargoNoMutation.graphql';
import ADD_CARGO_PRICE, {
  ShipmentRelayAddCargoPriceMutation,
} from '../../__generated__/ShipmentRelayAddCargoPriceMutation.graphql';
import GET_ORDERS, {
  ShipmentRelayGetAllUserOrdersQuery,
} from '../../__generated__/ShipmentRelayGetAllUserOrdersQuery.graphql';
import AddEditCard from '../common/AddEditCard';

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
    key: 'cargoChaseNumber',
    title: 'Kargo Takip No',
    dataIndex: 'cargoChaseNumber',
  },
  {
    key: 'shipmentType',
    title: 'Sevkiyat Türü',
    dataIndex: 'shipmentType',
  },
  {
    key: 'shipmentCompanyName',
    title: 'Firma',
    dataIndex: 'shipmentCompanyName',
  },
];

interface FormValues {
  cargoChaseNumber: string;
  cargoPrice: string;
}

const ShipmentOrder: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>();

  const [form] = Form.useForm();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const {
    data,
    size,
    isLoading,
    forceFetchQuery,
  } = useFetchTablePagination<ShipmentRelayGetAllUserOrdersQuery>(
    GET_ORDERS,
    {
      status: 'O',
    },
    mappers.shipmentOrderMapper,
  );

  const [addCargoNo] = useMutation<ShipmentRelayAddCargoNoMutation>(
    ADD_CARGO_NO,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Kargo Durumu Başarıyla Güncellendi');
        forceFetchQuery({
          status: 'O',
        });
        closeModal();
      },
    },
  );

  const [addCargoPrice] = useMutation<ShipmentRelayAddCargoPriceMutation>(
    ADD_CARGO_PRICE,
    {
      onError: (error: any) => {
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        message.success('Kargo Durumu Başarıyla Güncellendi');
        forceFetchQuery({
          status: 'O',
        });
        closeModal();
      },
    },
  );

  const onTableClick = (data: any) => {
    form.setFieldsValue({ cargoChaseNumber: data.cargoChaseNumber });
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
    form.resetFields(['cargoChaseNumber', 'cargoPrice']);
  };

  const onFormFinish = (values: FormValues) => {
    if (values.cargoChaseNumber !== modalData.cargoChaseNumber) {
      const input = {
        userOrderId: modalData.id,
        cargoChaseNumber: values.cargoChaseNumber,
      };
      addCargoNo({
        variables: {
          input,
        },
      });
    }
    if (modalData?.cargoChaseNumber !== '' && values?.cargoPrice !== '') {
      const input = {
        userOrderId: modalData.id,
        cargoPrice: values.cargoPrice,
      };
      addCargoPrice({
        variables: {
          input,
        },
      });
    }
  };

  const FormComponent = useMemo(() => {
    const withPrice = modalData?.cargoChaseNumber !== '';
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
            name="cargoChaseNumber"
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
          dataSource={data}
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
