import React, { FunctionComponent, useMemo } from 'react';
import { Card, Divider, Statistic, Typography } from 'antd';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { percIncrease } from '../../utils/helpers';

const { Title, Text } = Typography;

interface Props {
  header: string;
  title: string;
  subTitle: string;
  value: string;
  subValue: string;
}

const ComparisonCard: FunctionComponent<Props> = ({
  header,
  title,
  subTitle,
  value,
  subValue,
}) => {
  const changeText = useMemo(() => {
    const change = percIncrease(Number(value), Number(subValue));
    if (change > 0) {
      return (
        <Text type="success">
          {change}% <CaretUpOutlined />
        </Text>
      );
    } else if (change < 0) {
      return (
        <Text type="danger">
          {change}% <CaretDownOutlined />
        </Text>
      );
    }
    return (
      <Text>
        {change}% <MinusOutlined />
      </Text>
    );
  }, [value, subValue]);

  return (
    <>
      <Card bodyStyle={{ padding: 18 }} bordered={false}>
        <Text strong>{header}</Text>
        <Divider style={{ margin: 4 }} />
        <Statistic title={title} value={`${value} ₺`} />
        <Text type="secondary">Değişim </Text>
        {changeText}
        <Divider style={{ margin: 4 }} />
        <Statistic title={subTitle} value={`${subValue} ₺`} />
      </Card>
    </>
  );
};

export default ComparisonCard;
