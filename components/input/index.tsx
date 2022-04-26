import {useState} from 'react';

import * as S from './style';

import type {ChangeEvent, InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input(props: InputProps) {
  const [isActive, setIsActive] = useState(!!props.value);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }

    setIsActive(!!e.target.value);
  };

  return (
    <S.Container>
      <S.Field onChange={handleTextChange} {...props} />
      <S.Label isActive={isActive}>{props.label}</S.Label>
    </S.Container>
  );
}

export default Input;
