import React, { HTMLAttributes, useEffect, useState } from 'react';
import Slide, { SlideProps } from './Slide';
import SlideButton from './SlideButton';
import { SlideElement } from './Carousel';
import styled from '@emotion/styled';

export interface InfiniteCarouselProps extends HTMLAttributes<HTMLDivElement> {}

function InfiniteCarousel({ children, ...props }: InfiniteCarouselProps) {
  const [current, setCurrent] = useState(1);
  const [prev, setPrev] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const childrens = React.Children.toArray(children) as SlideElement[];
  const items = childrens.filter((children) => children.type === Item);
  const slides = [items[items.length - 1], ...items, items[0]];

  useEffect(() => {
    if (isMoving === true) {
      setTimeout(() => {
        setIsMoving(false);
      }, 300);
    }
  }, [isMoving]);

  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        setCurrent(slides.length - 2);
      }, 200);
    }
    if (current === slides.length - 1) {
      setTimeout(() => {
        setCurrent(1);
      }, 200);
    }
  }, [current, slides.length]);

  const handlePrev = () => {
    if (!isMoving) {
      setIsMoving(true);
      setPrev(current);
      if (current === 0) {
        setCurrent(slides.length - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const handleNext = () => {
    if (!isMoving) {
      setIsMoving(true);
      setPrev(current);
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  return (
    <Container {...props}>
      <Inner length={slides.length} current={current} prev={prev}>
        {slides.map((children, i: number) => {
          return <Slide key={i}>{children}</Slide>;
        })}
      </Inner>

      {slides.length > 1 && (
        <>
          <SlideButton prev handleSlide={handlePrev} />
          <SlideButton next handleSlide={handleNext} />
        </>
      )}
    </Container>
  );
}

function Item({ children }: SlideProps) {
  return <>{children}</>;
}

export default Object.assign(InfiniteCarousel, {
  Item,
});

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  height: inherit;
`;

const Inner = styled.div<{
  length: number;
  current: number;
  prev: number;
}>`
  width: ${({ length }) => (length ? `calc(${length} * 100%)` : '100%')};
  position: relative;
  display: flex;
  transform: ${({ current, length }) =>
    `translate3d(calc(${current} * -100% / ${length}), 0, 0)`};
  height: inherit;
  transition: ${({ prev, current, length }) =>
    prev === 1 && current === length - 2
      ? 'transform 0s;'
      : prev === length - 2 && current === 1
      ? 'transform 0s;'
      : 'transform 0.2s;'};
`;
