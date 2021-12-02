import { ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled/macro';

interface SlideProps extends ImgHTMLAttributes<HTMLImageElement> {
  content: string;
  active: boolean;
  next: boolean;
  prev: boolean;
}

export default function Slide({
  content,
  active,
  next,
  prev,
  ...props
}: SlideProps) {
  return (
    <Item src={content} active={active} next={next} prev={prev} {...props} />
  );
}

const Item = styled.img<{ active: boolean; next: boolean; prev: boolean }>`
  position: absolute;
  width: 100%;
  opacity: 0;
  top: 0;
  z-index: 2;
  transform: ${({ prev }) => (prev ? 'translateX(-100%)' : '')};
  transform: ${({ next }) => (next ? 'translateX(100%)' : '')};
  transition: transform 0.5s, opacity 0.5s, z-index 0.5s;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    position: relative;
  `}
`;
