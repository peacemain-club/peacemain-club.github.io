import {useRouter} from 'next/router';

import * as S from './style';

interface Props {
  text: string;
  href: string;
}

function NavButton({text, href}: Props) {
  const router = useRouter();

  const is_active = router.asPath === href;

  return (
    <S.NavButton href={href} is_active={is_active}>
      {text}
    </S.NavButton>
  );
}

export default NavButton;
