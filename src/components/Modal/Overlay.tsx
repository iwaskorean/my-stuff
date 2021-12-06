import styled from '@emotion/styled';

interface OverlayProps {
  visible: boolean;
  onSetVisible(active: boolean): void;
}

export default function Overlay({ visible, onSetVisible }: OverlayProps) {
  return <Wrapper visible={visible} onClick={() => onSetVisible(false)} />;
}

const Wrapper = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;
