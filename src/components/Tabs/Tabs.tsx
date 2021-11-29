import { PropsWithChildren, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { TabList } from './TabList';
import styled from '@emotion/styled';

export interface ITab
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  title: string;
  value: string | number;
}
export interface TabsProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabs: ITab[];
}

export default function Tabs({ tabs, children, ...props }: TabsProps) {
  return (
    <Container tabsLength={tabs.length} {...props}>
      <TabList>{children}</TabList>
    </Container>
  );
}

const Container = styled.div<{ tabsLength: number }>`
  --tab-width: 120;
  width: calc(var(--tab-width) * ${({ tabsLength }) => tabsLength} * 1px);
  margin: 20px;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
`;
