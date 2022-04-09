import React, {
  PropsWithChildren,
  HTMLAttributes,
  useState,
  ReactNode,
  ReactElement,
} from 'react';
import Tab from './Tab';
import Panel from './Panel';
import TabGlider from './TabGlider';
import styled from '@emotion/styled';

export interface TabsProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  tabSize?: typeof TAB_SIZE[keyof typeof TAB_SIZE];
}

export interface TabProps {
  title: string;
  children: ReactElement | ReactElement[] | string;
  disabled?: boolean;
}

type TabElement = ReactElement<TabProps>;

export const TAB_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

function Tabs({ children, tabSize = TAB_SIZE.MEDIUM, ...props }: TabsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrens = React.Children.toArray(children) as TabElement[];
  const items = childrens.filter((children) => children.type === Item);
  const panels = items.map((child) => child.props.children);
  const titles = items.map((child) => child.props.title);

  return (
    <>
      <Container {...props}>
        <Nav>
          <Inner length={titles.length} tabSize={tabSize}>
            {titles?.map((title: string, i: number) => (
              <Tab
                key={i}
                index={i}
                currentIndex={currentIndex}
                disabled={childrens[i].props.disabled === true}
                length={titles.length}
                tabSize={tabSize}
                onClick={() => setCurrentIndex(i)}
              >
                {title}
              </Tab>
            ))}
            {titles.length > 0 && (
              <TabGlider tabSize={tabSize} currentIndex={currentIndex} />
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

export function Item({ children }: TabProps) {
  return <>{children}</>;
}

export default Object.assign(Tabs, {
  Item,
});

const Container = styled.div`
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

const Inner = styled.div<{ length: number; tabSize: string }>`
  position: relative;

  ${({ tabSize, length }) =>
    tabSize === TAB_SIZE.SMALL && `width: calc(50 * ${length}px);`}

  ${({ tabSize, length }) =>
    tabSize === TAB_SIZE.MEDIUM && `width: calc(100 * ${length}px);`}

  ${({ tabSize, length }) =>
    tabSize === TAB_SIZE.SMALL && `width: calc(150 * ${length}px);`}
  
  display: flex;
`;
