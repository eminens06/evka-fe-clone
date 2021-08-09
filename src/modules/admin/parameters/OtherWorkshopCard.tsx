import { Card, Form, Row, Col, Input, FormInstance } from 'antd';
import React, { FC, useEffect } from 'react';
import { otherWorkshopFields } from './enums';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const OtherWorkshopCard: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card
      title="Diğer Atölye Özellikleri"
      bordered={false}
      className="form-card"
    >
      <Row gutter={24}>
        {otherWorkshopFields.map((item, index) => {
          return (
            <Col span={6} key={`otherWorkshop-${index}`}>
              <Form.Item
                name={item.name}
                label={item.label}
                rules={[{ required: true, message: 'Bu alan boş olamaz.' }]}
              >
                <Input type="number" disabled={isDisabled} />
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default OtherWorkshopCard;
