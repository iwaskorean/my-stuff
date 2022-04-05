import { Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  id: '0',
  label: 'Checkbox 1',
};

export const HidedLabel = () => {
  return (
    <Checkbox
      id='0'
      label='I am here but you cannot see meeeeee'
      hideLabel={true}
    />
  );
};
