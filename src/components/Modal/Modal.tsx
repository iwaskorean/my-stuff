import Overlay from './Overlay';
import ModalButton from './ModalButton';
import styled from '@emotion/styled';
import { createPortal } from 'react-dom';

export interface ModalProps {
  visible: boolean;
  onSetVisible(active: boolean): void;
  children: string;
}

export default function Modal({ visible, onSetVisible, children }: ModalProps) {
  return createPortal(
    <>
      <Overlay visible={visible} onSetVisible={onSetVisible} />
      <Container visible={visible}>
        <ModalButton onSetVisible={onSetVisible}>close</ModalButton>
        <ModalContent>{children}</ModalContent>
      </Container>
    </>,
    document.body
  );
}

const Container = styled.div<{ visible: boolean }>`
  height: 300px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 45px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`;

const ModalContent = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
