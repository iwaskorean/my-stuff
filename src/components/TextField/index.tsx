import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { Input } from './styles/TextField';

export interface TextFieldProps
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  scale?: 'normal' | 'large';
  fontSize?: 'normal' | 'large';
  fullWidth?: boolean;
}

export default function TextField({
  scale = 'normal',
  fontSize = 'normal',
  fullWidth = false,
  ...props
}: TextFieldProps) {
  return (
    <Input scale={scale} fontSize={fontSize} fullWidth={fullWidth} {...props} />
  );
}
