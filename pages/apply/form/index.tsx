import Layout from 'components/layout';
import ThirdBanner from 'components/banners/3rd-banner';
import ApplyForm from 'components/forms/apply';

import * as S from './style';

import type {NextPage} from 'next';

const Apply: NextPage = () => {
  return (
    <Layout>
      <S.Page>
        <S.BannerSection>
          <ThirdBanner />
        </S.BannerSection>
        <S.Main>
          <S.MainSection>
            <S.MainSectionTitleWrapper>
              <S.MainSectionTitle>지원하기</S.MainSectionTitle>
              <S.MainSectionSubtitle>지원서 수정은 이메일로 문의부탁드립니다.</S.MainSectionSubtitle>
            </S.MainSectionTitleWrapper>
            <ApplyForm />
          </S.MainSection>
        </S.Main>
      </S.Page>
    </Layout>
  );
};

export default Apply;
