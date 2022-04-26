import * as S from './style';

import type {ButtonHTMLAttributes} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'large' | 'small';
}

function Button({text, variant, onClick}: Props) {
  const is_active = true;

  return (
    <S.Button onClick={onClick} variant={variant} is_active={is_active}>
      {text}
    </S.Button>
  );
}

export default Button;
