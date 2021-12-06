import Button, { ButtonProps } from '../components/Button';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
