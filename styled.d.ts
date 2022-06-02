import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    break_points: {
      MOBILE: string;
      TABLET: string;
      LAPTOP: string;
    };
    color: {
      RED: string;
      BLACK: string;
      GREY: string;
      GRADIENT_1: string;
      GRADIENT_1_TEXT: string;
    };
    template: {
      PAGE: string;
      MAIN: string;
    };
    font_size: {
      R75: string;
      R100: string;
      R125: string;
      R150: string;
      R175: string;
      R200: string;
      R250: string;
      R300: string;
      R375: string;
    };
  }
}
