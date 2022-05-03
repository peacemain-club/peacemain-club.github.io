import * as S from './style';

import type {ReactComponent} from 'types';

interface ModalProps extends ReactComponent {
  opened: boolean;
}

function ModalTitle({children}: ReactComponent) {
  return <S.ModalTitle>{children}</S.ModalTitle>;
}

function ModalBody({children}: ReactComponent) {
  return <S.ModalBody>{children}</S.ModalBody>;
}

function Modal({opened, children}: ModalProps) {
  return (
    <S.Background opened={opened}>
      <S.ModalContainer>{children}</S.ModalContainer>
    </S.Background>
  );
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;

export default Modal;
