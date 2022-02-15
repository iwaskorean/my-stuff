import React, {
  PropsWithChildren,
  HTMLAttributes,
  useState,
  ReactNode,
} from 'react';
import Tab from './Tab';
import Panel from './Panel';
import TabGlider from './TabGlider';
import styled from '@emotion/styled';

interface TabsProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabSize?: typeof TAB_SIZE[keyof typeof TAB_SIZE];
  color?: typeof COLORS[keyof typeof COLORS];
  disabled?: boolean;
}

interface TabProps {
  title: string;
  children: ReactNode;
}

type TabElement = React.ReactElement<TabProps>;

export const TAB_SIZE = {
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
  tabSize = TAB_SIZE.MEDIUM,
  color = COLORS.PRIMARY,
  disabled = false,
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
      <Container tabSize={tabSize} color={color} {...props}>
        <Nav>
          <Inner length={titles.length}>
            {titles?.map((title: string, i: number) => (
              <Tab
                key={i}
                index={i}
                currentIndex={currentIndex}
                onClick={() => setCurrentIndex(i)}
              >
                {title}
              </Tab>
            ))}
            {titles.length > 0 && (
              <TabGlider color={color} currentIndex={currentIndex} />
            )}
          </Inner>
        </Nav>
        {panels?.map((panel: ReactNode, i: number) => (
          <Panel key={i} index={i} currentIndex={currentIndex}>
            {panel}
          </Panel>
        ))}
      </Container>
    </>
  );
}

export function Item(props: TabProps) {
  return <></>;
}

export default Object.assign(Tabs, {
  Item,
});

const Container = styled.div<TabsProps>`
  ${({ tabSize }) =>
    (tabSize === TAB_SIZE.MEDIUM &&
      `
    --tab-width: 100;
  `) ||
    (tabSize === TAB_SIZE.SMALL &&
      `
      --tab-width: 50;
  `) ||
    (tabSize === TAB_SIZE.LARGE &&
      `
      --tab-width: 150;
  `)};

  ${({ color, theme }) =>
    (color === COLORS.PRIMARY &&
      `
      --tab-color: ${theme.color.primary};
`) ||
    (color === COLORS.SECONDARY &&
      `
      --tab-color: ${theme.color.secondary};
`) ||
    (color === COLORS.TERTIARY &&
      `
      --tab-color: ${theme.color.gray200};
`)};

  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0 0 0 / 20%);
`;

const Nav = styled.nav`
  overflow-x: scroll;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 2px solid ${({ theme }) => theme.color.gray200};
`;

const Inner = styled.div<{ length: number }>`
  position: relative;
  width: ${({ length }) => `calc(var(--tab-width) * ${length}px)`};
`;
