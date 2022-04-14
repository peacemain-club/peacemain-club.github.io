import Image from 'next/image';

import * as S from './style';
import github_icon from 'public/assets/icons/github.svg';

import type {NextComponentType} from 'next';

const Footer: NextComponentType = () => {
  return (
    <S.Container>
      <S.CopyRight>2022 peacemain. All rights reserved.</S.CopyRight>
      <S.OuterLink href="https://github.com/peacemain-club" target="_blank">
        <Image src={github_icon} height={20} width={20} alt="peacemain" />
      </S.OuterLink>
    </S.Container>
  );
};

export default Footer;
