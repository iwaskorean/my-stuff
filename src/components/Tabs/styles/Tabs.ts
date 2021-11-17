import styled from '@emotion/styled';

export const Container = styled.div<{tabsLength: number}>`
  --tab-width: 120;
  width: calc(var(--tab-width) * ${({ tabsLength }) => tabsLength} * 1px);
  margin: 20px;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
`;

export const Nav = styled.nav`
  display: flex;
  position: relative;
  background-color: #fff;
`;

export const TabBox = styled.button`
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

export const Content = styled.div`
  min-height: 300px;
  line-height: 2.5;
  background-color: #fff;
  padding: 20px;
`;

interface GliderProps {
  currentIndex: number;
}
export const Glider = styled.span<GliderProps>`
  position: absolute;
  top: 50px;
  left: 0;
  height: 10px;
  width: calc(var(--tab-width) * 1px);
  background-color: red;
  transform: translateX(${({ currentIndex }) => currentIndex * 100}%);
  transition: 0.25s ease-out;
`;
