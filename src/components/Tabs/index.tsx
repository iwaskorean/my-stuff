import { PropsWithChildren, HTMLAttributes } from 'react';
import { Container, Nav, TabBox, Content, Glider } from './styles/Tabs';

export interface TabsProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabsLength?: number;
}

export default function Tabs({ tabsLength, children, ...props }: TabsProps) {
  return (
    <Container tabsLength={tabsLength} {...props}>
      {children}
    </Container>
  );
}

export function TabList({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Nav {...props}>{children}</Nav>;
}

export function Tab({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <TabBox {...props}>{children}</TabBox>;
}

export function TabContent({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Content {...props}>{children}</Content>;
}

export function TabGlider({
  currentIndex,
  ...props
}: {
  currentIndex: number;
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return <Glider currentIndex={currentIndex} {...props} />;
}
