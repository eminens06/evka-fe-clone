import { FC } from 'react';
import { Input as AntdInput, InputProps } from 'antd';

const Input: FC<InputProps> = (props) => {
  return <AntdInput {...props} />;
};

export default Input;
