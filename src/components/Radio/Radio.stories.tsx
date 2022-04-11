import { Story } from '@storybook/react';
import Radio, { RadioProps } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: '0',
  label: 'Radio 1',
};

export const HidedLabel = () => {
  return (
    <Radio
      hideLabel={true}
      id='1'
      label='I am here but you cannot see me !!!'
      name='story'
    />
  );
};
