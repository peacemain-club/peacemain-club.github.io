import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

const theme = {
  // colors
  MAIN_COLOR: 'hsl(0, 0%, 76%)',
  DARK_COLOR: 'hsl(0, 0%, 26%)',
  BRIGHT_COLOR: 'hsl(0, 0%, 77%)',
  BACKGROUND_COLOR: 'hsl(228, 7%, 15%)',
  HIGHLIGHT: 'hsl(0, 78%, 18%)',
  CODE_BLOCK_COLOR: 'hsl(228, 0%, 0%)',
  // breakpoints
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 960px)',
  laptop: '(max-width: 1440px)',
  // font sizes
  NORMAL_SIZE: '1rem', // 16px
  SMALL_SIZE: '0.75rem', // 12px
  BIG_SIZE: '1.5rem', // 24px
  HUGE_SIZE: '2rem', // 32px
  GIANT_SIZE: '2.5rem', // 40px
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.BACKGROUND_COLOR};
    min-height: 100vh;
  }

  div {
    box-sizing: border-box;
  }

  header {
    box-sizing: border-box;
  }
`;

const Theme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
