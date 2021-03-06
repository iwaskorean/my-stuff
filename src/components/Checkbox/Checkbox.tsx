import { InputHTMLAttributes } from 'react';
import { VARIANTS } from '../shared';
import { selectionInputStyling } from '../shared/styles';
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
    <Wrapper>
      <Input variant={variant} id={id} type='checkbox' {...props} />
      <Label htmlFor={id} hideLabel={hideLabel}>
        {label}
      </Label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Label = styled.label<{ hideLabel: boolean }>`
  ${({ theme }) => theme.font.size16pt};
  margin-left: 0.25rem;
  cursor: pointer;

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
  ${selectionInputStyling}
  border-radius: 0.15rem;

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
