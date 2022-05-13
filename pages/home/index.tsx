import Link from 'next/link';

import Layout from 'components/layout';
import Button from 'components/button';
import ParticleBackground from 'components/particle-background';

import * as S from './style';

import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <S.Page>
        <S.Main>
          <S.OnboardSection>
            <ParticleBackground />
            <S.OnboardTitle>피스메인 모집</S.OnboardTitle>
            <S.OnboardSubtitle>프론트엔드 개발 교육 트랙</S.OnboardSubtitle>
            <S.OnboardSubtitle>프로젝트 트랙</S.OnboardSubtitle>
            <S.OnboardSubtitle>커뮤니티 매니저</S.OnboardSubtitle>
            <S.OnboardDateText>5.16 - 5.21 18:00</S.OnboardDateText>
            <S.OnboardText>개발자로 가는 길에 가속 페달을 밟고 싶다면</S.OnboardText>
            <S.OnboardText>누구보다 열심히 할 자신이 있다면</S.OnboardText>
            <Link href="/3rd" passHref>
              <a>
                <Button text="지원하기" variant="large" />
              </a>
            </Link>
            <S.DownArrowWrapper>
              <S.DownArrowIcon />
              SCROLL
            </S.DownArrowWrapper>
          </S.OnboardSection>
          <S.DescriptionSection>
            <S.DescriptionGroup>
              <S.WebIcon />
              <S.DescriptionTitle>웹서비스를 개발하는 방법을 배웁니다.</S.DescriptionTitle>
              <S.DescriptionText>
                브라우저에서 실행되는 웹서비스의 프론트엔드를 개발하는 방법을 배웁니다. 기초가 되는 VanillaJS를
                자기주도적인 실습으로 배우고 더 필요하다면 React나 Typescript 최신 트렌드에 맞는 기술도 배울 수
                있습니다.
              </S.DescriptionText>
            </S.DescriptionGroup>
            <S.DescriptionGroup>
              <S.ProjectIcon />
              <S.DescriptionTitle>개발자들의 프로젝트를 지향합니다.</S.DescriptionTitle>
              <S.DescriptionText>
                개발자에게 무엇보다도 중요한 개발 실력을 위해 프로젝트를 적극적으로 수행합니다. 자유롭게 협업하며 개발
                실력을 키우고 서비스를 출시 및 운영하는 경험을 통해 특별한 경험을 가진 개발자 지망생이 되는 것을 목표로
                합니다. 현업에서 일하는 선배들의 멘토링을 통해 놓친 부분까지 신경쓸 수 있습니다.
              </S.DescriptionText>
            </S.DescriptionGroup>
            <S.DescriptionGroup>
              <S.CommunityIcon />
              <S.DescriptionTitle>대구의 개발자를 위한 모임입니다.</S.DescriptionTitle>
              <S.DescriptionText>
                대구에서 찾기 힘든 현직 개발자 선배와의 교류를 통해 조언을 얻을 수도 있고, 같은 회원들 간의 교류로
                개발자가 되기 위해 꼭 필요한 프로젝트를 같이 할 동료를 찾을 수도 있습니다. 앞으로 계속해서 모임이
                이어나가서 대구의 개발자 생태계의 선순환을 이끌어내는 것을 목표로 합니다.
              </S.DescriptionText>
            </S.DescriptionGroup>
          </S.DescriptionSection>
        </S.Main>
      </S.Page>
    </Layout>
  );
};

export default Home;
