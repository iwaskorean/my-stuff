import React from 'react';
import { createPortal } from 'react-dom';
import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useEffect,
} from 'react';
import Overlay from './Overlay';
import ModalButton from './ModalButton';
import styled from '@emotion/styled/macro';

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
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: hidden;
      width: 100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  });

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
        <Overlay opaque={opaque} show={show} handleShow={handleShow} />
      )}

      <Container show={show}>
        <ModalContent>
          <StyledHeader>{header}</StyledHeader>
          <StyledBody>{body}</StyledBody>
        </ModalContent>
        <ModalButton handleShow={handleShow} />
      </Container>
    </Wrapper>,
    document.body
  );
}

function Header({ children }: { children: string }) {
  return <>{children}</>;
}

function Body({ children }: { children: string }) {
  return <>{children}</>;
}

export default Object.assign(Modal, {
  Header,
  Body,
});

const Wrapper = styled.section`
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
  position: fixed;
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
  padding: 15px;
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
