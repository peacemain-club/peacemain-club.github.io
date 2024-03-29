import {ThemeProvider} from 'styled-components';

import GlobalStyle from 'styles/global-style';
import theme from 'styles/theme';

import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
