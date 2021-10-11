import { Content, Group } from './styles/Input';

export interface InputProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  handleChange?: () => void;
}

function Input({ placeholder, size, handleChange }: InputProps) {
  let scale = 1.5;
  if (size === 'sm') scale = 0.5;
  if (size === 'lg') scale = 3;

  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };

  return (
    <Content onChange={handleChange} placeholder={placeholder} style={style} />
  );
}

Input.Group = function InputGroup({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};

export default Input;
