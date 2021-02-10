import React, {useState} from 'react';
import styled from 'styled-components';

import Input from 'components/input';
import Button from 'components/button';

import useInput from 'utils/useInput';
import login from 'utils/login';
import checkPhone from 'utils/checkPhone';

interface Props {
  handleModal: () => void,
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  box-sizing: border-box;
  padding: 24px 36px;
  background-color: white;
  border-radius: 5px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Description = styled.div`
  font-size: 0.8rem;
  color: #444;
  font-weight: 100;
`;

function LoginModal(props: Props): React.ReactElement {
  const {handleModal} = props;

  const [login_loading, setLoginLoading] = useState(false);

  const [state, handleInput] = useInput({
    name: '',
    phone: '',
  });

  const handleLogin = () => {
    if (!state.name) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!state.phone) {
      alert('휴대폰번호를 입력해주세요.');
      return;
    }
    if (!checkPhone(state.phone)) {
      alert('잘못된 휴대폰번호 형식입니다.');
      return;
    }

    setLoginLoading(true);

    login(state, (success, params) => {
      if (success) {
        setLoginLoading(false);
        sessionStorage.setItem('uid', params);
        handleModal();
      } else {
        setLoginLoading(false);
      }
    });
  };

  return (
    <Background>
      <ModalContainer>
        <TitleWrapper>
          <Title>지원자 확인</Title>
          <Description>면접시간 선택을 위해 정보를 입력해주세요.</Description>
        </TitleWrapper>
        <Input
          label='이름'
          name='name'
          value={state.name}
          onChange={handleInput}
          width={100}
        />
        <Input
          label='전화번호'
          name='phone'
          value={state.phone}
          onChange={handleInput}
          width={100}
        />
        <Button
          text='로그인'
          onClick={handleLogin}
          loading={login_loading}
        />
      </ModalContainer>
    </Background>
  );
}

export default LoginModal;
