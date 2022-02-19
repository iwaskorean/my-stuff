import { createPortal } from 'react-dom';
import { HtmlHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import Overlay from './Overlay';
import ModalButton from './ModalButton';
import styled from '@emotion/styled/macro';
import React from 'react';

export interface ModalProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {
  show: boolean;
  opaque?: boolean;
  overlay?: boolean;
  handleShow(): void;
}

type ModalChildrenElement = ReactElement<ModalProps>;

function Modal({
  show,
  opaque = false,
  overlay = true,
  handleShow,
  children,
  ...props
}: ModalProps) {
  const childrens = React.Children.toArray(children) as ModalChildrenElement[];
  const header = childrens
    .filter(({ type }) => type === Header)
    .map(({ props: { children } }) => children);
  const body = childrens
    .filter(({ type }) => type === Body)
    .map(({ props: { children } }) => children);

  return createPortal(
    <Wrapper {...props}>
      {overlay && (
        <Overlay opaque={opaque} show={show} onSetVisible={handleShow} />
      )}

      <Container show={show}>
        <ModalContent>
          <StyledHeader>{header}</StyledHeader>
          <StyledBody>{body}</StyledBody>
        </ModalContent>
        <ModalButton onSetVisible={handleShow} />
      </Container>
    </Wrapper>,
    document.body
  );
}

function Header({ children }: { children: string }) {
  return <></>;
}

function Body({ children }: { children: string }) {
  return <></>;
}

export default Object.assign(Modal, {
  Header,
  Body,
});

const Wrapper = styled.section`
  --padding: 15px;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
`;

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 60%;
  min-width: 300px;
  height: auto;
  min-height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0 0 0 / 0.3);
`;

const ModalContent = styled.div`
  font-size: 2rem;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
`;

const StyledHeader = styled.h1`
  padding: 0 10px 5px 0;
  font-size: ${({ theme }) => theme.fontSize.size24}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-bottom: 2px solid ${({ theme }) => theme.color.gray300};
`;

const StyledBody = styled.p`
  font-size: ${({ theme }) => theme.fontSize.size16}px;
  margin: 10px 0;
`;
