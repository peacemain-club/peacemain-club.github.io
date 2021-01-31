import {createGlobalStyle} from 'styled-components';

export const theme = {
  // colors

  // font sizes

  // responsive
  mobile: '(max-width: 400px)',
  tablet: '(max-width: 1200px)',

  // Components
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans KR', sans-serif;
  }

  div {
    box-sizing: border-box;
    color: #222222;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .background {
    width: 700px;
    padding: 15px 20px;
    @media ${theme.mobile} {
      width: 350px
    }
  }

  h1 {
    @media ${theme.mobile} {
      font-size: 1.7rem;
    }
  }
  h2 {
    @media ${theme.mobile} {
      font-size: 1.5rem;
      margin: 10px 0;
    }
  }
  h3 {
    @media ${theme.mobile} {
      font-size: 1.15rem;
    }
  }
  h4 {
    @media ${theme.mobile} {
      font-size: 1.15rem;
    }
  }
  h5 {
    @media ${theme.mobile} {
      font-size: 1rem;
    }
  }
  h6 {
    @media ${theme.mobile} {
      font-size: 1rem;
    }
  }
  p {
    @media ${theme.mobile} {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyle;
