import * as S from './style';

interface Props {
  text: string;
  type: 'large' | 'small';
  onClick: () => void;
}

function Button({text, type, onClick}: Props) {
  const is_active = true;

  return (
    <S.Button onClick={onClick} type={type} is_active={is_active}>
      {text}
    </S.Button>
  );
}

export default Button;
