import { Story } from '@storybook/react';
import { ProgressBar } from '../components';
import { ProgressBarProps } from '../components/ProgressBar/ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    range: { control: { type: 'range', min: 0, max: 100 } },
  },
};

const Template: Story<ProgressBarProps> = ({ ...args }) => {
  return (
    <>
      <ProgressBar {...args} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  range: 50,
  speed: 500,
};
