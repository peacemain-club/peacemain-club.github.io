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
`;

export const OnboardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 60px);
  width: 900px;

  padding-bottom: 60px;

  ${({theme}) => theme.break_points.TABLET} {
    width: 480px;
  }
  ${({theme}) => theme.break_points.MOBILE} {
    width: 100vw;
  }
`;

export const OnboardTitle = styled.h2`
  ${({theme}) => theme.color.GRADIENT_1_TEXT}
  font-weight: bold;
  font-size: ${({theme}) => theme.font_size.R300};

  margin-bottom: 16px;
`;

export const OnboardSubtitle = styled.h3`
  ${({theme}) => theme.color.GRADIENT_1_TEXT}
  font-weight: bold;
  font-size: ${({theme}) => theme.font_size.R125};

  margin-bottom: 12px;
`;

export const OnboardDateText = styled.div`
  color: ${({theme}) => theme.color.BLACK};
  font-weight: bold;
  font-size: ${({theme}) => theme.font_size.R200};

  margin: 16px 0;
`;

export const OnboardText = styled.div`
  font-size: ${({theme}) => theme.font_size.R100};

  margin-bottom: 16px;
`;

export const DownArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 16px;

  row-gap: 12px;
`;

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 120px 24px 36px;

  width: 900px;

  ${({theme}) => theme.break_points.TABLET} {
    width: 480px;
  }
  ${({theme}) => theme.break_points.MOBILE} {
    width: 100vw;
    padding: 120px 24px 36px;
  }
`;

export const DescriptionGroup = styled.div`
  margin-bottom: 100px;
`;

export const DescriptionTitle = styled.h3`
  color: ${({theme}) => theme.color.BLACK};
  font-weight: bold;
  font-size: ${({theme}) => theme.font_size.R200};

  margin: 32px 0;
`;

export const DescriptionText = styled.p`
  color: ${({theme}) => theme.color.BLACK};
  font-size: ${({theme}) => theme.font_size.R125};
  line-height: 1.5rem;

  margin: 16px 0;
`;
