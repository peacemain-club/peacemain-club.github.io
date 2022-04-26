import {useState} from 'react';

import * as S from './style';

import type {ChangeEvent, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  helperText?: string | boolean;
}

function Input(props: InputProps) {
  const [isActive, setIsActive] = useState(!!props.value);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(!!e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <S.Container isError={props.error || false}>
      <S.Field {...props} onChange={handleTextChange} />
      <S.Label isActive={isActive}>{props.label}</S.Label>
      <S.ErrorMessage>{props.helperText}</S.ErrorMessage>
    </S.Container>
  );
}

export default Input;
