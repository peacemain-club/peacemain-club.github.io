import Link from 'next/link';
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
    <Link href={href} passHref>
      <S.NavButton is_active={is_active}>{text}</S.NavButton>
    </Link>
  );
}

export default NavButton;
