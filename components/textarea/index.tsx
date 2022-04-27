import * as S from './style';

import type {TextareaHTMLAttributes} from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  helperText?: string | boolean;
}

function TextArea(props: InputProps) {
  return (
    <S.Container isError={props.error || false}>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.Field {...props} />
      <S.ErrorMessage>{props.helperText}</S.ErrorMessage>
    </S.Container>
  );
}

export default TextArea;
