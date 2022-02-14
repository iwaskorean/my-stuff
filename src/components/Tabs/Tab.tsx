import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ItemProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Tab({ children, ...props }: ItemProps) {
  return <TabButton {...props}>{children}</TabButton>;
}

const TabButton = styled.button`
  width: calc(var(--tab-width) * 1px);
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in;
  background: #fff;
  outline: 0;
  border: none;
`;
