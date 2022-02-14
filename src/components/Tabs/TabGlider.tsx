import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { COLORS } from './Tabs';

interface TabGliderProps extends HTMLAttributes<HTMLSpanElement> {
  currentIndex: number;
  width?: string;
}

export function TabGlider({ currentIndex, width, ...props }: TabGliderProps) {
  return <Glider width={width} currentIndex={currentIndex} {...props} />;
}

const Glider = styled.span<TabGliderProps>`
  position: absolute;
  width: calc(var(--tab-width) * 1px);
  top: 50px;
  left: 0;
  height: 10px;
  background-color: ${({ color, theme }) =>
    color === COLORS.PRIMARY && theme.color.primary};
  transform: translateX(${({ currentIndex }) => currentIndex * 100}%);
  transition: 0.25s ease-out;
`;
