import React, {useState, useCallback} from 'react';
import styled, {css} from 'styled-components';
import {useHistory} from 'react-router-dom';

import Header from 'components/header';
import Button from 'components/button';
import Input from 'components/input';
import TextArea from 'components/textarea';
import Binary from 'components/binary';

import useInput from 'utils/useInput';
import submitApplication from 'utils/submitApplication';
import checkPhone from 'utils/checkPhone';
import checkMail from 'utils/checkMail';
import checkBirthYear from 'utils/checkBirthYear';

const Title = styled.h1<{alignCenter?: boolean}>`
  margin-top: 0;
  text-align: ${(props) => props.alignCenter && 'center'};
`;

const Section = styled.section<{
  height?: number,
  alignCenter?: boolean,
}>`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  height: ${(props) => props.height && `${props.height}px`};
  ${(props) => props.alignCenter && css`
    align-items: center;
    justify-content: center;
  `}
`;

const Subtitle = styled.h2``;

const Statement = styled.p`
  margin: 12px 0;
`;

const Highlight = styled.span<{link?: string}>`
  color: #2b95ff;
  font-weight: bold;
  ${(props) => props.link && css`
    text-decoration: underline;
    cursor: pointer;
  `};
`;

const TimelineWrapper = styled.div`
  display: grid;
  row-gap: 16px;
  margin: 12px 0;
  padding: 10px 20px;
  border-left: 2px solid #555;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const Time = styled.div`
  font-weight: 100;
  width: 150px;
`;

const TimeWork = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const TimeworkTitle = styled.div``;

const TimeworkSubtitle = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

function Apply(): React.ReactElement {
  const [submit_loading, setSubmitLoading] = useState(false);
  const [is_male, setIsMale] = useState(true);

  const history = useHistory();

  const [state, handleInput] = useInput({
    name: '',
    interest: '',
    major: '',
    phone: '',
    birth_year: '',
    email: '',
    application_statement: '',
    portfolio_url: '',
  });

  const handleLink = useCallback((link) => () => {
    window.open(link);
  }, []);

  const setHightlightLink = (link: string) => {
    return {
      link,
      onClick: handleLink(link),
    };
  };

  const handleSubmit= (): void => {
    if (!state.name) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!state.interest) {
      alert('관심분야를 입력해주세요.');
      return;
    }
    if (!state.major) {
      alert('전공을 입력해주세요.');
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
    if (!state.birth_year) {
      alert('생년을 입력해주세요.');
      return;
    }
    if (!checkBirthYear(state.birth_year)) {
      alert('잘못된 생년 형식입니다.');
      return;
    }
    if (!state.email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (!checkMail(state.email)) {
      alert('잘못된 이메일 형식입니다.');
      return;
    }
    if (!state.application_statement) {
      alert('지원동기를 입력해주세요.');
      return;
    }
    if (state.application_statement.length < 20) {
      alert('지원동기를 20자 이상 입력해주세요.');
      return;
    }

    setSubmitLoading(true);

    state.is_male = is_male;

    submitApplication(state, (success: boolean) => {
      if (success) {
        alert('지원이 완료되었습니다. 궁금한 점은 peacemain@kakao.com으로 문의주시기 바랍니다.');
        history.push('/');
      } else {
        alert('다시 시도해주세요.');
        setSubmitLoading(false);
      }
    });
  };

  return (
    <>
      <Header />
      <main className='background'>
        <Section>
          <Subtitle>지원자격</Subtitle>
          <Statement>
            그냥 배워보고 싶다가 아닌, <Highlight>난 웹서비스를 꼭 만들고 싶은</Highlight>, 경북대학교 학생
          </Statement>
          <Subtitle>모집기간</Subtitle>
          <Statement>2월 1일 ~ 2월 19일</Statement>
          <Subtitle>지원방법</Subtitle>
          <Statement>피스메인 홈페이지(peacemain-club.github.io)에서 지원</Statement>
          <Subtitle>문의사항</Subtitle>
          <Statement>peacemain@kakao.com으로 문의부탁드립니다.</Statement>
          <Subtitle>모집일정</Subtitle>
          <TimelineWrapper>
            <TimeWrapper>
              <Time>2월 1일 ~ 19일</Time>
              <TimeWork>
                <TimeworkTitle>지원서 접수</TimeworkTitle>
                <TimeworkSubtitle>온라인으로 지원서를 접수받습니다</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
            <TimeWrapper>
              <Time>2월 20일 ~ 26일</Time>
              <TimeWork>
                <TimeworkTitle>면접</TimeworkTitle>
                <TimeworkSubtitle>끝까지 갈 사람만 뽑기위해 면접심사를 봅니다</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
            <TimeWrapper>
              <Time>2월 27일</Time>
              <TimeWork>
                <TimeworkTitle>결과 발표</TimeworkTitle>
                <TimeworkSubtitle>이메일로 결과를 알려드립니다</TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
            <TimeWrapper>
              <Time>3월 첫째주</Time>
              <TimeWork>
                <TimeworkTitle>오프라인 OT</TimeworkTitle>
                <TimeworkSubtitle>
                  오프라인 오리엔테이션을 진행합니다 (*코로나-19로 인해 변경될 수 있습니다)
                </TimeworkSubtitle>
              </TimeWork>
            </TimeWrapper>
          </TimelineWrapper>
        </Section>
        <Title>지원서 작성</Title>
        <Section>
          <Input
            label='이름'
            name='name'
            value={state.name}
            onChange={handleInput}
            validity
          />
          <Input
            label='전공'
            name='major'
            value={state.major}
            onChange={handleInput}
            validity
          />
          <Input
            label='관심분야'
            name='interest'
            value={state.interest}
            onChange={handleInput}
            placeholder='예) 웹, 앱, 인공지능'
            validity
          />
          <Input
            label='휴대폰번호'
            name='phone'
            value={state.phone}
            onChange={handleInput}
            validity
          />
          <Input
            label='생년'
            name='birth_year'
            value={state.birth_year}
            onChange={handleInput}
            placeholder='예) 1998'
            validity
          />
          <Binary
            label='성별'
            leftLabel='남'
            rightLabel='여'
            state={is_male}
            onClickLeft={() => setIsMale(true)}
            onClickRight={() => setIsMale(false)}
          />
          <Input
            label='이메일'
            name='email'
            value={state.email}
            onChange={handleInput}
            validity
          />
          <TextArea
            label='지원 동기'
            name='application_statement'
            value={state.application_statement}
            onChange={handleInput}
            validity
          />
          <Input
            label='깃허브 링크 (선택)'
            name='portfolio_url'
            value={state.portfolio_url}
            onChange={handleInput}
            placeholder='예) https://github.com/peacemain-club'
            validity
          />
        </Section>
        <Section>
          <Statement>
            신청서를 제출할 경우,
            &nbsp;<Highlight {...setHightlightLink('/policy')}>개인정보처리방침</Highlight>
            에 동의하는 것으로 간주됩니다.
          </Statement>
          <Button
            text='지원신청'
            onClick={handleSubmit}
            loading={submit_loading}
          />
        </Section>
        {/* <Section>
          <Statement>지원기간이 끝났습니다.</Statement>
        </Section> */}
      </main>
    </>
  );
}

export default Apply;
