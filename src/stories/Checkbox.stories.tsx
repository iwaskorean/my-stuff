import { useState } from '@storybook/addons';
import { Story } from '@storybook/react';
import Checkbox from '../components/Checkbox/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

interface ITemplate {
  checksLength: number;
}

const Template: Story<ITemplate> = ({ checksLength, ...args }) => {
  const checksForStory = Array.from({ length: checksLength }, (_, i) => ({
    label: `check ${i + 1}`,
  }));

  const [checkList, setCheckList] = useState(() =>
    checksForStory.map(() => false)
  );

  const handleCheckItem = (id: number) => {
    setCheckList((checks) =>
      checks.map((check, i) => (i === id ? !check : check))
    );
  };

  return (
    <>
      {checksForStory.map((check, i) => (
        <Checkbox
          key={i}
          index={i}
          label={check.label}
          handleCheckItem={handleCheckItem}
          {...args}
        />
      ))}
      {checkList.every((c) => c) && <div>모두 선택 완료</div>}
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  checksLength: 3,
};
