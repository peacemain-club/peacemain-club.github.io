import {useRouter} from 'next/router';

import * as S from './style';

import type {MouseEvent} from 'react';

interface Props {
  text: string;
  href: string;
}

function NavButton({text, href}: Props) {
  const router = useRouter();

  const is_active = router.asPath === href;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (!is_active) {
      router.push(href);
    }
  };

  return (
    <S.NavButton onClick={handleClick} is_active={is_active}>
      {text}
    </S.NavButton>
  );
}

export default NavButton;
