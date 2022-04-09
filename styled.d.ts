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
      GRADIENT_1: string;
    };
    template: {
      PAGE: string;
      MAIN: string;
    };
    font_size: {
      R100: string;
      R125: string;
      R175: string;
      R200: string;
      R300: string;
      R375: string;
    };
  }
}
