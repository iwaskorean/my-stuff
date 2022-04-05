import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { SlideProps } from './Slide';
import SlideButton from './SlideButton';
import styled from '@emotion/styled';

export interface MultiCarouselProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  viewItemsLength?: number;
}

type SlideElement = ReactElement<SlideProps>;

function MultiCarousel({
  children,
  viewItemsLength = 4,
  ...props
}: MultiCarouselProps) {
  const [current, setCurrent] = useState(0);
  const childrens = React.Children.toArray(children) as SlideElement[];
  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 800);
  }, [current]);

  return (
    <Wrapper {...props}>
      <Inner
        current={current}
        viewItemsLength={viewItemsLength}
        length={childrens.length}
      >
        {childrens.map((children, i: number) => (
          <Slide key={i} current={current} length={childrens.length}>
            {children}
          </Slide>
        ))}
      </Inner>
      {current !== 0 && (
        <SlideButton
          multiCarousel={true}
          prev
          handleSlide={() =>
            !isMoving.current && setCurrent((prev) => prev - 1)
          }
        />
      )}
      {current + 1 < Math.ceil(childrens.length / viewItemsLength) && (
        <SlideButton
          multiCarousel={true}
          next
          handleSlide={() =>
            !isMoving.current && setCurrent((prev) => prev + 1)
          }
        />
      )}
    </Wrapper>
  );
}

export function Item({ children }: SlideProps) {
  return <>{children}</>;
}

export default Object.assign(MultiCarousel, {
  Item,
});

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Inner = styled.div<{
  current: number;
  length: number;
  viewItemsLength: number;
}>`
  --slideWidth: calc(100% / ${({ viewItemsLength }) => viewItemsLength});
  width: calc(var(--slideWidth) * ${({ length }) => length});
  display: flex;
  transform: translate3d(
    calc(
      10% * ${({ viewItemsLength }) => viewItemsLength} *
        ${({ current }) => current * -1}
    ),
    0,
    0
  );
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div<{
  current: number;
  length: number;
}>`
  width: var(--slideWidth);
  padding: 0.5rem;
  font-size: 2rem;
`;
