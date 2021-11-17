import { useState } from 'react';
import { Story } from '@storybook/react';
import { Tabs } from "../components";
import { Tab, TabGlider } from "../components/Tabs";

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

interface ITemplate {
  tabsLength: number;
}

const Template: Story<ITemplate> = ({ tabsLength, ...args }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabsForStory = Array.from({ length: tabsLength }, (el, i: number) => ({
    title: `Tab ${i + 1}`,
    value: i + 1,
  }));

  return (
    <>
      <Tabs tabs={tabsForStory} {...args}>
        {tabsForStory.map((tab, i) => (
          <Tab key={tab.title} title={tab.title} value={tab.value} onClick={() => setCurrentIndex(i)}>
            {tab.title}
          </Tab>
        ))}
        <TabGlider currentIndex={currentIndex} />
      </Tabs>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  tabsLength: 3,
};
