import { css, keyframes } from '@emotion/react';
import { COLORS, SIZES } from '../shared';
import { PIXEL_SIZES, StylingProps } from './Spinner';
import styled from '@emotion/styled';

export default function Grow({ size, color, inline }: StylingProps) {
  return <GrowSpinner size={size} color={color} inline={inline} />;
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

  ${({ color, theme }) =>
    color === COLORS.PRIMARY && `background-color: ${theme.color.primary}`};
  
  ${({ color, theme }) =>
    color === COLORS.SECONDARY && `background-color: ${theme.color.secondary}`};
  
  ${({ color, theme }) =>
    color === COLORS.TERTIARY && `background-color: ${theme.color.tertiary}`};
  
  border-radius: 50%;
  ${({ inline }) => inline && `display: inline-block`};
  animation: ${grow} 0.7s linear infinite;
}`;
