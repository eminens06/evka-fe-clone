import { FC } from 'react';
import { Select } from 'antd';

interface Props {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const SingleSelect: FC<Props> = ({ defaultValue, options, onChange }) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      style={{ minWidth: 120 }}
    >
      {options.map((option, index) => {
        return (
          <Select.Option
            key={`${option.value}-${index}`}
            value={
              typeof option.value === 'string'
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

export default SingleSelect;
