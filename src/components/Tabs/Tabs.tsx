import React, {
  PropsWithChildren,
  HTMLAttributes,
  useState,
  ReactNode,
} from 'react';
import Tab from './Tab';
import Panel from './Panel';
import styled from '@emotion/styled';
import { TabGlider } from './TabGlider';

interface TabsProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  size?: typeof SIZES[keyof typeof SIZES];
  color?: typeof COLORS[keyof typeof COLORS];
}

interface TabProps {
  title: string;
  children: ReactNode;
}

type TabElement = React.ReactElement<TabProps>;

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

function Tabs({
  children,
  size = SIZES.MEDIUM,
  color = COLORS.PRIMARY,
  ...props
}: TabsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenArr = React.Children.toArray(children);

  const titles = childrenArr.map((child) => {
    const tab = child as TabElement;
    return tab.props.title;
  });

  const panels = childrenArr.map((child) => {
    const tab = child as TabElement;
    return tab.props.children;
  });

  return (
    <>
      <Container size={size} {...props}>
        <Nav>
          {titles?.map((title: string, i: number) => (
            <Tab key={i} onClick={() => setCurrentIndex(i)}>
              {title}
            </Tab>
          ))}
        </Nav>
        {panels?.map((panel: ReactNode, i: number) => (
          <Panel key={i} index={i} currentIndex={currentIndex}>
            {panel}
          </Panel>
        ))}

        <TabGlider color={color} currentIndex={currentIndex} />
      </Container>
    </>
  );
}

function Item(props: TabProps) {
  return <></>;
}

export default Object.assign(Tabs, {
  Item,
});

const Container = styled.div<TabsProps>`
  --tab-width: 150;
  ${({ size }) =>
    (size === SIZES.MEDIUM &&
      `
    --tab-width: 100;
  `) ||
    (size === SIZES.SMALL &&
      `
      --tab-width:50;
  `) ||
    (size === SIZES.LARGE &&
      `
      --tab-width:150;
  `)}

  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0 0 0 / 20%);
`;

const Nav = styled.nav`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0 0 0 / 20%);
`;
