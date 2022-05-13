import * as S from './style';

import type {NextComponentType} from 'next';

const Footer: NextComponentType = () => {
  return (
    <S.Container>
      <S.CopyRight>2022 peacemain. All rights reserved.</S.CopyRight>
      <S.OuterLink href="https://github.com/peacemain-club" target="_blank">
        <S.GithubIcon />
      </S.OuterLink>
    </S.Container>
  );
};

export default Footer;
