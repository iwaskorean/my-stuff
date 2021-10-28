import styled from '@emotion/styled';

export interface InputProps {
  scale: string;
  fontSize: string;
  fullWidth: boolean;
}

export const Input = styled.input<InputProps>`
  font-size: ${({ fontSize }) => (fontSize === 'normal' ? '16px' : '20px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '280px')};
  padding: ${({ scale }) => (scale === 'normal' ? '16px' : '32px')};
  margin: 16px;
  outline: 0;
  background-color: #ffffff00;
  border: 1px solid #00000012;
  border-radius: 4px;
  color: #000000e6;

  &::placeholder {
    size: 12px;
    color: #0000008f;
  }
`;
