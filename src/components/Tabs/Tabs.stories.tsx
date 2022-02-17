import { Story } from '@storybook/react';
import { TabsProps } from './Tabs';
import Tabs from './Tabs';
import { styled } from '@storybook/theming';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template: Story<TabsProps> = (args) => (
  <Container>
    <Tabs {...args}>
      <Tabs.Item title='Tab 1'>
        <h2>Content of Tab 1</h2>
        <h3>This is content of tab 2 ... </h3>
      </Tabs.Item>
      <Tabs.Item title='Tab 2'>
        <div>Content of Tab 2</div>
      </Tabs.Item>
      <Tabs.Item title='Tab 3'>
        <h1>Content of Tab 3</h1>
      </Tabs.Item>
    </Tabs>
  </Container>
);

export const Basic = Template.bind({});

export const Disabled = () => {
  return (
    <Container>
      <Tabs>
        <Tabs.Item title='Tab'>First tab</Tabs.Item>
        <Tabs.Item title='Disabled Tab' disabled>
          You won't see this panel.
        </Tabs.Item>
        <Tabs.Item title='Tab'>Third tab</Tabs.Item>
      </Tabs>
    </Container>
  );
};

export const TabListScrolling = () => {
  return (
    <Container>
      <Tabs>
        {Array.from({ length: 10 }).map((_, i) => (
          <Tabs.Item key={i} title={'Tab ' + (i + 1)}>
            <h2>Content {i + 1}</h2>
          </Tabs.Item>
        ))}
      </Tabs>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
`;
