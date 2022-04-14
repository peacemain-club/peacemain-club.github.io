import styled from 'styled-components';

export const Layout = styled.div`
  ${({theme}) => theme.template.PAGE}
`;

export const Content = styled.div`
  margin-top: 60px;

  height: 100%;
  width: 100%;
`;
