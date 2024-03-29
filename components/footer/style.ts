import styled from 'styled-components';

import GithubSVG from 'public/assets/icons/github.svg';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  width: 100%;

  padding: 0 52px;

  ${({theme}) => theme.break_points.MOBILE} {
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  height: 20px;
`;

export const GithubIcon = styled(GithubSVG)`
  width: 24px;
  height: 24px;
`;

export const CopyRight = styled.div`
  ${({theme}) => theme.break_points.MOBILE} {
    font-size: ${({theme}) => theme.font_size.R75};
  }
`;

export const OuterLink = styled.a`
  width: 24px;
  height: 24px;
`;
