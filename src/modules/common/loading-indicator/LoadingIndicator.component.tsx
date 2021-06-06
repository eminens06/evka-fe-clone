import { Spin } from 'antd';
import React, { FunctionComponent } from 'react';

interface Props {
  loading: boolean;
  style?: any;
}

const LoadingIndicator: FunctionComponent<Props> = (props: Props) => {
  const { loading, style = {} } = props;
  if (!loading) return null;
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        textAlign: 'center',
        top: '40vh',
        ...style,
      }}
    >
      <Spin />
    </div>
  );
};

export default LoadingIndicator;
