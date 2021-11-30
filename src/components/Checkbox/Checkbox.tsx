import {
  ChangeEvent,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react';
import styled from '@emotion/styled';

export interface ICheckBox
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  index: number;
  label: string;
  handleCheckItem: (id: number, isChecked: boolean) => void;
}

export default function Checkbox({
  label,
  index,
  handleCheckItem,
  ...props
}: ICheckBox) {
  const [checked, setChecked] = useState(false);

  const handleCheck = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    handleCheckItem(index, target.checked);
  };

  return (
    <Container>
      <Input
        id={label}
        type='checkbox'
        checked={checked}
        onChange={handleCheck}
        {...props}
      />
      <Label htmlFor={label}>
        <LabelText>{label}</LabelText>
      </Label>
    </Container>
  );
}

const Container = styled.span`
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 20px;
  padding: 3px;
`;

const Input = styled.input`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

const LabelText = styled.span``;
