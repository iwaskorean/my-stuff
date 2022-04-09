import { VARIANTS, SIZES } from '../shared';
import Grow from './Grow';
import Border from './Border';
import styled from '@emotion/styled';

export interface SpinnerProps {
  animation?: typeof ANIMATIONS[keyof typeof ANIMATIONS];
  size?: typeof SIZES[keyof typeof SIZES];
  variant?: typeof VARIANTS[keyof typeof VARIANTS];
  inline?: boolean;
}

export interface StylingProps {
  size: typeof SIZES[keyof typeof SIZES];
  variant: typeof VARIANTS[keyof typeof VARIANTS];
  inline: boolean;
}

export const PIXEL_SIZES = {
  SMALL: 30,
  DEFAULT: 50,
  LARGE: 70,
} as const;

const ANIMATIONS = {
  BORDER: 'border',
  GROW: 'grow',
} as const;

export default function Spinner({
  animation = ANIMATIONS.BORDER,
  size = SIZES.DEFAULT,
  variant = VARIANTS.PRIMARY,
  inline = false,
}: SpinnerProps) {
  return (
    <Wrapper>
      {animation === ANIMATIONS.BORDER && (
        <Border size={size} variant={variant} inline={inline} />
      )}
      {animation === ANIMATIONS.GROW && (
        <Grow size={size} variant={variant} inline={inline} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.span``;
