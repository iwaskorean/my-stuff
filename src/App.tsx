import { useState } from 'react';
import { Button, TextField, Tabs } from './components';
import { Tab } from './components/Tabs/Tab';
import { TabGlider } from './components/Tabs/TabGlider';

const tabs = [
  {
    title: 'Tab 1',
    value: '1',
  },
  {
    title: 'Tab 2',
    value: '2',
  },
  {
    title: 'Tab 3',
    value: '3',
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Button label='Button' backgroundColor='red' />
      <br />
      <TextField placeholder='placeholder' />
      <br />
      <Tabs tabs={tabs}>
        {tabs.map((tab, i) => (
          <Tab
            key={tab.title}
            title={tab.title}
            value={tab.value}
            onClick={() => setCurrentIndex(i)}
          >
            {tab.title}
          </Tab>
        ))}
        <TabGlider currentIndex={currentIndex} />
      </Tabs>
    </>
  );
}

export default App;
