import { FC } from 'react';
import { Select } from 'antd';

interface Props {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: any) => void;
  multiple?: boolean;
}

const SingleSelect: FC<Props> = ({
  defaultValue,
  options,
  onChange,
  multiple,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      style={{ minWidth: 120 }}
      mode={multiple ? 'multiple' : undefined}
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

export default SingleSelect;
