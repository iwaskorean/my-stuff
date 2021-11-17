import { PropsWithChildren, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Container, Nav, TabBox, Glider } from './styles/Tabs';

export interface ITab extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  title: string;
  value: string | number;
}
export interface TabsProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabs: ITab[];
}

export default function Tabs({ tabs, children, ...props }: TabsProps) {
  return (
    <Container tabsLength={tabs.length} {...props}>
      <TabList>
        {children}
      </TabList>
    </Container>
  );
}

export function TabList({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Nav {...props}>{children}</Nav>;
}

export function Tab({ children, ...props }: ITab) {
  return <TabBox {...props}>{children}</TabBox>;
}

export function TabGlider({
  currentIndex,
  ...props
}: {
  currentIndex: number;
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return <Glider currentIndex={currentIndex} {...props} />;
}
