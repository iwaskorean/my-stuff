import { InputHTMLAttributes } from 'react';
import { VARIANTS } from '../shared';
import styled from '@emotion/styled';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: typeof VARIANTS[keyof typeof VARIANTS];
  id: string;
  label: string;
  hideLabel?: boolean;
}

export default function Checkbox({
  variant = VARIANTS.PRIMARY,
  id,
  label,
  hideLabel = false,
  ...props
}: CheckboxProps) {
  return (
    <Container>
      <Input variant={variant} id={id} type='checkbox' {...props} />
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
  font-weight: ${({ theme }) => theme.fontWeight.regular};
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

const Input = styled.input<{ variant: typeof VARIANTS[keyof typeof VARIANTS] }>`
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
  }

  &:checked {
    &::before {
      transform: scale(1);
    }
  }

  ${({ variant, theme }) =>
    variant === VARIANTS.PRIMARY &&
    `
    &::before {
      box-shadow: inset 1rem 1rem ${theme.color.primary};
    }
    &:checked {
      border: 0.15rem solid ${theme.color.primary};
    }  
  `}

  ${({ variant, theme }) =>
    variant === VARIANTS.SECONDARY &&
    `
    &::before {
      box-shadow: inset 1rem 1rem ${theme.color.secondary};
    }
    &:checked {
      border: 0.15rem solid ${theme.color.secondary};
    }  
  `}

  ${({ variant, theme }) =>
    variant === VARIANTS.TERTIARY &&
    `
    &::before {
      box-shadow: inset 1rem 1rem ${theme.color.tertiary};
    }
    &:checked {
      border: 0.15rem solid ${theme.color.tertiary};
    }  
  `}
`;
