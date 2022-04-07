import { css } from '@emotion/react';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Roboto', sans-serif;
  }

  input,
  button {
    font-family: inherit;
  }
`;

export default globalStyle;
