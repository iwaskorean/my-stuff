import Tabs, {
  TabsProps,
  TabList,
  Tab,
  TabGlider,
  TabContent,
} from '../components/Tabs';
import { Story } from '@storybook/react/types-6-0';
import { useState } from '@storybook/addons';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template: Story<TabsProps> = (args) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Tabs {...args}>
      <TabList>
        <Tab onClick={() => setCurrentIndex(0)}>Tab 0</Tab>
        <Tab onClick={() => setCurrentIndex(1)}>Tab 1</Tab>
        <Tab onClick={() => setCurrentIndex(2)}>Tab 2</Tab>
        <TabGlider currentIndex={currentIndex} />
      </TabList>
      <TabContent>Content of Tab {currentIndex + 1}</TabContent>
    </Tabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
