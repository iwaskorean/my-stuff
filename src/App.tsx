import { useState } from 'react';
import { Button, TextField, Tabs } from './components';

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
        <Tabs.Nav>
          {TABS_DATA.map(({ title }, i) => {
            return (
              <Tabs.Tab key={i} onClick={() => setCurrentIndex(i)}>
                {title}
              </Tabs.Tab>
            );
          })}
          <Tabs.Glider title="title" currentIndex={currentIndex} />
        </Tabs.Nav>
        {TABS_DATA.map(({ content }, i) =>
          i === currentIndex ? (
            <Tabs.TabContent>{content}</Tabs.TabContent>
          ) : null
        )}
      </Tabs>
    </>
  );
}

export default App;
