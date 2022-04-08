import { Story } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: 'border',
  size: 'default',
  color: 'primary',
};

export const Border = () => {
  return (
    <>
      <Spinner />
      <Spinner color='secondary' />
      <Spinner color='tertiary' />
    </>
  );
};

export const Grow = () => {
  return (
    <>
      <Spinner type='grow' />
      <Spinner type='grow' color='secondary' />
      <Spinner type='grow' color='tertiary' />
    </>
  );
};

export const Inline = () => {
  return (
    <>
      <Spinner inline={true} />
      <Spinner inline={true} color='secondary' />
      <Spinner inline={true} type='grow' />
      <Spinner inline={true} type='grow' color='secondary' />
    </>
  );
};
