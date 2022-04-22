import styled, {css} from 'styled-components';

interface NavTabButton {
  isCurrent: boolean;
}

// TabList
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 24px;

  margin-bottom: 20px;
`;

export const NavTab = styled.li``;

export const NavTabButton = styled.button<NavTabButton>`
  font-size: ${({theme}) => theme.font_size.R150};

  ${({isCurrent}) =>
    isCurrent &&
    css`
      font-weight: bold;
      text-decoration: underline;
    `}
`;

// Tab Element
export const ElementContainer = styled.div``;
