import { PIXEL_SIZES, StylingProps } from './Spinner';
import { css, keyframes } from '@emotion/react';
import { VARIANTS, SIZES } from '../shared';
import styled from '@emotion/styled';

export default function Border({ size, variant, inline }: StylingProps) {
  return <BorderSpinner size={size} variant={variant} inline={inline} />;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const setSizeStyling = (
  size: typeof PIXEL_SIZES[keyof typeof PIXEL_SIZES]
) => css`
  width: ${size}px;
  height: ${size}px;
  border-width: ${size / 6}px;
`;

const BorderSpinner = styled.div<StylingProps>`
  ${({ size }) => size === SIZES.DEFAULT && setSizeStyling(PIXEL_SIZES.DEFAULT)}
  
  ${({ size }) => size === SIZES.SMALL && setSizeStyling(PIXEL_SIZES.SMALL)}
  
  ${({ size }) => size === SIZES.LARGE && setSizeStyling(PIXEL_SIZES.LARGE)} 
  
  ${({ variant, theme }) =>
    variant === VARIANTS.PRIMARY && `border-color: ${theme.color.primary}`};
  
  ${({ variant, theme }) =>
    variant === VARIANTS.SECONDARY && `border-color: ${theme.color.secondary}`};
  
  ${({ variant, theme }) =>
    variant === VARIANTS.TERTIARY && `border-color: ${theme.color.tertiary}`};
  
  border-right-color: transparent;
  border-style: solid;
  border-radius: 50%;
  background: transparent;
  ${({ inline }) => inline && `display: inline-block`};
  animation: ${spin} 1.7s linear infinite;
}`;
