import {
  ChangeEvent,
  PropsWithChildren,
  SelectHTMLAttributes,
  useState,
} from 'react';
import Option from './Option';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

export interface SelectProps
  extends PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement>> {
  label: string;
  handleSelectChange(e: ChangeEvent<HTMLSelectElement>): void;
}

function Select({
  label,
  handleSelectChange,
  children,
  ...props
}: SelectProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(e);
    setSelectedIndex(e.target.options.selectedIndex);
  };

  return (
    <Wrapper active={!!selectedIndex}>
      <Label>{label}</Label>
      <StyledSelect defaultValue={label} onChange={handleChange} {...props}>
        <StyledOption disabled value={label}>
          {label}
        </StyledOption>
        {children}
      </StyledSelect>
    </Wrapper>
  );
}

export default Object.assign(Select, {
  Option,
});

const appear = keyframes`
  0%,60% {
    color: transparent;
  }
  100% {
    color: inherit;
  }
`;

const Label = styled.label`
  width: max-content;
  max-width: 7rem;
  position: absolute;
  top: calc(1rem + 6px);
  left: calc(1rem + 3px);
  background-color: ${({ theme }) => theme.color.white};
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 0.2rem;
  transition: transform 0.2s ease-in-out;
`;

const StyledSelect = styled.select`
  width: 100%;
  ${({ theme }) => theme.font.size16pt}
  padding: 1rem 2.5rem 1rem 1rem;
  border: 3px solid ${({ theme }) => theme.color.gray400};
  border-radius: 0.3rem;
  outline: 0;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23d7d7d7' height='30' width='30' viewBox='0 0 17 17' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-color: ${({ theme }) => theme.color.white};
  background-repeat: no-repeat;
  background-position-x: 97%;
  background-position-y: 5px;
  &:hover,
  &:focus {
    border: 3px solid ${({ theme }) => theme.color.primary};
    background-image: url("data:image/svg+xml;utf8,<svg fill='%234971ff' height='30' width='30' viewBox='0 0 17 17' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  }
`;

const Wrapper = styled.div<{ active: boolean }>`
  position: relative;
  width: 100%;

  ${Label} {
    ${({ active }) =>
      active &&
      `
        transform: translate3d(calc(100% * -0.15), -1.85rem, 0) scale(0.85);
    `};
  }

  ${StyledSelect} {
    ${({ active, theme }) =>
      active &&
      css`
        animation: ${appear} 0.25s ease-in 1 forwards;
        color: ${theme.color.black};
      `};
  }
`;

const StyledOption = styled.option``;
