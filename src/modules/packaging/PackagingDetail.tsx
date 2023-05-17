import { Card, Col, Row, Typography } from 'antd';
import { message } from 'antd';
import { InputNumber, Button } from 'antd';
import React, { FC, useMemo, useState } from 'react';
import UPDATE_PACKAGING_HAKEDIS, {
  PackagingRelayUpdatePackagingHakedisMutation,
} from '../../__generated__/PackagingRelayUpdatePackagingHakedisMutation.graphql';
import { useMutation } from 'relay-hooks';
import { WorkshopStatus } from '../production/types';

interface Props {
  productId: any;
  status: any;
  productName: string;
  marketplaceOrderId: string;
  isMonte: boolean;
  packageCount: number;
}

enum Status {
  DONE = 'Monte',
  NOT_DONE = 'Demonte',
}

const PackagingDetail: FC<Props> = ({ productName, marketplaceOrderId, isMonte, packageCount, status }) => {

  const [isActualPackagingNumberDifferent, setIsActualPackagingNumberDifferent] = useState(false);
  const [actualNumber, setActualNumber] = useState<number>(packageCount);
  const progressStatus = status as WorkshopStatus;

const [
    updateHakedis,
  ] = useMutation<PackagingRelayUpdatePackagingHakedisMutation>(
    UPDATE_PACKAGING_HAKEDIS, {
    onError: (error: any) => {
      const errorMessage = 'HATA! ' + error.message;
      message.error(errorMessage);
    },
    onCompleted: (res) => {
      message.success('Kullanılan Paket Adeti Başarıyla Güncellendi');
      setIsActualPackagingNumberDifferent(!isActualPackagingNumberDifferent);
    },
  });  
  
  const onChangeOfNumber = (value: number) => {
    setActualNumber(value);
  };

  const onDifferentButtonClick = () => {
    setIsActualPackagingNumberDifferent(!isActualPackagingNumberDifferent);
  };

  const onUpdateButtonClick = () => {
    const input = {
      productOrderId: String(marketplaceOrderId),
      changeOfPackaging: actualNumber,
    };
    updateHakedis({
      variables: {
        input,
      },
    });
  };

  const isMonteText = useMemo(() => {
    return isMonte ? Status.DONE : Status.NOT_DONE;
  }, [isMonte]);
  return (
    <Row gutter={24}>
      <Col span={(status === 'I') ? 12 : 24}>
        <Card title="Ürün Bilgileri" bordered className="form-card">
          <Typography.Title level={5}>{productName}</Typography.Title>
          <br></br>
          <Typography.Text>Montaj Durumu: {isMonteText}</Typography.Text>
          <br></br>
          <Typography.Text>Reçetede Öngörülen Paket Sayısı: {packageCount}</Typography.Text>
          <br></br>
        </Card>
      </Col>
      {(status === 'I') &&
        <Col span={12}>
          <Card title="Gerçekleşen Paketleme Bilgileri" bordered className="form-card">
            <Row style={{ display: "flex", justifyContent: "center", paddingTop: "20px", paddingBottom: "15px" }}>
              <Button
                size='large'
                onClick={onDifferentButtonClick}
                type="primary">
                Kullanılan Paket Sayısı Öngörülenden Farklı
              </Button>
            </Row>
            <Col span={24}>
              <Row gutter={24} style={{ display: "flex", justifyContent: "center", paddingTop: "10px", paddingBottom: "10px" }}>
                <InputNumber min={1} size='large' disabled={!isActualPackagingNumberDifferent} defaultValue={packageCount} onChange={onChangeOfNumber} style={{ marginRight: "10px" }} />
                <Button size='large' disabled={!isActualPackagingNumberDifferent} onClick={onUpdateButtonClick} type="primary">
                  Paket Sayısını Güncelle
                </Button>
              </Row>
            </Col>
          </Card>
        </Col>}
    </Row>
  );
};

export default PackagingDetail;
