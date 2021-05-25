import React from 'react';
import {Helmet} from 'react-helmet';

import Header from '../components/header';

import Theme from '../configs/theme';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Theme>
        <Helmet>
          <meta charSet='utf-8' />
          <title>피스메인 동아리</title>
        </Helmet>
        <Header />
        {children}
      </Theme>
    </React.Fragment>
  );
}

export default Layout;
