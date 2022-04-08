import { COLORS, SIZES } from '../shared';
import Grow from './Grow';
import Border from './Border';
import styled from '@emotion/styled';

export interface SpinnerProps {
  type?: typeof TYPES[keyof typeof TYPES];
  size?: typeof SIZES[keyof typeof SIZES];
  color?: typeof COLORS[keyof typeof COLORS];
  inline?: boolean;
}

export interface StylingProps {
  size: typeof SIZES[keyof typeof SIZES];
  color: typeof COLORS[keyof typeof COLORS];
  inline: boolean;
}

export const PIXEL_SIZES = {
  SMALL: 30,
  DEFAULT: 50,
  LARGE: 70,
} as const;

const TYPES = {
  BORDER: 'border',
  GROW: 'grow',
} as const;

export default function Spinner({
  type = TYPES.BORDER,
  size = SIZES.DEFAULT,
  color = COLORS.PRIMARY,
  inline = false,
}: SpinnerProps) {
  return (
    <Wrapper>
      {type === TYPES.BORDER && (
        <Border size={size} color={color} inline={inline} />
      )}
      {type === TYPES.GROW && (
        <Grow size={size} color={color} inline={inline} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.span``;
