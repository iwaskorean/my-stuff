import styled from '@emotion/styled';
import { Story } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template: Story<SelectProps> = (args) => {
  return (
    <Box>
      <Select {...args}>
        <Select.Option value={1}>option 1</Select.Option>
        <Select.Option value={2}>option 2</Select.Option>
        <Select.Option value={3}>option 3</Select.Option>
      </Select>
    </Box>
  );
};

const handleSelectChange = () => {};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  handleSelectChange,
};

const Box = styled.div`
  width: 300px;
`;
