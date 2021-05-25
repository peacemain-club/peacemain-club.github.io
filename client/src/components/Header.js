import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
`;

const Logo = styled.img`
  width: 170px;
  height: auto;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 30px;
  padding: 0 30px;
`;

const Anchor = styled.a`
  color: ${props => props.theme.MAIN_COLOR};
`;

const _Header = () => {
  return (
    <Header>
      <Logo src={logo} alt='peacemain' />
      <ButtonWrapper>
        <Anchor>PEACEMAIN?</Anchor>
        <Anchor>공고</Anchor>
        <Anchor>내 지원서</Anchor>
      </ButtonWrapper>
    </Header>
  );
}

export default _Header;
