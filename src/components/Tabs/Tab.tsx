import { ITab } from './Tabs';
import styled from '@emotion/styled';

export function Tab({ children, ...props }: ITab) {
  return <TabBox {...props}>{children}</TabBox>;
}

const TabBox = styled.button`
  width: calc(var(--tab-width) * 1px);
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  transition: color 0.15s ease-in;
  background: #fff;
  outline: 0;
  border: none;
`;
