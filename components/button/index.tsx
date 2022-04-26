import * as S from './style';

import type {ButtonHTMLAttributes} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'large' | 'small';
  is_active?: boolean;
}

function Button(props: Props) {
  return (
    <S.Button {...props} variant={props.variant} is_active={props.is_active || true}>
      {props.text}
    </S.Button>
  );
}

export default Button;
