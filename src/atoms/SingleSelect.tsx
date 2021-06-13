import { FC } from 'react';
import { Select } from 'antd';

interface Props {
  options: Option[];
  defaultValue?: string;
  onChange?: any;
}

const { Option } = Select;

const SingleSelect: FC<Props> = ({ onChange, defaultValue, options }) => {
  const handleChange = () => {
    console.log('Handle Change ');
    if (onChange) {
      onChange();
    }
  };

  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      {options.map((option) => {
        return <Option value={option.value}>{option.text}</Option>;
      })}
    </Select>
  );
};

export default SingleSelect;
