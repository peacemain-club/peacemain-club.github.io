import styled from 'styled-components';

export const NavButton = styled.a<{is_active: boolean}>`
  font-size: ${({theme}) => theme.font_size.R100};

  ${({is_active, theme}) =>
    is_active &&
    `
      font-weight: bold;
      background: ${theme.color.GRADIENT_1};
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;

      cursor: default;
  `}
`;
