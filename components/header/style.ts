import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  width: 100%;

  padding: 0 52px;

  position: absolute;

  ${({theme}) => theme.break_points.MOBILE} {
    width: 100vw;
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  height: 20px;
`;

export const NavButtonGroup = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 36px;

  ${({theme}) => theme.break_points.MOBILE} {
    column-gap: 16px;
  }
`;

export const NavButtonWrapper = styled.li``;

export const NavButton = styled.button`
  font-size: ${({theme}) => theme.font_size.R100};
`;
