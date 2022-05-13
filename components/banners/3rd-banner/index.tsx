import React from 'react';
import Link from 'next/link';

import Button from 'components/button';

import * as S from './style';

interface ThirdBannerProps {
  link?: boolean;
}

function ThirdBanner({link}: ThirdBannerProps) {
  return (
    <S.BannerWrapper>
      <S.BannerTitle>피스메인 모집</S.BannerTitle>
      <S.BannerTime>5.16 - 5.21 18:00</S.BannerTime>
      {link && (
        <Link href="/apply" passHref>
          <Button text="지원서 작성하기" variant="large" />
        </Link>
      )}
    </S.BannerWrapper>
  );
}

export default ThirdBanner;
