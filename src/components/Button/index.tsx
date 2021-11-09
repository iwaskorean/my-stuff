import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonContent } from './styles/Button';

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export default function Button({
  backgroundColor,
  size,
  label,
  ...props
}: ButtonProps) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
  };

  return (
    <ButtonContent style={style} {...props}>
      {label}
    </ButtonContent>
  );
}
