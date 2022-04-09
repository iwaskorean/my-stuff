import { HTMLAttributes } from 'react';
import { TAB_SIZE } from './Tabs';
import styled from '@emotion/styled';

interface TabGliderProps extends HTMLAttributes<HTMLSpanElement> {
  currentIndex: number;
  width?: string;
  tabSize: typeof TAB_SIZE[keyof typeof TAB_SIZE];
}

export default function TabGlider({
  currentIndex,
  width,
  tabSize,
  ...props
}: TabGliderProps) {
  return <Glider tabSize={tabSize} currentIndex={currentIndex} {...props} />;
}

const Glider = styled.span<{
  currentIndex: number;
  tabSize: typeof TAB_SIZE[keyof typeof TAB_SIZE];
}>`
  position: absolute;
  ${({ tabSize }) => tabSize === TAB_SIZE.SMALL && `width: 50px`};
  ${({ tabSize }) => tabSize === TAB_SIZE.MEDIUM && `width: 100px`};
  ${({ tabSize }) => tabSize === TAB_SIZE.LARGE && `width: 150px`};

  background-color: ${({ theme }) => theme.color.primary};

  top: 57px;
  left: 0;
  height: 3px;
  transform: translate3d(${({ currentIndex }) => currentIndex * 100}%, 0, 0);
  transition: 0.25s ease-out;
  opacity: 0.8;
  border-radius: 3px;
`;
