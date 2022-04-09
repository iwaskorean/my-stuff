import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { TAB_SIZE } from './Tabs';
import styled from '@emotion/styled';

interface ItemProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  index: number;
  currentIndex: number;
  disabled?: boolean;
  tabSize: string;
  length: number;
}

export default function Tab({
  disabled = false,
  index,
  tabSize,
  length,
  children,
  currentIndex,
  ...props
}: ItemProps) {
  return (
    <TabButton
      disabled={disabled}
      index={index}
      currentIndex={currentIndex}
      tabSize={tabSize}
      length={length}
      {...props}
    >
      {children}
    </TabButton>
  );
}

interface StylingProps {
  index: number;
  currentIndex: number;
  disabled: boolean;
  tabSize: string;
  length: number;
}

const TabButton = styled.button<StylingProps>`
  ${({ theme }) => theme.font.size16pt};
  background: ${({ theme }) => theme.color.white};
  padding: 0 5px;
  height: 60px;
  text-align: center;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed !important' : 'pointer'};
  transition: color 0.15s ease-in;
  outline: 0;
  border: none;

  ${({ tabSize }) => tabSize === TAB_SIZE.SMALL && `width: 50px;`}
  ${({ tabSize }) => tabSize === TAB_SIZE.MEDIUM && `width: 100px;`}
  ${({ tabSize }) => tabSize === TAB_SIZE.LARGE && `width: 150px;`}

  $:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  ${({ index, currentIndex, theme }) =>
    index !== currentIndex && `color: ${theme.color.black}`}

  ${({ disabled, theme }) =>
    disabled &&
    `
    color: ${theme.color.gray300};
    &:hover {
      color: ${theme.color.gray300};
    }
  `}
`;
