import Link from 'next/link';

import Layout from 'components/layout';
import ThirdBanner from 'components/banners/3rd-banner';
import Button from 'components/button';

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
          <S.NavWrapper>
            <Link href="/apply/form" passHref>
              <a>
                <Button text="지원서 작성" variant="large" />
              </a>
            </Link>
            <Link href="/interview" passHref>
              <a>
                <Button text="면접일정 수정" variant="large" />
              </a>
            </Link>
          </S.NavWrapper>
        </S.Main>
      </S.Page>
    </Layout>
  );
};

export default Apply;
