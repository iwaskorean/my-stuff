import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export function TabGlider({
  currentIndex,
  ...props
}: {
  currentIndex: number;
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return <Glider currentIndex={currentIndex} {...props} />;
}

const Glider = styled.span<{ currentIndex: number }>`
  position: absolute;
  top: 50px;
  left: 0;
  height: 10px;
  width: calc(var(--tab-width) * 1px);
  background-color: red;
  transform: translateX(${({ currentIndex }) => currentIndex * 100}%);
  transition: 0.25s ease-out;
`;
