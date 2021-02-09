import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Header from 'components/header';
import LoginModal from 'components/loginModal';
import Button from 'components/button';

import getInterviewTime from 'utils/getInterviewTime';
import submitInterviewTime from 'utils/submitInterviewTime';

interface Schedule {
  date: string,
  available_time: Array<{
    time: string,
    is_available: boolean,
  }>
}

const Title = styled.h1<{alignCenter?: boolean}>`
  margin-top: 0;
  text-align: ${(props) => props.alignCenter && 'center'};
`;

const Subtitle = styled.h3``;

const Statement = styled.p``;

const Section = styled.section`
  margin-bottom: 16px;
`;

const DateContainer = styled.div``;

const DateTitle = styled.h3``;

const DateWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const TimeBox = styled.button<{
  selected: boolean,
  disabled: boolean,
}>`
  border-radius: 10px;
  text-align: center;
  width: 90px;
  padding: 16px 16px;
  margin: 4px;
  cursor: pointer;
  ${(props) => props.selected && css`
    background-color: #2b95ff;
    cursor: default;
    color: white;
  `}
  ${(props) => props.disabled && css`
    background-color: #bbb;
    cursor: default;
  `}
  transition: all 0.4s;
`;

function Interview(): React.ReactElement {
  const [login_modal, setLoginModal] = useState(!localStorage.getItem('uid'));
  const [page_loading, setPageLoading] = useState(true);
  const [time_want, setTimeWant] = useState('');
  const [submit_loading, setSubmitLoading] = useState(false);
  const [schedules, setSchedules] = useState<Array<Schedule>>();

  useEffect(() => {
    if (!login_modal) {
      getInterviewTime((success, params) => {
        if (success) {
          setSchedules(params);
        } else {
          alert('서버 오류가 발생했습니다. 새로고침해주세요.');
        }
        setPageLoading(false);
      });
    }
  }, [login_modal]);

  const closeModal = () => {
    setLoginModal(false);
  };

  const handleTimeWant = (date: string, time: string) => () => {
    setTimeWant(`${date} ${time}`);
  };

  const handleSubmit = () => {
    if (!time_want) {
      alert('시간을 선택해주세요.');
      return;
    }
    setSubmitLoading(true);

    const params = {
      time_want,
      uid: localStorage.getItem('uid') || '',
    };

    submitInterviewTime(params, (success) => {
      if (success) {

      }
      setSubmitLoading(false);
    });
  };

  return (
    <>
      {
        login_modal &&
        <LoginModal
          handleModal={closeModal}
        />
      }
      <Header />
      <main className='background'>
        <Title>면접시간 선택</Title>
        <Subtitle>면접장소 : 경북대학교 북문 파스쿠치</Subtitle>
        <Statement>가능한 시간이 없을 경우 peacemain@kakao.com으로 연락주세요.</Statement>
        {
          !login_modal &&
          <>
            <Section>
              {
                !page_loading && schedules && schedules.map((interview_time, i) => {
                  const {date, available_time} = interview_time;
                  return (
                    <DateContainer key={String(i)}>
                      <DateTitle>{date}</DateTitle>
                      <DateWrapper>
                        {
                          available_time.map((v, j) => {
                            const {time, is_available} = v;
                            const is_checked = time_want === `${date} ${time}`;
                            return (
                              <TimeBox
                                selected={is_checked}
                                key={String(j)}
                                onClick={handleTimeWant(date, time)}
                                disabled={!is_available}
                              >
                                {time}
                              </TimeBox>
                            );
                          })
                        }
                      </DateWrapper>
                    </DateContainer>
                  );
                })
              }
            </Section>
            <Button
              text='일정선택'
              onClick={handleSubmit}
              loading={submit_loading}
            />
          </>
        }
      </main>
    </>
  );
}

export default Interview;
