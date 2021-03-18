import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {useHistory} from 'react-router-dom';

import Header from 'components/header';
import Loader from 'components/loader';

import checkAuth from 'utils/checkAuth';

interface Post {
  author: string,
  summary?: string,
  title: string,
  time_created: string,
  id: string,
}

const Title = styled.h1<{alignCenter?: boolean}>`
  margin-top: 0;
  text-align: ${(props) => props.alignCenter && 'center'};
`;

const Section = styled.section<{
  height?: number,
  alignCenter?: boolean,
}>`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  height: ${(props) => props.height && `${props.height}px`};
  ${(props) => props.alignCenter && css`
    align-items: center;
    justify-content: center;
  `}
`;

const Post = styled.div`
  padding: 16px 0 36px;
  border-bottom: 1px solid #cfcfcf;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    padding: 8px 0 16px;
  }
`;

const PostTitle = styled.h2`

`;

const PostSummary = styled.p`
  color: #525252;
  @media ${(props) => props.theme.mobile} {
    margin: 10px 0;
  }
`;

const PostInfo = styled.div`
  font-weight: 100;
`;

function Meet(): React.ReactElement {
  const [page_loading, setPageLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    checkAuth((is_authenticated) => {
      setPageLoading(false);
      if (!is_authenticated) {
        history.replace('/login');
      }
    });
  }, []);

  const posts: Array<Post> = [];

  function handleLink(id: string) {
    return () => {
      history.push(`/meet/${id}`);
    };
  }

  return (
    <>
      <Header />
      <main className='background'>
        {
          page_loading ? <Loader type='page' loading={page_loading} /> :
            <>
              <Title>모각코 후기</Title>
              <Section>
                {
                  posts.length > 0 && posts.map((post, i) => {
                    const {id, title, summary, time_created, author} = post;

                    return (
                      <Post key={String(i)} onClick={handleLink(id)}>
                        <PostTitle>{title}</PostTitle>
                        {
                          summary && <PostSummary>{summary}</PostSummary>
                        }
                        <PostInfo>{time_created} by {author}</PostInfo>
                      </Post>
                    );
                  })
                }
              </Section>
            </>
        }
      </main>
    </>
  );
}

export default Meet;
