import {useState} from 'react';
import dayjs from 'dayjs';

import Button from 'components/button';

import * as S from './style';

export interface Schedule {
  date: string;
  times: {time: string; isReserved: boolean; isMine: boolean}[];
}

interface InterviewSchdulerProps {
  schedule: Schedule[];
}

function InterviewScheduler({schedule}: InterviewSchdulerProps) {
  const [selected_time, setSelectedTime] = useState('');

  const handleClickTime = (time: string) => () => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (!selected_time) {
      alert('일정을 클릭해주세요.');
      return;
    }

    if (!confirm(`${dayjs(selected_time).format('M월 D일 HH:mm')}에 면접 일정을 등록하시겠습니까?`)) {
      return;
    }

    console.log('submitted');
  };

  return (
    <S.Container>
      <S.TimeTable>
        {schedule.map(({date, times}) => {
          return (
            <S.TimeTableRow key={date}>
              <S.TimeTableRowTitle>{dayjs(date).format('M월 D일')}</S.TimeTableRowTitle>
              <S.TimeTableRowItems>
                {times.map(({time, isReserved, isMine}) => {
                  const is_selected = time === selected_time;

                  return (
                    <S.TimeTableRowItem
                      key={time}
                      isReserved={isReserved}
                      isSelected={is_selected}
                      isMine={isMine}
                      disabled={isReserved}
                      onClick={handleClickTime(time)}>
                      {dayjs(time).format('HH:mm')}
                    </S.TimeTableRowItem>
                  );
                })}
              </S.TimeTableRowItems>
            </S.TimeTableRow>
          );
        })}
      </S.TimeTable>
      <Button text="일정등록" variant="large" onClick={handleSubmit} />
    </S.Container>
  );
}

export default InterviewScheduler;
