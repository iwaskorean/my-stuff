import { useEffect, useRef, useState } from 'react';
import { Button, Modal, ProgressBar } from './components';

// const tabs = [
//   {
//     title: 'Tab 1',
//     value: '1',
//   },
//   {
//     title: 'Tab 2',
//     value: '2',
//   },
//   {
//     title: 'Tab 3',
//     value: '3',
//   },
// ];

// const checks = [
//   {
//     label: 'check1',
//   },
//   {
//     label: 'check2',
//   },
//   {
//     label: 'check3',
//   },
// ];

// const slides = [
//   {
//     content: 'https://picsum.photos/id/1/1600/900',
//   },
//   {
//     content: 'https://picsum.photos/id/2/1600/900',
//   },
//   {
//     content: 'https://picsum.photos/id/3/1600/900',
//   },
//   {
//     content: 'https://picsum.photos/id/4/1600/900',
//   },
// ];

function App() {
  const [visible, setVisible] = useState(false);

  const [progressCurrent, setProgressCurrent] = useState(0);
  const limit = 5;
  const isProgress = useRef(false);

  const handleVisble = (active: boolean) => {
    setVisible(active);
  };

  const delay = () => {
    isProgress.current = true;
    return new Promise(() =>
      setTimeout(() => (isProgress.current = false), 500)
    );
  };

  const handleNext = async () => {
    if (isProgress.current || progressCurrent === limit) {
      return;
    }
    setProgressCurrent((prev) => prev + 1);
    await delay();
  };

  const handlePrev = async () => {
    if (isProgress.current || progressCurrent === 0) {
      return;
    }
    setProgressCurrent((prev) => prev - 1);
    await delay();
  };

  return (
    <>
      {/* Modal */}
      <br />
      <Modal visible={visible} onSetVisible={handleVisble}>
        I am a Modal.
      </Modal>
      <Button onClick={() => handleVisble(true)}>Open Modal</Button>
      <br />
      <br />

      {/* Progress bar */}
      <ProgressBar range={progressCurrent * (100 / limit)} speed={500} />
      <Button onClick={() => handlePrev()}>Prev</Button>
      <Button onClick={() => handleNext()}>Next</Button>
    </>
  );
}

export default App;
