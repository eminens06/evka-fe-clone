import {
  Input,
  Form,
  Row,
  Col,
  message,
  FormInstance,
  Button,
  Tabs,
  Table,
} from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from 'relay-hooks';
import { SingleSelect } from '../../atoms';
import { CompanyOptions, ShippingTypeOptions } from '../../utils/enums';
import {
  CargoTypeOption,
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
  const { form, modalData } = props;
  const [companyOptions, setCompanyOptions] = useState<CargoTypeOption[]>([]);

  const onFormFinish = (values: any) => {
    console.log(values);
  };
  const onChangeShippingType = (value: ShipmentTypeValue) => {
    form.resetFields(['company']);
    setCompanyOptions(CompanyOptions[value]);
  };
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="Siparişler" key="1">
        <Table columns={columns} dataSource={modalData} size="small" />
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
                name="shippingType"
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
                name="company"
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
