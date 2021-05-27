import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/layout';

const Main = styled.main`
  width: 800px;
`;

const MyAppliactionPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>피스메인 | 내 지원서</title>
      </Helmet>
      <Main>
        내 지원서
      </Main>
    </Layout>
  );
}

export default MyAppliactionPage;
