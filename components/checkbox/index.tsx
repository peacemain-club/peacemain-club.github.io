import * as S from './style';

import type {InputHTMLAttributes, ReactNode} from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactNode;
  error?: boolean;
  helperText?: string | boolean;
}

function Checkbox(props: CheckboxProps) {
  return (
    <S.CheckboxContainer>
      <S.Label htmlFor={props.id}>
        <S.CheckboxInput {...props} type="checkbox" />
        <S.Checkbox htmlFor={props.id} />
        {props.label}
      </S.Label>
      {props.error && <S.ErrorMessage>{props.helperText}</S.ErrorMessage>}
    </S.CheckboxContainer>
  );
}

export default Checkbox;
