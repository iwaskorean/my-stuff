import { PropsWithChildren, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export function TabList({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Nav {...props}>{children}</Nav>;
}

const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: #fff;
`;
