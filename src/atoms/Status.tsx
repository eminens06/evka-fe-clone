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
  success: 'green',
};

const Status: FC<Props> = ({ status, text }) => {
  console.log('Status : ', status);
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
