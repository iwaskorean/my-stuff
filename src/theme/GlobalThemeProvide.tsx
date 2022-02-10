import { PropsWithChildren, ReactNode } from 'react';
import { Global, Theme, ThemeProvider } from '@emotion/react';
import globalStyle from './GlobalStyle';
import color from './color';
import font, { fontSize, fontWeight, lineHeight } from './font';

export default function GlobalThemeProvider({
  children,
}: PropsWithChildren<ReactNode>) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
}

export const theme: Theme = { color, font, fontSize, fontWeight, lineHeight };
