import type {NextPage} from 'next';

import Layout from 'components/layout';
import ThirdBanner from 'components/banners/3rd-banner';
import TabList from 'components/tab-list';
import Schedule from 'components/schedule';

import * as S from './style';

const Third: NextPage = () => {
  return (
    <Layout>
      <S.Page>
        <S.BannerSection>
          <ThirdBanner link />
        </S.BannerSection>
        <S.Main>
          <S.MainSection>
            <S.MainSectionTitleWrapper>
              <S.MainSectionTitle>모집부문</S.MainSectionTitle>
              <S.MainSectionSubtitle>지원은 하나만 가능합니다.</S.MainSectionSubtitle>
            </S.MainSectionTitleWrapper>
            <TabList tabs={['프론트엔드 교육', '웹 프로젝트', '커뮤니티 매니저']}>
              <TabList.Element>
                <S.PDWrapper>
                  <S.PDHeader>프론트엔드 교육 트랙</S.PDHeader>
                  <S.PDTitle>이런 일을 해요</S.PDTitle>
                  <S.PDText>
                    프론트엔드 개발자가 되고 싶은 분들이 모여 프로젝트 기반의 웹 프론트엔드 교육을 받고 활발히 커뮤니티
                    활동을 합니다.
                  </S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>바닐라 자바스크립트로 웹 프론트엔드 개발을 배웁니다.</S.PDBulletListElement>
                    <S.PDBulletListElement>
                      나중에 React, Typescript 등의 트렌드 기술을 배울 수 있는 기회가 주어집니다.
                    </S.PDBulletListElement>
                    <S.PDBulletListElement>자유롭게 정해진 팀과 프로젝트를 수행합니다.</S.PDBulletListElement>
                  </S.PDBulletList>
                  <S.PDTitle>이런 사람을 원해요</S.PDTitle>
                  <S.PDText>프론트엔드 개발자로 진로를 정하고 정말로 정말로 열심히 할 사람을 찾습니다.</S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>과제를 수행할 수 있을만큼 시간을 투자할 수 있는 분</S.PDBulletListElement>
                    <S.PDBulletListElement>
                      프론트엔드를 배우고자 하는 의지가 있는 분, 확고한 이유가 있는 분
                    </S.PDBulletListElement>
                  </S.PDBulletList>
                  <S.PDText>이런 분이라면 우대해드립니다.</S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>코딩 경험 및 자바스크립트 경험이 있는 분</S.PDBulletListElement>
                    <S.PDBulletListElement>휴학생 또는 15학점 이하의 수업을 들으시는 분</S.PDBulletListElement>
                  </S.PDBulletList>
                </S.PDWrapper>
              </TabList.Element>
              <TabList.Element>
                <S.PDWrapper>
                  <S.PDHeader>웹 프로젝트 트랙</S.PDHeader>
                  <S.PDTitle>이런 일을 해요</S.PDTitle>
                  <S.PDText>
                    이미 웹 개발 지식이 있는 분들로, 웹 프로젝트를 하고 싶은 분들이 모여 프로젝트를 수행하고 활발히
                    커뮤니티 활동을 합니다.
                  </S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>학생 개발자들끼리 모여 프로젝트를 수행합니다.</S.PDBulletListElement>
                    <S.PDBulletListElement>
                      현직에서 하는 환경과 유사한 프로젝트 프로세스를 코칭 받습니다.
                    </S.PDBulletListElement>
                  </S.PDBulletList>
                  <S.PDTitle>이런 사람을 원해요</S.PDTitle>
                  <S.PDText>
                    이미 개발을 할 수 있지만 같이 프로젝트 할 사람이 없는 프론트엔드, 백엔드 개발자를 찾습니다.
                  </S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>
                      웹 프론트엔드, 백엔드 개발에 대한 충분한 지식이 있으신 분
                    </S.PDBulletListElement>
                    <S.PDBulletListElement>협업능력을 발휘 할 수 있는 분</S.PDBulletListElement>
                    <S.PDBulletListElement>
                      (단, 백엔드의 경우에는 지원자들의 스택에 따라 모집여부가 달라집니다.)
                    </S.PDBulletListElement>
                  </S.PDBulletList>
                  <S.PDText>이런 분이라면 우대해드립니다.</S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>이미 서비스를 개발해보신 분</S.PDBulletListElement>
                  </S.PDBulletList>
                </S.PDWrapper>
              </TabList.Element>
              <TabList.Element>
                <S.PDWrapper>
                  <S.PDHeader>커뮤니티 매니저 트랙</S.PDHeader>
                  <S.PDTitle>이런 일을 해요</S.PDTitle>
                  <S.PDText>
                    일정 관리, 메신저 운영 등 커뮤니티 운영을 담당하며 원하는 트랙 어디든 참여 가능합니다.
                  </S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>
                      디스코드, 단톡방 등을 관리하고 투표, 일정 관리 등을 담당합니다.
                    </S.PDBulletListElement>
                    <S.PDBulletListElement>교육, 프로젝트 어떤 트랙이든 참가할 수 있습니다.</S.PDBulletListElement>
                    <S.PDBulletListElement>
                      자소서 첨삭 도움 등의 여러가지 도움을 받을 수 있습니다.
                    </S.PDBulletListElement>
                  </S.PDBulletList>
                  <S.PDTitle>이런 사람을 원해요</S.PDTitle>
                  <S.PDText>커뮤니티(동아리)를 운영해보고 싶은 분을 찾습니다.</S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>커뮤니티 운영에 관심이 있는 분</S.PDBulletListElement>
                    <S.PDBulletListElement>아이스브레이킹 잘하고 잡담 잘하시는 분</S.PDBulletListElement>
                  </S.PDBulletList>
                  <S.PDText>이런 분이라면 우대해드립니다.</S.PDText>
                  <S.PDBulletList>
                    <S.PDBulletListElement>커뮤니티 운영 계획이 있는 분</S.PDBulletListElement>
                    <S.PDBulletListElement>커뮤니티 운영에 충분한 시간을 투자할 수 있는 분</S.PDBulletListElement>
                  </S.PDBulletList>
                </S.PDWrapper>
              </TabList.Element>
            </TabList>
          </S.MainSection>
          <S.MainSection>
            <S.MainSectionTitleWrapper>
              <S.MainSectionTitle>전형과정</S.MainSectionTitle>
            </S.MainSectionTitleWrapper>
            <S.MainSectionText>지원서 작성 - 화상 인터뷰 - 추가 대면 인터뷰 - 최종 발표</S.MainSectionText>
            <S.MainSectionList>
              <S.MainSectionListItem>지원서를 작성하여 제출하시면 전형이 시작됩니다.</S.MainSectionListItem>
              <S.MainSectionListItem>
                추가로 인터뷰가 필요하다 판단되면 추가로 대면인터뷰를 요청드릴 수 있습니다.
              </S.MainSectionListItem>
              <S.MainSectionListItem>최종 발표는 메일로 안내드립니다.</S.MainSectionListItem>
            </S.MainSectionList>
          </S.MainSection>
          <S.MainSection>
            <S.MainSectionTitleWrapper>
              <S.MainSectionTitle>전형일정</S.MainSectionTitle>
              <S.MainSectionSubtitle>일정은 바뀔 수 있으며, 바뀔 경우 이메일로 안내드립니다.</S.MainSectionSubtitle>
            </S.MainSectionTitleWrapper>
            <Schedule
              schedule={[
                ['지원서 접수', '4.18(월) - 4.24(일) 18시'],
                ['화상 인터뷰', '4.25(월) - 4.29(금)'],
                ['추가 대면 인터뷰', '4.30(토)'],
                ['최종 발표', '5.2(월)'],
                ['활동 시작', '5.9(월) 예정'],
              ]}
            />
          </S.MainSection>
          <S.MainSection>
            <S.MainSectionTitleWrapper>
              <S.MainSectionTitle>문의사항</S.MainSectionTitle>
            </S.MainSectionTitleWrapper>
            <S.MainSectionText>peacemain@kakao.com으로 문의바랍니다.</S.MainSectionText>
          </S.MainSection>
        </S.Main>
      </S.Page>
    </Layout>
  );
};

export default Third;
