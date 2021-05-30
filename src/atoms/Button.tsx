import { FC } from 'react';
import { Button as AntdButton } from 'antd';

import { ButtonProps as AntButtonProps } from 'antd/lib/button';

import { throttle } from 'lodash';

export interface ButtonProps extends AntButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: FC<ButtonProps> = (props) => {
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  const onButtonClick = throttle(onClick, 1000, { trailing: false });

  return (
    <AntdButton {...props} onClick={onButtonClick}>
      {props.text}
    </AntdButton>
  );
};

export default Button;
