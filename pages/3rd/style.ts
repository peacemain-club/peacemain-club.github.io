import styled from 'styled-components';

export const Page = styled.div`
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 36px;
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

// Position Description
export const PDWrapper = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 24px;
`;

export const PDHeader = styled.h3`
  font-size: ${({theme}) => theme.font_size.R175};
  font-weight: bold;
  ${({theme}) => theme.color.GRADIENT_1_TEXT}

  width: fit-content;
`;

export const PDTitle = styled.h6`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;
`;

export const PDText = styled.p``;

export const PDBulletList = styled.ul`
  line-height: 24px;
`;

export const PDBulletListElement = styled.li`
  list-style-type: disc;
  list-style-position: inside;
`;

export const PDLink = styled.a`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;
  text-decoration: underline;
`;
