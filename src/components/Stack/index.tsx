import { Frame } from './styles/Stack';

export interface StackProps {
  children?: any;
  spacing?: number;
  direction?: 'row' | 'column';
  wrap: 'wrap' | 'nowrap';
  numberOfChildrens?: number;
}

export default function Stack({
  children,
  spacing = 2,
  direction = 'row',
  wrap = 'wrap',
}: StackProps) {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexDirection: direction,
    FlexWrap: wrap,
  };

  return <Frame style={style}>{children}</Frame>;
}
