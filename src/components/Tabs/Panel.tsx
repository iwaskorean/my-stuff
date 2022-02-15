import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface PanelProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  index: number;
  currentIndex: number;
}

export default function Panel({
  index,
  currentIndex,
  children,
  ...props
}: PanelProps) {
  return (
    <Container index={index} currentIndex={currentIndex} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ index: number; currentIndex: number }>`
  display: none;
  padding: 1.5rem;
  ${({ index, currentIndex }) =>
    index === currentIndex &&
    `
      display: block;
  `}
  min-height: 200px;
  width: 100%;
`;
