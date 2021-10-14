import { Card, Form, Row, Col, Input, FormInstance } from 'antd';
import React, { FC, useEffect } from 'react';
import { metalPropsFileds, otherPropsFileds } from './enums';

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
}

const OtherProps: FC<Props> = ({ form, initialValues, isDisabled }) => {
  useEffect(() => form.resetFields(), [initialValues]);

  return (
    <Card title="Diğer" bordered={false} className="form-card">
      <Row gutter={24}>
        {otherPropsFileds.map((item, index) => {
          return (
            <Col span={8} key={`other-${index}`}>
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

export default OtherProps;
