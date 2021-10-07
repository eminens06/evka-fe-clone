import { Form, Row, Col, FormInstance, Tabs, Table } from 'antd';
import React, { FC, useState } from 'react';
import { SingleSelect } from '../../atoms';
import { CompanyOptions, ShippingTypeOptions } from '../../utils/enums';
import {
  CargoTypeOption,
  ShipmentFormTypes,
  ShipmentManagementData,
  ShipmentTypeValue,
} from './types';

export interface ExternalServiceProps {
  form: FormInstance<any>;
  onSuccess: Function;
  modalData: ShipmentManagementData[];
}
const { TabPane } = Tabs;

const columns = [
  {
    key: 'orderId',
    title: 'Sipariş ID',
    dataIndex: 'orderId',
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
];

const ShipmentSelectorForm: FC<ExternalServiceProps> = (props) => {
  const { form, modalData, onSuccess } = props;
  const [companyOptions, setCompanyOptions] = useState<CargoTypeOption[]>([]);

  const onFormFinish = (values: ShipmentFormTypes) => {
    onSuccess(values);
  };
  const onChangeShippingType = (value: ShipmentTypeValue) => {
    form.resetFields(['company']);
    setCompanyOptions(CompanyOptions[value]);
  };
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Siparişler" key="1">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={modalData}
          size="small"
        />
      </TabPane>
      <TabPane tab="Sevk Bilgileri" key="2">
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={onFormFinish}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="shipmentType"
                label="Sevkiyat Türü"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <SingleSelect
                  options={ShippingTypeOptions}
                  onChange={onChangeShippingType}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="shipmentCompanyName"
                label="Firma"
                rules={[{ required: true, message: 'Zorunlu alan' }]}
              >
                <SingleSelect options={companyOptions} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </TabPane>
    </Tabs>
  );
};

export default ShipmentSelectorForm;
