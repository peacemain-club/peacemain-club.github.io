/* eslint-disable max-len */
import React, {useCallback} from 'react';
import styled, {css} from 'styled-components';
import {useHistory} from 'react-router-dom';

import Header from 'components/header';
import Button from 'components/button';

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

const Subtitle = styled.h2`

`;

const Statement = styled.p`
  margin: 12px 0;
`;

const List = styled.li`
  margin-bottom: 8px;
`;

const Highlight = styled.span<{link?: string}>`
  color: #2b95ff;
  font-weight: bold;
  ${(props) => props.link && css`
    text-decoration: underline;
    cursor: pointer;
  `};
`;

const Box = styled.div`
  display: grid;
  justify-content: center;
  row-gap: 16px;
  align-items: center;
  text-align: center;
  padding: 5% 8%;
  background-color: #f2f4f6;
  border-radius: 5px;
`;

const BoxContent = styled.h3`
  margin: 0;
`;

const TimelineWrapper = styled.div`
  display: grid;
  row-gap: 16px;
  margin: 12px 0;
  padding: 10px 20px;
  border-left: 2px solid #555;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const Time = styled.div`
  font-weight: 100;
  width: 150px;
`;

const TimeWork = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const TimeworkTitle = styled.div`

`;

const TimeworkSubtitle = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

function Main(): React.ReactElement {
  const history = useHistory();

  const handleLink = useCallback((link) => () => {
    window.open(link);
  }, []);

  const setHightlightLink = (link: string) => {
    return {
      link,
      onClick: handleLink(link),
    };
  };

  const handleNav = useCallback(() => {
    history.push('/apply');
  }, []);

  return (
    <>
      <Header />
      <main className='background'>
        <Title>안녕하세요, 피스메인입니다</Title>
        <Statement>
          <Highlight>IT서비스 개발 동아리 피스메인</Highlight>에서 새로운 회원을 모집합니다!
        </Statement>
        <Box>
          <BoxContent>
            머릿속에 아이디어는 있지만, <br />
            어떻게 만들 수 있을까 고민하신 분,
          </BoxContent>
          <BoxContent>
            IT대기업(카카오, 네이버, 쿠팡 등)에<br />
            개발자로 입사하고 싶은 분,
          </BoxContent>
          <BoxContent>
            전공자, 비전공자 상관없이<br />
            IT서비스를 만들고 싶은 분,
          </BoxContent>
          <BoxContent>
            모두 환영입니다.
          </BoxContent>
        </Box>
        <Section>
          <Subtitle>어떤걸 하나요?</Subtitle>
          <Statement>
            머리속에 아이디어로 들어있는 IT서비스를 현실로 구현하기 위해 가장 범용적인 도구인 <Highlight>웹서비스</Highlight>를 제작하는 방법을 배웁니다.
          </Statement>
          <Statement>
            웹서비스는 크게 <Highlight>프론트엔드와 백엔드</Highlight>로 구성되어있습니다. 프론트엔드와 백엔드 개발이 끝나면 나중에 운영을 위한 프로세스도 따로 구축해야하죠. 여기서는 일단 프론트엔드와 백엔드를 개발하는 방법을 배웁니다.
            운영을 위한 메뉴얼은 일단 나중에 생각하도록 하죠.
          </Statement>
          <Statement>
            요즘은 세상이 좋아져서 서버를 따로 컴퓨터를 사서 구축할 필요가 없습니다. 복잡한 서버컴퓨터 관리는 구글이나 아마존, 마이크로소프트 같은 대기업들이 알아서 해주죠. 우리는 이러한 <Highlight>클라우드</Highlight>를 이용해서 웹서비스를 개발할 겁니다.
          </Statement>
          <Statement>
            막상 개발을 하게되면 많이 어려울 수도 있지만, 일단은 그런건 생각하지말고 <Highlight>시작</Highlight>을 해보도록 합시다.
          </Statement>
        </Section>
        <Section>
          <Subtitle>어떤걸 배우게 되나요?</Subtitle>
          <Statement>
            웹 프론트엔드 개발을 위해 <Highlight {...setHightlightLink('https://ko.reactjs.org')}>ReactJS</Highlight>를 배우게됩니다. ReactJS는 세계에서 가장 많이 쓰이는 웹 인터페이스 라이브러리입니다.
            빠르게 개발을 할 수 있지만, 나중에 React를 대체할 무언가가 나오게 된다면 새로운 라이브러리를 또 처음부터 공부해야 한다는 단점이 있습니다. 그래서 우리는 순수한 <Highlight>HTML과 CSS, Javascript</Highlight>를 이용하는 <Highlight>VanillaJS</Highlight>를 먼저 조금 공부해보고 지나갈겁니다.
          </Statement>
          <Statement>
            그리고 백엔드 개발을 위해 <Highlight {...setHightlightLink('https://nodejs.org/ko/about/')}>NodeJS</Highlight>와 <Highlight {...setHightlightLink('https://expressjs.com/ko/')}>Express.JS</Highlight>를 배울겁니다.
            데이터베이스도 사용을 해야되겠죠? 그를 위해서 역시 편한 관리를 위해 클라우드 플랫폼에서 제공해주는 데이터베이스를 사용할겁니다. 우리는 빠르게 개발할 수 있는 <Highlight {...setHightlightLink('https://cloud.google.com')}>Google Cloud Platform</Highlight>을 사용합니다.
            데이터베이스는 NoSQL DB인 Firestore도 있고, RDB인 Cloud Spanner도 있으니, 선택은 관심이 가는 쪽으로 선택하세요.
          </Statement>
        </Section>
        <Section>
          <Subtitle>피스메인에서 배울 수 있는 기술들</Subtitle>
          <List>React, Redux</List>
          <List>Javascript, Typescript</List>
          <List>CSS, Sass, Styled-Component</List>
          <List>Google Cloud Platform</List>
          <List>ExpressJS</List>
        </Section>
        <Section>
          <Subtitle>일정은 어떻게 진행되나요?</Subtitle>
          <Statement>
            2021년 3월 부터 시작해서 봄학기 동안 진행됩니다. 여름방학 때는 해커톤을 진행하고, 이후에는 자유롭게 프로젝트나 스터디를 진행할 수 있습니다.
          </Statement>
          <TimelineWrapper>
            <TimeWrapper>
              <Time>2021년 3월 ~ 6월</Time>
              <TimeWork>
                <TimeworkTitle>교육 진행</TimeworkTitle>
                <TimeworkSubtitle>웹서비스 개발에 대한 전반적인 교육을 진행합니다.</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
            <TimeWrapper>
              <Time>2021년 5월 ~ 6월</Time>
              <TimeWork>
                <TimeworkTitle>해커톤 기획</TimeworkTitle>
                <TimeworkSubtitle>디자이너와 만나 팀을 구성하고 해커톤 때 개발할 IT서비스 기획을 진행합니다.</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
            <TimeWrapper>
              <Time>2021년 6월</Time>
              <TimeWork>
                <TimeworkTitle>제 1회 피스메인 해커톤</TimeworkTitle>
                <TimeworkSubtitle>여름방학에 1박 2일 해커톤을 통해 만들고 싶은 하나의 IT 서비스를 개발해봅니다.</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
            <TimeWrapper>
              <Time>해커톤 이후</Time>
              <TimeWork>
                <TimeworkTitle>자유로운 동아리 활동</TimeworkTitle>
                <TimeworkSubtitle>팀원을 모아 공모전에 참가할 수도, 수익을 낼 수 있는 토이프로젝트를 개발할 수도, 창업을 할 수도, 취업을 위해 코딩테스트 스터디를 진행할 수도 있습니다. 자유롭게 해주세요!</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
          </TimelineWrapper>
        </Section>
        <Section height={300} alignCenter>
          <Title alignCenter>IT서비스 같이 만들사람?</Title>
          <Statement>
            이 글을 읽고 가슴이 뛴다면 바로 지원하세요!
          </Statement>
          <Button
            text='지원하기'
            onClick={handleNav}
          />
        </Section>
      </main>
    </>
  );
}

export default Main;
