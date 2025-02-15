import React, { FunctionComponent, useMemo } from 'react';
import { Card, Divider, Skeleton, Spin, Statistic, Typography } from 'antd';

import { percIncrease } from '../../utils/helpers';
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineMinus } from 'react-icons/ai';

const { Title, Text } = Typography;

interface Props {
  header: string;
  title: string;
  subTitle: string;
  value: string;
  subValue: string;
  loading?: boolean;
}

const ComparisonCard: FunctionComponent<Props> = ({
  header,
  title,
  subTitle,
  value,
  subValue,
  loading = true,
}) => {
  const changeText = useMemo(() => {
    const change = percIncrease(Number(value), Number(subValue));
    if (change > 0) {
      return (
        <Text type="success">
          {change}% <AiOutlineCaretUp />
        </Text>
      );
    } else if (change < 0) {
      return (
        <Text type="danger">
          {change}% <AiOutlineCaretDown />
        </Text>
      );
    }
    return (
      <Text>
        {change}% <AiOutlineMinus />
      </Text>
    );
  }, [value, subValue]);

  function numberWithCommas(x: any) {
    if (x) return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <Card bodyStyle={{ padding: 18 }} bordered={false}>
        <Text strong>{header}</Text>
        <Divider style={{ margin: 4 }} />
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <Statistic title={title} value={`${numberWithCommas(value)} ₺`} />
            {value !== '0.00' && subValue !== '0.00' && (
              <>
                <Text type="secondary">Değişim </Text>
                {changeText}
              </>
            )}
            <Divider style={{ margin: 4 }} />
            <Statistic
              title={subTitle}
              value={`${numberWithCommas(subValue)} ₺`}
            />
          </>
        )}
      </Card>
    </>
  );
};

export default ComparisonCard;
