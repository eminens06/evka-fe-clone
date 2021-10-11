import { Card, Form, Row, Col, Input, FormInstance } from 'antd';
import React, { FC, useEffect } from 'react';
import { laborPropsFileds, woodPropsFileds } from './enums';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const LaborProps: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card title="İşçilik" bordered={false} className="form-card">
      <Row gutter={24}>
        {laborPropsFileds.map((item, index) => {
          return (
            <Col span={8} key={`labor-${index}`}>
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

export default LaborProps;
