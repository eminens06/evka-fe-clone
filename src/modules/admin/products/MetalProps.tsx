import { Card, Form, Row, Col, Input, FormInstance } from 'antd';
import React, { FC, useEffect } from 'react';
import { metalPropsFileds } from './enums';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const WoodProps: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card title="Metal Özellikleri" bordered={false} className="form-card">
      <Row gutter={24}>
        {metalPropsFileds.map((item, index) => {
          return (
            <Col span={8} key={`metal-${index}`}>
              <Form.Item name={item.name} label={item.label}>
                <Input type="number" disabled={isDisabled} defaultValue={0} />
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default WoodProps;
