import { PropsWithChildren, HTMLAttributes } from 'react';
import { Container, Nav, Tab, Content, Glider } from './styles/Tabs';

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

Tabs.Nav = function TabsNav({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Nav {...props}>{children}</Nav>;
};

Tabs.Tab = function TabsTab({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Tab {...props}>{children}</Tab>;
};

Tabs.TabContent = function TabContent({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Content {...props}>{children}</Content>;
};

Tabs.Glider = function TabsGlider({
  currentIndex,
  ...props
}: {
  currentIndex: number;
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return <Glider currentIndex={currentIndex} {...props} />;
};
