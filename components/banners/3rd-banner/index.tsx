import React from 'react';
import {useRouter} from 'next/router';

import Button from 'components/button';

import * as S from './style';

function ThirdBanner() {
  const router = useRouter();

  const handleNavToApply = () => {
    router.push('/apply');
  };

  return (
    <S.BannerWrapper>
      <S.BannerTitle>피스메인 3기 모집</S.BannerTitle>
      <S.BannerTime>4.25 - 5.1 18:00</S.BannerTime>
      <Button text="지원서 작성하기" type="large" onClick={handleNavToApply} />
    </S.BannerWrapper>
  );
}

export default ThirdBanner;
