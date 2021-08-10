import { Card, Form, Row, Col, Input, FormInstance, Upload } from 'antd';
import React, { FC, useEffect } from 'react';
import { SingleSelect } from '../../../atoms';
import { generalPropsFileds } from './enums';
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

interface Props {
  form: FormInstance<any>;
  initialValues: any;
  isDisabled?: boolean;
  draggerProps?: any;
}

const GeneralProps: FC<Props> = ({
  form,
  initialValues,
  isDisabled,
  draggerProps,
}) => {
  useEffect(() => form.resetFields(), [initialValues]);
  return (
    <Card title="Genel Bilgiler" bordered={false} className="form-card">
      <Row gutter={24}>
        {generalPropsFileds.map((item, index) => {
          return (
            <Col span={8} key={`other-${index}`}>
              {item.isDropdown ? (
                <Form.Item name={item.name} label={item.label}>
                  <SingleSelect
                    options={[]}
                    defaultValue={initialValues?.module}
                  />
                </Form.Item>
              ) : (
                <Form.Item name={item.name} label={item.label}>
                  <Input type="number" disabled={isDisabled} />
                </Form.Item>
              )}
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col span={24}>
          <section className="code-box-demo">
            <Dragger {...draggerProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Sürükle Bırak veya Seç </p>
              <p className="ant-upload-hint">
                Dosyalarınızı tek tek veya toplu olarak yükleyebilirsiniz
              </p>
            </Dragger>
          </section>
        </Col>
      </Row>
    </Card>
  );
};

export default GeneralProps;
