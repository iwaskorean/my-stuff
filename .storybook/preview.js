import { ThemeProvider, Global } from '@emotion/react';
import globalStyle from '../src/theme/GlobalStyle';
import { theme } from '../src/theme/GlobalThemeProvide';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Story {...context} />
    </ThemeProvider>
  ),
];
