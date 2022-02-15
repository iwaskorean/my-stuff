import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ItemProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  index: number;
  currentIndex: number;
}

export default function Tab({ children, ...props }: ItemProps) {
  return <TabButton {...props}>{children}</TabButton>;
}

const TabButton = styled.button<ItemProps>`
  --border-style: 0.4px solid ${({ theme }) => theme.color.gray200};
  width: calc(var(--tab-width) * 1px);
  color: ${({ index, currentIndex, theme }) =>
    index === currentIndex ? 'var(--tab-color)' : theme.color.black};
  height: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in;
  background: ${({ theme }) => theme.color.white};
  outline: 0;
  border: none;
  ${({ theme }) => theme.font.size16pt};
  &:hover {
    color: var(--tab-color);
  }
`;
