import Input, { InputProps } from '../components/Input';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Input',
  component: Input,
  argType: {
    handleChange: { actions: 'handleChange' },
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type something here..',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'It is another',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'It is another',
  size: 'sm',
};
