import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: calc(100vh - 120px);
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
`;

export const BannerSection = styled.section``;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 36px;
`;
