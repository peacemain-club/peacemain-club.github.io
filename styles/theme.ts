import type {DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {
  break_points: {
    MOBILE: '@media all and (max-width: 480px)',
    TABLET: '@media all and (min-width:480px) and (max-width:920px)',
    LAPTOP: '@media all and (min-width: 920px)',
  },
  color: {
    RED: '#FF0000',
    BLACK: '#333333',
    GREY: '#C4C4C4',
    GRADIENT_1: 'linear-gradient(90deg, rgba(0, 71, 255, 0.58) 0%, rgba(0, 172, 59, 0.58) 100%)',
    GRADIENT_1_TEXT: `
      background: linear-gradient(90deg, rgba(0, 71, 255, 0.58) 0%, rgba(0, 172, 59, 0.58) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    `,
  },
  template: {
    PAGE: `
      min-height: 100vh;
      width: 100vw;
      max-width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    MAIN: `
      width: 900px;
      padding: 16px 16px 36px;
      flex: 1;

      @media all and (max-width: 480px) {
        width: 100%;
        padding: 16px 12px 24px; 
      }
    `,
  },
  font_size: {
    R75: '0.75rem',
    R100: '1rem',
    R125: '1.25rem',
    R150: '1.5rem',
    R175: '1.75rem',
    R200: '2rem',
    R250: '2.5rem',
    R300: '3rem',
    R375: '3.75rem',
  },
};

export default theme;
