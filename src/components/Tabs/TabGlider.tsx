import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface TabGliderProps extends HTMLAttributes<HTMLSpanElement> {
  currentIndex: number;
  width?: string;
}

export default function TabGlider({
  currentIndex,
  width,
  ...props
}: TabGliderProps) {
  return <Glider currentIndex={currentIndex} {...props} />;
}

const Glider = styled.span<{ currentIndex: number }>`
  position: absolute;
  width: calc(var(--tab-width) * 1px);
  background-color: var(--tab-color);
  top: 53px;
  left: 0;
  height: 7px;
  transform: translate3d(${({ currentIndex }) => currentIndex * 100}%, 0, 0);
  transition: 0.25s ease-out;
  opacity: 0.8;
  border-radius: 3px;
`;
