import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';

import Theme from '../configs/theme';

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Theme>
        <Header />
        <Wrap>
          {children}
        </Wrap>
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
