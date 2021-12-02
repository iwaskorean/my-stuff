import { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import SlideButton from './SlideButton';
import styled from '@emotion/styled';

interface ISlide {
  content: string;
}

interface CrouselProps {
  slides: ISlide[];
}

export default function Crousel({ slides }: CrouselProps) {
  const [current, setCurrent] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const isMoving = useRef(false);

  useEffect(() => {
    setSlideLength(slides.length);
  }, [slides]);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);

  const handlePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(slideLength - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const handleNext = () => {
    if (!isMoving.current) {
      if (current === slideLength - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  return (
    <Container>
      {slides.map((slide, i) => {
        const prev = current === 0 ? slides.length - 1 : current - 1;
        const next = current === slides.length - 1 ? 0 : current + 1;
        console.log(prev);

        return (
          <Slide
            key={i}
            content={slide.content}
            active={i === current}
            prev={i === prev}
            next={i === next}
          />
        );
      })}

      <SlideButton prev handleSlide={handlePrev} />
      <SlideButton next handleSlide={handleNext} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 50vw;
  overflow: hidden;
`;
