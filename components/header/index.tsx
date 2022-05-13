import Link from 'next/link';

import NavButton from 'components/nav-button';

import * as S from './style';

import type {NextComponentType} from 'next';

const Header: NextComponentType = () => {
  return (
    <S.Container>
      <Link href="/" passHref>
        <S.Logo />
      </Link>
      <S.NavButtonGroup>
        <S.NavButtonWrapper>
          <NavButton text="피스메인 3기" href="/3rd" />
        </S.NavButtonWrapper>
        <S.NavButtonWrapper>
          <NavButton text="지원서" href="/apply" />
        </S.NavButtonWrapper>
      </S.NavButtonGroup>
    </S.Container>
  );
};

export default Header;
