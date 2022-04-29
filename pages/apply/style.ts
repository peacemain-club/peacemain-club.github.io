import styled from 'styled-components';

export const Page = styled.div`
  justify-content: center;

  height: 100%;
  min-height: calc(100vh - 120px);
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerSection = styled.section``;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  width: 900px;

  margin-bottom: 52px;

  ${({theme}) => theme.break_points.TABLET} {
    width: 480px;
    padding: 16px;
  }
  ${({theme}) => theme.break_points.MOBILE} {
    width: 100vw;
    padding: 16px;
  }
`;

export const MainSectionTitleWrapper = styled.div`
  margin-bottom: 16px;
`;

export const MainSectionTitle = styled.h2`
  font-size: ${({theme}) => theme.font_size.R300};
  font-weight: 100;
  margin-bottom: 12px;

  ${({theme}) => theme.break_points.MOBILE} {
    font-size: ${({theme}) => theme.font_size.R200};
  }
`;

export const MainSectionSubtitle = styled.h6`
  font-size: ${({theme}) => theme.font_size.R100};
`;

export const MainSectionText = styled.p``;

export const MainSectionList = styled.ul`
  line-height: 24px;
`;

export const MainSectionListItem = styled.li`
  list-style-type: disc;
  list-style-position: inside;
`;
