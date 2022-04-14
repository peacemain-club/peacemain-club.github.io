import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import sanitize from 'styled-sanitize';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${sanitize}

  * { box-sizing: border-box }

  #__next {
    width: 100%;
    height: 100vh;
    font-family: "Noto Sans KR", sans-serif;
    color: ${theme.color.BLACK};
  }

  a {
    color: ${theme.color.BLACK};
    text-decoration: none;
    cursor: pointer;
  }
  
  input, button, textarea {
    font-family: "Noto Sans KR", sans-serif;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    color: ${theme.color.BLACK};
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
