import { Meta, Story } from '@storybook/react';
import Button, {
  ButtonProps,
  SIZES as ButtonSizes,
  VARIANTS as ButtonVariants,
} from './Button';
import { BiBeenHere } from 'react-icons/bi';
import { styled } from '@storybook/theming';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Label',
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: 'Icon',
  icon: <BiBeenHere />,
};
IconButton.storyName = 'Icon';

export const All = () => {
  return (
    <Box>
      {Object.values(ButtonVariants).map(
        (variant: typeof ButtonVariants[keyof typeof ButtonVariants]) => (
          <>
            <Button variant={variant}>{variant}</Button>
            <Spacing />
          </>
        )
      )}
      <IconButton icon={<BiBeenHere />}>Icon</IconButton>
    </Box>
  );
};

export const Size = () => {
  return (
    <Box>
      {Object.values(ButtonSizes).map(
        (size: typeof ButtonSizes[keyof typeof ButtonSizes]) => (
          <>
            <Button size={size}>{size}</Button>
            <Spacing />
          </>
        )
      )}
    </Box>
  );
};

const Spacing = styled.div`
  display: inline-block;
  width: 4px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid aliceblue;
  padding: 3px;
`;
