import { Card, Form } from 'antd';
import React, { FC } from 'react';
import { SingleSelect } from '../atoms';

interface Props {}

const optionsTest = [
  {
    value: 'value1',
    text: 'Value 1',
  },
  {
    value: 'value2',
    text: 'Value 2',
  },
  {
    value: 'value3',
    text: 'Value 3',
  },
  {
    value: 'value4',
    text: 'Value 4',
  },
];

const ProductCard: FC<Props> = () => {
  const onFinish = () => {
    console.log('On Finish');
  };

  return (
    <Card title="Card title" bordered={false}>
      <div>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Lütfen kullanıcı adınızı kontrol ediniz.',
            },
          ]}
        >
          <SingleSelect options={optionsTest} />
        </Form.Item>
      </div>
    </Card>
  );
};

export default ProductCard;
