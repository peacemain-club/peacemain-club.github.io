import Layout from 'components/layout';
import ThirdBanner from 'components/banners/3rd-banner';
import Button from 'components/button';

import * as S from './style';

import type {NextPage} from 'next';
import {useRouter} from 'next/router';

const Apply: NextPage = () => {
  const router = useRouter();

  const handleNav = (to: string) => () => {
    router.push(to);
  };

  return (
    <Layout>
      <S.Page>
        <S.BannerSection>
          <ThirdBanner />
        </S.BannerSection>
        <S.Main>
          <S.NavWrapper>
            <Button text="지원서 작성" variant="large" onClick={handleNav('apply/form')} />
            <Button text="면접일정 수정" variant="large" onClick={handleNav('interview')} />
          </S.NavWrapper>
        </S.Main>
      </S.Page>
    </Layout>
  );
};

export default Apply;
