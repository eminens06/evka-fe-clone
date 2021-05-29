import React from 'react';
import { Story } from '@storybook/react';

import Button, { ButtonProps } from '../atoms/Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Button',
};
