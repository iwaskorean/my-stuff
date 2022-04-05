import React, {
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import Slide, { SlideProps } from './Slide';
import SlideButton from './SlideButton';
import Indicators from './Indicators';
import styled from '@emotion/styled';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  color?: typeof COLORS[keyof typeof COLORS];
  indicators?: boolean;
  buttons?: boolean;
}

export const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export type SlideElement = ReactElement<SlideProps>;

function Carousel({
  color = 'primary',
  indicators = true,
  buttons = true,
  children,
  ...props
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const isMoving = useRef(false);

  const childrens = React.Children.toArray(children) as SlideElement[];
  const slides = childrens.filter((children) => children.type === Item);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [current]);

  const handlePrev = () => {
    if (!isMoving.current) {
      if (current === 0) {
        setCurrent(slides.length - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const handleNext = () => {
    if (!isMoving.current) {
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  return (
    <Container color={color} {...props}>
      <Inner length={slides.length} current={current}>
        {slides.map((slide, i) => {
          return <Slide key={i}>{slide}</Slide>;
        })}
      </Inner>

      {slides.length > 1 && indicators && (
        <Indicators
          length={slides.length}
          current={current}
          handleCurrent={setCurrent}
        />
      )}
      {slides.length > 1 && buttons && (
        <>
          <SlideButton prev handleSlide={handlePrev} />
          <SlideButton next handleSlide={handleNext} />
        </>
      )}
    </Container>
  );
}

export function Item({ children }: SlideProps) {
  return <>{children}</>;
}

export default Object.assign(Carousel, {
  Item,
});

const Container = styled.div<{ color: typeof COLORS[keyof typeof COLORS] }>`
  --color: ${({ theme }) => theme.color.primary};
  ${({ color, theme }) =>
    color === COLORS.SECONDARY &&
    `
      --color: ${theme.color.secondary}
  `};
  ${({ color, theme }) =>
    color === COLORS.TERTIARY &&
    `
      --color: ${theme.color.gray600}
  `};

  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Inner = styled.div<{ length: number; current: number }>`
  width: ${({ length }) => (length ? `calc(${length} * 100%)` : '100%')};
  height: 100%;
  position: relative;
  display: flex;
  transform: ${({ current, length }) =>
    `translate3d(calc(${current} * -100% / ${length}), 0, 0)`};
  transition: transform 0.3s;
`;
