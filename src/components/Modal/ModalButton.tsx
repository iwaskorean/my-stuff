import styled from '@emotion/styled';

interface ModalButtonProps {
  children: string;
  onSetVisible(active: boolean): void;
}

export default function ModalButton({
  children,
  onSetVisible,
}: ModalButtonProps) {
  return <Button onClick={() => onSetVisible(false)}>{children}</Button>;
}

const Button = styled.button`
  position: absolute;
  font-size: 1rem;
  right: 0px;
  top: 0px;
  cursor: pointer;
  display: block;
  z-index: 10;
`;
