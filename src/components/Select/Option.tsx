import { OptionHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface OptionProps
  extends PropsWithChildren<OptionHTMLAttributes<HTMLOptionElement>> {}

export default function Option({ children, ...props }: OptionProps) {
  return <StyledOption {...props}>{children}</StyledOption>;
}

const StyledOption = styled.option``;
