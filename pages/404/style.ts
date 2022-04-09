import styled from 'styled-components';

export const PAGE = styled.div`
  ${({theme}) => theme.template.PAGE}
  justify-content: center;
`;

export const ALERT_404 = styled.h1`
  font-size: ${({theme}) => theme.font_size.R375};
  font-weight: bold;
  background: ${({theme}) => theme.color.GRADIENT_1};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
