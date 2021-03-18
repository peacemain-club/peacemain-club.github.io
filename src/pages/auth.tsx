import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import Header from 'components/header';
import Button from 'components/button';
import Loader from 'components/loader';

import useInput from 'utils/useInput';
import checkMail from 'utils/checkMail';
import login from 'utils/login';
import checkAuth from 'utils/checkAuth';

const Title = styled.h1<{alignCenter?: boolean}>`
  margin-top: 0;
  text-align: ${(props) => props.alignCenter && 'center'};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  box-sizing: border-box;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  width: 300px;
  margin-bottom: 4px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

function Auth(): React.ReactElement {
  const [page_loading, setPageLoading] = useState(true);
  const [submit_loading, setSubmitLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    checkAuth((is_authenticated) => {
      setPageLoading(false);
      if (is_authenticated) {
        history.replace('/meet');
      }
    });
  }, []);

  const [state, handleInput] = useInput({
    email: '',
    password: '',
  });

  function handleSubmit() {
    if (!state.email) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!state.password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (!checkMail(state.email)) {
      alert('이메일 형식이 아닙니다.');
      return;
    }

    setSubmitLoading(true);

    login(state.email, state.password, (success, params) => {
      if (success) {
        setSubmitLoading(false);
        alert('어서오세요');
        history.replace('/meet');
      } else {
        alert(params);
      }
    });
  }

  return (
    <>
      <Header />
      <main className='background'>
        {
          page_loading ? <Loader type='page' loading={page_loading} /> :
            <>
              <Title>로그인</Title>
              <Section>
                <InputWrapper>
                  <InputLabel>이메일</InputLabel>
                  <Input
                    name='email'
                    value={state.email}
                    onChange={handleInput}
                    type='email'
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputLabel>비밀번호</InputLabel>
                  <Input
                    name='password'
                    value={state.password}
                    onChange={handleInput}
                    type='password'
                  />
                </InputWrapper>
                <Button
                  text='로그인'
                  onClick={handleSubmit}
                  loading={submit_loading}
                />
              </Section>
            </>
        }
      </main>
    </>
  );
}

export default Auth;
