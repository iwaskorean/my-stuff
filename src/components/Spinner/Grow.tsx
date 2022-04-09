import { css, keyframes } from '@emotion/react';
import { VARIANTS, SIZES } from '../shared';
import { PIXEL_SIZES, StylingProps } from './Spinner';
import styled from '@emotion/styled';

export default function Grow({ size, variant, inline }: StylingProps) {
  return <GrowSpinner size={size} variant={variant} inline={inline} />;
}

const grow = keyframes`
  0% { 
    transform: scale(0.1); 
    opacity: 1; 
  }
  100% { 
    transform: scale(0.9); 
    opacity: 0.2; 
  }
`;

const setSizeStyle = (
  size: typeof PIXEL_SIZES[keyof typeof PIXEL_SIZES]
) => css`
  width: ${size}px;
  height: ${size}px;
`;

const GrowSpinner = styled.div<StylingProps>`
  ${({ size }) => size === SIZES.DEFAULT && setSizeStyle(PIXEL_SIZES.DEFAULT)}
  
  ${({ size }) => size === SIZES.LARGE && setSizeStyle(PIXEL_SIZES.LARGE)}
  
  ${({ size }) => size === SIZES.SMALL && setSizeStyle(PIXEL_SIZES.SMALL)}

  ${({ variant, theme }) =>
    variant === VARIANTS.PRIMARY && `background-color: ${theme.color.primary}`};
  
  ${({ variant, theme }) =>
    variant === VARIANTS.SECONDARY &&
    `background-color: ${theme.color.secondary}`};
  
  ${({ variant, theme }) =>
    variant === VARIANTS.TERTIARY &&
    `background-color: ${theme.color.tertiary}`};
  
  border-radius: 50%;
  ${({ inline }) => inline && `display: inline-block`};
  animation: ${grow} 0.7s linear infinite;
}`;
