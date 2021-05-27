import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/layout';

const Main = styled.main`
  width: 800px;
`;

const NoticePage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>피스메인 | 공고</title>
      </Helmet>
      <Main>
        공고
      </Main>
    </Layout>
  );
}

export default NoticePage;
