import { Card, Form, Row, Col, Input, FormInstance, InputNumber } from 'antd';
import React, { FC, useEffect } from 'react';
import { woodFields } from './enums';
interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const WoodCard: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card title="Ahşap" bordered={false} className="form-card">
      <Row gutter={24}>
        {woodFields.map((item, index) => {
          return (
            <Col span={6} key={`wood-${index}`}>
              <Form.Item
                name={item.name}
                label={item.label}
                rules={[{ required: false, message: 'Bu alan boş olamaz.' }]}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  disabled={isDisabled}
                  decimalSeparator=","
                />
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default WoodCard;
