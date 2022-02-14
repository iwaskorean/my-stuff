import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface PanelProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  index: number;
  currentIndex: number;
}

export default function Panel({ index, currentIndex, children }: PanelProps) {
  return (
    <Container index={index} currentIndex={currentIndex}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ index: number; currentIndex: number }>`
  display: none;
  ${({ index, currentIndex }) =>
    index === currentIndex &&
    `
      display: block;
    `}
`;
