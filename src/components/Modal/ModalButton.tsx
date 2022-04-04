import { MdClose } from 'react-icons/md';
import styled from '@emotion/styled/macro';
import { ButtonHTMLAttributes } from 'react';

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleShow(): void;
}

export default function ModalButton({
  handleShow,
  ...props
}: ModalButtonProps) {
  return (
    <Button onClick={() => handleShow()} {...props}>
      <CloseIcon />
    </Button>
  );
}

const Button = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  display: block;
  outline: none;
  background: none;
  border: none;
`;

const CloseIcon = styled(MdClose)`
  margin: calc(var(--padding) - 10px);
  font-size: ${({ theme }) => theme.fontSize.size30}px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
`;
