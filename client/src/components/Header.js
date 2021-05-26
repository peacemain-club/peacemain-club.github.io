import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

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

const Anchor = styled.div`
  a {
    color: ${props => props.theme.MAIN_COLOR};
    padding: 4px;
  }

  .active {
    border-bottom: 2px solid ${props => props.theme.MAIN_COLOR};
    font-weight: bold;
  }
`;

const _Header = () => {
  return (
    <Header>
      <Logo src={logo} alt='peacemain' />
      <ButtonWrapper>
        <Anchor>
          <Link to='/' activeClassName='active'>PEACEMAIN?</Link>
        </Anchor>
        <Anchor>
          <Link to='/notice' activeClassName='active'>공고</Link>
        </Anchor>
        <Anchor>
          <Link to='/myApplication' activeClassName='active'>내 지원서</Link>
        </Anchor>
      </ButtonWrapper>
    </Header>
  );
}

export default _Header;
