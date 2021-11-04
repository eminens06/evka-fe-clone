import { Form, Typography, Row, Col, Input, message } from 'antd';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { useMutation } from 'relay-hooks';
import useFetchTablePagination from '../../hooks/useFetchTableData';
import useFullPageLoader from '../../hooks/useFullPageLoader';
import PageContent from '../../layout/PageContent';
import mappers from '../../mappers';
import Table from '../../molecules/Table';
import TableFilter from '../../molecules/TableFilter';
import settings from '../../settings';
import ADD_CARGO_NO, {
  ShipmentInvoiceRelayAddCargoNoMutation,
} from '../../__generated__/ShipmentInvoiceRelayAddCargoNoMutation.graphql';
import ADD_CARGO_PRICE, {
  ShipmentInvoiceRelayAddCargoPriceMutation,
} from '../../__generated__/ShipmentInvoiceRelayAddCargoPriceMutation.graphql';
import GET_ORDERS, {
  ShipmentInvoiceRelayGetAllUserOrdersQuery,
} from '../../__generated__/ShipmentInvoiceRelayGetAllUserOrdersQuery.graphql';
import AddEditCard from '../common/AddEditCard';

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
    render: (value: number) => {
      if (value <= settings.remainingTimeLevel) {
        return <Typography.Text type="danger">{value}</Typography.Text>;
      }
      return value;
    },
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
  const { loader, openLoader, closeLoader } = useFullPageLoader();

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
  } = useFetchTablePagination<ShipmentInvoiceRelayGetAllUserOrdersQuery>(
    GET_ORDERS,
    {
      search: '',
      status: 'O',
    },
    mappers.shipmentOrderMapper,
  );

  const [addCargoNo] = useMutation<ShipmentInvoiceRelayAddCargoNoMutation>(
    ADD_CARGO_NO,
    {
      onError: (error: any) => {
        closeLoader();
        message.error('Hata! ', error.response.errors[0].message);
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Kargo Durumu Başarıyla Güncellendi');
        forceFetchQuery({
          search,
          status: 'O',
        });
        closeModal();
      },
    },
  );

  const [
    addCargoPrice,
  ] = useMutation<ShipmentInvoiceRelayAddCargoPriceMutation>(ADD_CARGO_PRICE, {
    onError: (error: any) => {
      closeLoader();
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Kargo Ücreti Başarıyla Güncellendi');
      forceFetchQuery({
        search,
        status: 'O',
      });
      closeModal();
    },
  });

  const onTableClick = (data: any) => {
    form.setFieldsValue({ cargoChaseNumber: data.cargoChaseNumber });
    setModalData({ ...data });
    openModal();
  };

  const onSearch = (value: string) => {
    setSearch(search);
    forceFetchQuery({
      search: value,
      status: 'O',
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
    form.resetFields(['cargoChaseNumber', 'cargoPrice']);
  };

  const onFormFinish = (values: FormValues) => {
    openLoader();
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
          onRow={(record: any) => {
            return {
              onClick: () => onTableClick(record),
            };
          }}
          fileName="sevkiyat"
          columns={columns}
          dataSource={data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            total: size,
          }}
          sortKeys={[
            { value: 'remainingTime', text: 'Kalan Süre' },
            { value: 'marketplace', text: 'Pazaryeri' },
            { value: 'shipmentType', text: 'Sevkiyat Türü' },
          ]}
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
        {loader}
      </div>
    </PageContent>
  );
};

export default ShipmentOrder;
