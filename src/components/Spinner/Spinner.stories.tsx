import { Story } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  animation: 'border',
  size: 'default',
  variant: 'primary',
};

export const Border = () => {
  return (
    <>
      <Spinner />
      <Spinner variant='secondary' />
      <Spinner variant='tertiary' />
    </>
  );
};

export const Grow = () => {
  return (
    <>
      <Spinner animation='grow' />
      <Spinner animation='grow' variant='secondary' />
      <Spinner animation='grow' variant='tertiary' />
    </>
  );
};

export const Inline = () => {
  return (
    <>
      <Spinner inline={true} />
      <Spinner inline={true} variant='secondary' />
      <Spinner inline={true} animation='grow' />
      <Spinner inline={true} animation='grow' variant='secondary' />
    </>
  );
};
