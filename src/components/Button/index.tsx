import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button``;
