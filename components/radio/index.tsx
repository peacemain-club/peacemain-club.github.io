import * as S from './style';

import type {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labels: string[];
  title?: string;
  error?: boolean;
  helperText?: string | boolean;
}

function Radio(props: InputProps) {
  return (
    <S.Container isError={props.error || false}>
      <S.Title>{props.title}</S.Title>
      <S.RadioGroup>
        {props.labels.map(label => {
          return (
            <S.RadioWrapper key={label}>
              <S.Field
                {...props}
                type="radio"
                name="position"
                id={label}
                value={label}
                checked={label === props.value}
                onChange={props.onChange}
              />
              <S.Label htmlFor={label}>{label}</S.Label>
            </S.RadioWrapper>
          );
        })}
      </S.RadioGroup>
      <S.ErrorMessage>{props.helperText}</S.ErrorMessage>
    </S.Container>
  );
}

export default Radio;
