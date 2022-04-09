import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  handleShow(): void;
  opaque: boolean;
}

export default function Overlay({
  show,
  opaque,
  handleShow,
  ...props
}: OverlayProps) {
  return (
    <Wrapper opaque={opaque} show={show} onClick={handleShow} {...props} />
  );
}

const Wrapper = styled.div<{ show: boolean; opaque: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, ${({ opaque }) => (opaque ? 1 : 0.3)});

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
