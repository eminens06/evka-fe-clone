import { Card, Col, Form, FormInstance, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { SingleSelect } from '../../atoms';
import { RoleOptions } from '../../layout/roles';
import { ModuleType } from '../admin/externalService/types';
import AddOutSourceServiceForm from './AddOutsourceServiceForm';
import {
  WorkshopExternalService,
  WorkshopStatus,
  WorkshopTypes,
} from './types';

interface Props {
  productName: string;
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  status: WorkshopStatus;
  workshopType: WorkshopTypes;
  onFormSubmit: Function;
  form?: FormInstance<any>;
  serviceInfo: WorkshopExternalService[];
  moduleName?: ModuleType;
  materialName?: string;
  tablaName?: string;
}

const MaterialWorkshopDetail: FC<Props> = ({
  productName,
  dimensions,
  status,
  form,
  onFormSubmit,
  workshopType,
  serviceInfo,
  moduleName,
  materialName,
  tablaName,
}) => {
  const getDimensionsText = () => {
    return `En: ${dimensions.width} mm / Yükseklik: ${dimensions.height} mm / Uzunluk: ${dimensions.length} mm`;
  };

  return (
    <Row gutter={24}>
      <Col span={24}>
        <Card title="Parça Bilgileri" bordered className="form-card">
          <Row gutter={24}>
            <Col span={12}>
              <Typography.Title level={5}>{productName}</Typography.Title>
              {tablaName && (
                <Row style={{ marginTop: 10 }}>
                  <Typography.Text>Tabla: {tablaName}</Typography.Text>
                </Row>
              )}
              <br></br>
              <Typography.Text>{getDimensionsText()}</Typography.Text>
              {materialName && (
                <Row style={{ marginTop: 10 }}>
                  <Typography.Title level={5}>{materialName}</Typography.Title>
                </Row>
              )}
            </Col>
            <Col span={12}>
              {status === WorkshopStatus.READY ? (
                <AddOutSourceServiceForm
                  form={form}
                  saveForm={onFormSubmit}
                  withRawMaterial={
                    workshopType === WorkshopTypes.MARBLE ||
                    workshopType === WorkshopTypes.FABRIC
                  }
                  moduleName={moduleName}
                />
              ) : (
                <Row gutter={24}>
                  {serviceInfo.map((info, index) => {
                    return (
                      <Row
                        gutter={24}
                        key={`service_info_${index}`}
                        style={{ width: '100%' }}
                      >
                        <Col span={24}>
                          <Typography.Text strong>{info.name}</Typography.Text>
                          <br></br>
                          <Typography.Text>{info.phoneNumber}</Typography.Text>
                          <br></br>
                          <br></br>
                        </Col>
                      </Row>
                    );
                  })}
                </Row>
              )}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default MaterialWorkshopDetail;
