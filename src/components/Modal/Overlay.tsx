import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onSetVisible(): void;
  opaque: boolean;
}

export default function Overlay({
  show,
  opaque,
  onSetVisible,
  ...props
}: OverlayProps) {
  return (
    <Wrapper opaque={opaque} show={show} onClick={onSetVisible} {...props} />
  );
}

const Wrapper = styled.div<{ show: boolean; opaque: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ opaque }) => (opaque ? 1 : 0.3)});
`;
