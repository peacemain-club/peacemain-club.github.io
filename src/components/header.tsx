import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.png';

const Container = styled.header`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  padding: 20px 10%;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled.img`
  height: 20px;
`;

function Header(): React.ReactElement {
  return (
    <Container>
      <Logo src={logo} alt='logo' />
    </Container>
  );
}

export default Header;
