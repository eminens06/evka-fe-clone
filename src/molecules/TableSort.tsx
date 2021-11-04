import { FC } from 'react';
import { Select } from 'antd';

interface Props {
  options: Option[];
  value: string;
  onChange?: (value: any) => void;
}

const TableSort: FC<Props> = ({ value, options, onChange }) => {
  return (
    <Select
      onChange={onChange}
      style={{ minWidth: 120, marginLeft: 10 }}
      value={value}
    >
      {options.map((option, index) => {
        return (
          <Select.Option
            key={`${option.value}-${index}`}
            value={
              typeof option.value === 'string' || Array.isArray(option.value)
                ? option.value
                : JSON.stringify(option.value)
            }
          >
            {option.text}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default TableSort;
