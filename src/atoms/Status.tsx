import { Row, Typography } from 'antd';
import { PresetStatusColorTypes } from 'antd/lib/_util/colors';
import React, { FC } from 'react';
import './atoms.styles.less';

interface Props {
  status: Status;
  text: string;
}

type StatusColors = Record<Status, string>;
const COLORS: StatusColors = {
  warning: '#FAAD14',
  error: '#FF4D4F',
  success: '#52C41A',
  pending: '#597EF7',
  pending_paint: '#D9D9D9',
  none: '#000000',
};

const Status: FC<Props> = ({ status, text }) => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <div
        className="status-circle"
        style={{ backgroundColor: COLORS[status] }}
      ></div>
      <Typography.Text>{text}</Typography.Text>
    </Row>
  );
};

export default Status;
