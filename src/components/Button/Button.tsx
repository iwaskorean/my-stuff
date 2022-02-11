import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from 'react';
import styled from '@emotion/styled';

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  disabled?: boolean;
  variant?: typeof VARIANTS[keyof typeof VARIANTS];
  size?: typeof SIZES[keyof typeof SIZES];
  icon?: ReactNode;
}

export const SIZES = {
  SMALL: 'small',
  DEFAULT: 'medium',
} as const;

export const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DANGER: 'danger',
  INVERSE: 'inverse',
  OUTLINE: 'outline',
} as const;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      variant = VARIANTS.PRIMARY,
      size = SIZES.DEFAULT,
      icon,
      ...props
    },
    ref
  ) => {
    return icon ? (
      <IconButton
        variant={variant}
        disabled={disabled}
        size={size}
        {...props}
        // @ts-ignore
        ref={ref}
      >
        <Group>
          {icon} {children}
        </Group>
      </IconButton>
    ) : (
      <StyledButton
        variant={variant}
        disabled={disabled}
        size={size}
        {...props}
        // @ts-ignore
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;

const StyledButton = styled.button<ButtonProps>`
  color: ${({ theme }) => theme.color.white};
  outline: 0;
  border: none;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 1px 2px rgba(0 0 0 / 20%);
  cursor: pointer;
  font-size: ${({ size, theme }) =>
    size === 'small' ? theme.fontSize.size12 : theme.fontSize.size16}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  padding: ${({ size }) => (size === SIZES.SMALL ? '7px 14px' : '13px 20px')};
  transition: all 0.2s ease-in-out;
  transform: translate3d(0,0,0);
  &:hover {
    transform: translate3d(0,-2px,0);
    box-shadow: 0px 2px 6px rgba(0 0 0 / 30%);
    opacity: 0.8;
  }
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed !important;
    opacity: 0.5;
    &:hover {
      box-shadow: none;
      transform: none;
      opacity: 0.5;
    }
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.DANGER &&
    `
    background-color: ${theme.color.red600};
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.SECONDARY &&
    `
    background-color: ${theme.color.secondary};
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.TERTIARY &&
    `
    background-color: ${theme.color.gray300};
    color: ${theme.color.gray700};
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.OUTLINE &&
    `
    border: 1.5px ${theme.color.primary} solid;
    background-color: ${theme.color.white};
    color: ${theme.color.primary};
  `}
  ${({ variant, theme }) =>
    variant === VARIANTS.INVERSE &&
    `
    background-color: transparent;
    color: ${theme.color.primary};
    font-weihgt: ${theme.fontWeight.medium}
    `}
}`;

const IconButton = styled(StyledButton)``;

const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 3px;
    width: 100%;
  }
`;
