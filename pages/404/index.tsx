import type {NextPage} from 'next';

import * as S from './style';

const _404: NextPage = () => {
  return (
    <S.PAGE>
      <S.ALERT_404>404</S.ALERT_404>
    </S.PAGE>
  );
};

export default _404;
