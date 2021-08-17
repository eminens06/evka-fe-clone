import { Card, Form, Row, Col, Input, FormInstance, InputNumber } from 'antd';
import React, { FC, useEffect } from 'react';
import { otherFields } from './enums';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const OtherCard: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card title="Diğer Parametreler" bordered={false} className="form-card">
      <Row gutter={24}>
        {otherFields.map((item, index) => {
          return (
            <Col span={6} key={`other-${index}`}>
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

export default OtherCard;
