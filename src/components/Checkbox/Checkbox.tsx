import { InputHTMLAttributes } from 'react';
import { COLORS } from '../shared';
import styled from '@emotion/styled';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: typeof COLORS[keyof typeof COLORS];
  id: string;
  label: string;
  hideLabel?: boolean;
}

export default function Checkbox({
  color = 'primary',
  id,
  label,
  hideLabel = false,
  ...props
}: CheckboxProps) {
  return (
    <Container>
      <Input color={color} id={id} type='checkbox' {...props} />
      <Label htmlFor={id} hideLabel={hideLabel}>
        {label}
      </Label>
    </Container>
  );
}

const Container = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Label = styled.label<{ hideLabel: boolean }>`
  ${({ theme }) => theme.font.size16pt};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-left: 0.25rem;

  ${({ hideLabel }) =>
    hideLabel &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    width: 1px !important;
  `};
`;

const Input = styled.input<{ color: typeof COLORS[keyof typeof COLORS] }>`
  --color: ${({ theme, color }) =>
    color === COLORS.PRIMARY
      ? theme.color.primary
      : color === COLORS.SECONDARY
      ? theme.color.secondary
      : theme.color.tertiary};

  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0;
  font: inherit;

  width: 1.15rem;
  height: 1.15rem;
  border: 0.15rem solid ${({ theme }) => theme.color.gray400};
  border-radius: 0.15rem;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  
  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: transform 0.12s ease-in-out;
    box-shadow: inset 1rem 1rem var(--color)};
  }
  
  &:checked {
    border: 0.15rem solid var(--color);
    &::before {
      transform: scale(1);
    }
  }
  
`;
