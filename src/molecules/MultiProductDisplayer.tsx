import { Row, Tooltip, Typography } from 'antd';
import React, { FC } from 'react';
import { OrderProduct } from '../modules/orders/types';

interface Props {
  products: OrderProduct[];
  withMetaTooltip?: boolean;
}

const MultiProductDisplayer: FC<Props> = ({ products, withMetaTooltip }) => {
  if (!products) return null;
  return (
    <>
      {products.map((product, index) => {
        const { name, productName, count, metaInfo } = product;
        const text = name || productName;
        const no = count === 1 ? '' : `x${count}`;
        if (withMetaTooltip && metaInfo) {
          const title = `Ayak: ${metaInfo.AY} \n Tabla: ${metaInfo.TB}`;
          return (
            <Row key={index}>
              <Tooltip placement="topLeft" title={title}>
                <Typography>{`${text} ${no}`}</Typography>
              </Tooltip>
            </Row>
          );
        }
        return <Typography key={index}>{`${text} ${no}`}</Typography>;
      })}
    </>
  );
};

export default MultiProductDisplayer;
