import Header from 'components/header';
import Footer from 'components/footer';

import type {ReactNode} from 'react';

import * as S from './style';

function Layout({children}: {children: ReactNode}) {
  return (
    <S.Layout>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Layout>
  );
}

export default Layout;
