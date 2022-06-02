import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 64px 0;
`;

export const BannerTitle = styled.h2`
  ${({theme}) => theme.color.GRADIENT_1_TEXT}
  font-weight: bold;
  font-size: ${({theme}) => theme.font_size.R200};
`;

export const BannerTime = styled.div`
  color: ${({theme}) => theme.color.BLACK};
  font-weight: bold;
  font-size: ${({theme}) => theme.font_size.R200};

  margin: 16px 0 32px;
`;
