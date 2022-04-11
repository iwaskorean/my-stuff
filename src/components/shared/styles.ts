import { css } from '@emotion/react';
import { theme } from 'src/theme/GlobalThemeProvide';

// css for checkbox | radio input
export const selectionInputStyling = css`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${theme.color.white};
  margin: 0;
  font: inherit;

  width: 1.15rem;
  height: 1.15rem;
  border: 0.15rem solid ${theme.color.gray400};
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: transform 0.12s ease-in-out;
  }

  &:checked {
    &::before {
      transform: scale(1);
    }
  }
`;
