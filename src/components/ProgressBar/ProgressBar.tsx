import { HTMLAttributes } from 'react';
import { VARIANTS } from '../shared';
import styled from '@emotion/styled';

export interface ProgressBarProps extends HTMLAttributes<HTMLSpanElement> {
  completed: number;
  variant?: typeof VARIANTS[keyof typeof VARIANTS];
  max?: number;
}

export default function ProgressBar({
  completed,
  variant = VARIANTS.PRIMARY,
  max = 100,
  ...props
}: ProgressBarProps) {
  return (
    <Container>
      <Gauge
        variant={variant}
        completed={completed <= 0 ? 0 : completed >= max ? max : completed}
        max={max}
        {...props}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.gray200};
  border-radius: 8px;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const Gauge = styled.span<{
  variant: typeof VARIANTS[keyof typeof VARIANTS];
  completed: number;
  max: number;
}>`
  width: ${({ completed, max }) => (completed / max) * 100}%;
  display: block;
  height: 100%;
  height: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary};
  ${({ variant, theme }) =>
    variant === VARIANTS.SECONDARY &&
    `
    background-color: ${theme.color.secondary};
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.TERTIARY &&
    `
    background-color: ${theme.color.tertiary};
  `}

  transition: width 0.2s ease-in-out;
  overflow: hidden;
`;
