import {PuffLoader} from 'react-spinners';

import * as S from './style';

import type {ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'large' | 'small';
  is_loading?: boolean;
  is_active?: boolean;
}

interface FallbackProps {
  variant: 'large' | 'small';
}

function Button(props: ButtonProps) {
  return (
    <S.Button {...props} variant={props.variant} is_active={props.is_active || true}>
      {props.text}
    </S.Button>
  );
}

function ButtonFallback({variant}: FallbackProps) {
  const loader_size = variant === 'large' ? 40 : 25;

  return (
    <S.Button is_active variant={variant} disabled>
      <PuffLoader size={loader_size} speedMultiplier={2} color="white" />
    </S.Button>
  );
}

Button.Fallback = ButtonFallback;

export default Button;
