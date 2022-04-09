import { Story } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    completed: { control: { type: 'range', min: 0, max: 500 } },
    max: { control: { type: 'range', min: 100, max: 500 } },
  },
};

const Template: Story<ProgressBarProps> = (args) => {
  return <ProgressBar {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  completed: 50,
  variant: 'primary',
};
