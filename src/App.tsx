import { useState } from 'react';
import { Button, TextField, Tabs, Carousel, Modal } from './components';
import Checkbox from './components/Checkbox/Checkbox';
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

const checks = [
  {
    label: 'check1',
  },
  {
    label: 'check2',
  },
  {
    label: 'check3',
  },
];

const slides = [
  {
    content: 'https://picsum.photos/id/1/1600/900',
  },
  {
    content: 'https://picsum.photos/id/2/1600/900',
  },
  {
    content: 'https://picsum.photos/id/3/1600/900',
  },
  {
    content: 'https://picsum.photos/id/4/1600/900',
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkList, setCheckList] = useState(() => checks.map(() => false));
  const [visible, setVisible] = useState(false);

  const handleCheckItem = (id: number) => {
    setCheckList((checks) =>
      checks.map((check, i) => (i === id ? !check : check))
    );
  };

  const handleVisble = (active: boolean) => {
    setVisible(active);
  };

  console.log(visible);

  return (
    <>
      <TextField placeholder='placeholder' />
      <br />
      {/* Tabs Container */}
      <div>
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
      </div>
      <br />
      {/* Checkbox Container */}
      <div>
        {checks.map((check, i) => (
          <Checkbox
            key={i}
            index={i}
            label={check.label}
            handleCheckItem={handleCheckItem}
          />
        ))}
        {checkList.every((c) => c) && <span>체크 박스 모두 선택 완료</span>}
      </div>
      <br />
      {/* Carousel */}
      <Carousel slides={slides} />
      {/* Modal */}
      <br />
      <Modal visible={visible} onSetVisible={handleVisble}>
        I am a Modal.
      </Modal>
      <Button onClick={() => handleVisble(true)}>Open Modal</Button>
    </>
  );
}

export default App;
