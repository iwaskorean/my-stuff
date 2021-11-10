import { useState } from 'react';
import { Button, TextField, Tabs } from './components';
import { TabList, Tab, TabGlider, TabContent } from './components/Tabs';

const TABS_DATA = [
  {
    title: 'Tab 1',
    content: `Content of Tab 1`,
  },
  {
    title: 'Tab 2',
    content: `Content of Tab 2`,
  },
  {
    title: 'Tab 3',
    content: `Content of Tab 3`,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Button label="Button" backgroundColor="red" />
      <br />
      <TextField placeholder="placeholder" />
      <Tabs tabsLength={TABS_DATA.length}>
        <TabList>
          {TABS_DATA.map(({ title }, i) => {
            return (
              <Tab key={i} onClick={() => setCurrentIndex(i)}>
                {title}
              </Tab>
            );
          })}
          <TabGlider title="title" currentIndex={currentIndex} />
        </TabList>
        {TABS_DATA.map(({ content }, i) =>
          i === currentIndex ? <TabContent>{content}</TabContent> : null
        )}
      </Tabs>
    </>
  );
}

export default App;
