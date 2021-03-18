import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import logo from 'assets/logo.png';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100vw;
  padding: 20px 10%;
  border-bottom: 1px solid #ccc;
  background-color: white;
  position: sticky;
  top: 0;
`;

const Logo = styled.img`
  height: 20px;
`;

const NavWrapper = styled.nav`
  display: flex;
`;

const Nav = styled.div`
  margin-left: 12px;
  ${css`
    a {
      font-weight: bold;
    }
  `}
`;

function Header(): React.ReactElement {
  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='logo' />
      </Link>
      <NavWrapper>
        <Nav>
          <Link to='/meet'>모각코</Link>
        </Nav>
      </NavWrapper>
    </Container>
  );
}

export default Header;
