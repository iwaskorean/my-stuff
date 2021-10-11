import Stack, { StackProps } from '../components/Stack';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    numberOfChildrens: {
      type: 'number',
      defaultValue: 4,
    },
  },
};

const Template: Story<StackProps> = ({ numberOfChildrens, ...args }) => {
  return (
    <Stack {...args}>
      {[...Array(numberOfChildrens).keys()].map((n) => (
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'yellow',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {n + 1}
        </div>
      ))}
    </Stack>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
};
