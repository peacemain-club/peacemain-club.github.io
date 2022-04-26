import * as S from './style';

interface Props {
  text: string;
  variant: 'large' | 'small';
  onClick: () => void;
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
