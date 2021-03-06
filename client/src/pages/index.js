import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/layout';

const Main = styled.main`
  width: 800px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>피스메인</title>
      </Helmet>
      <Main>
        안녕하세요
      </Main>
    </Layout>
  );
}

export default IndexPage;
