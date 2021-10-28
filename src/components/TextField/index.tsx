import { Input } from './styles/TextField';

export interface TextFieldProps {
  scale?: 'normal' | 'large';
  placeholder?: string;
  fontSize?: 'normal' | 'large';
  fullWidth?: boolean;
}

export default function TextField({
  scale = 'normal',
  placeholder = '',
  fontSize = 'normal',
  fullWidth = false,
}: TextFieldProps) {
  return (
    <Input
      placeholder={placeholder}
      scale={scale}
      fontSize={fontSize}
      fullWidth={fullWidth}
    />
  );
}
