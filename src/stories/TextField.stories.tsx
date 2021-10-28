import TextField, { TextFieldProps } from '../components/TextField';
import { Story } from '@storybook/react';

export default {
  title: 'Components/TextField',
  component: TextField,
};

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'placeholder',
  scale: 'normal',
  fontSize: 'normal',
  fullWidth: false,
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'placeholder',
  scale: 'large',
  fontSize: 'normal',
  fullWidth: false,
};

export const LargeFont = Template.bind({});
LargeFont.args = {
  placeholder: 'placeholder',
  scale: 'normal',
  fontSize: 'large',
  fullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  placeholder: 'placeholder',
  scale: 'normal',
  fontSize: 'large',
  fullWidth: true,
};
