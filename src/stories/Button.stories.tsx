import Button, { ButtonProps } from '../components/Button';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Button',
  size: 'md',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Button',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  label: 'Press Button',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press Button',
  size: 'lg',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'red',
  label: 'PPPPPPPPPPPress BBBBBBButton',
  size: 'md',
};
