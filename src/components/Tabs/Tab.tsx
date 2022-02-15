import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface ItemProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  index: number;
  currentIndex: number;
  disabled?: boolean;
}

export default function Tab({ disabled, children, ...props }: ItemProps) {
  return (
    <TabButton disabled={disabled} {...props}>
      {children}
    </TabButton>
  );
}

const TabButton = styled.button<ItemProps>`
  --border-style: 0.4px solid ${({ theme }) => theme.color.gray200};
  width: calc(var(--tab-width) * 1px);
  padding: 0 5px;
  color: ${({ index, currentIndex, theme }) =>
    index === currentIndex ? 'var(--tab-color)' : theme.color.black};
  height: 60px;
  text-align: center;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed !important' : 'pointer'};
  transition: color 0.15s ease-in;
  background: ${({ theme }) => theme.color.white};
  outline: 0;
  border: none;
  ${({ theme }) => theme.font.size16pt};
  &:hover {
    color: var(--tab-color);
  }
  ${({ disabled, theme }) =>
    disabled &&
    `
    color: ${theme.color.gray300};
    &:hover {
      color: ${theme.color.gray300};
    }
  `}
`;
