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
`;

export const Logo = styled.div`
  height: 20px;
`;

export const NavButtonGroup = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

export const NavButtonWrapper = styled.li``;

export const NavButton = styled.button`
  font-size: ${({theme}) => theme.font_size.R100};
`;
