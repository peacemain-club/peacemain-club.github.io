import Button from 'components/button';
import * as S from './style';

export interface Schedule {
  title: string;
  times: {time: string}[];
}

interface InterviewSchdulerProps {
  schedule: Schedule[];
}

function InterviewScheduler({schedule}: InterviewSchdulerProps) {
  return (
    <S.Container>
      <S.TimeTable>
        {schedule.map(({title, times}) => {
          return (
            <S.TimeTableRow key={title}>
              <S.TimeTableRowTitle>{title}</S.TimeTableRowTitle>
              <S.TimeTableRowItems>
                {times.map(({time}) => {
                  return <S.TimeTableRowItem key={time}>{time}</S.TimeTableRowItem>;
                })}
              </S.TimeTableRowItems>
            </S.TimeTableRow>
          );
        })}
      </S.TimeTable>
      <Button text="일정등록" variant="large" />
    </S.Container>
  );
}

export default InterviewScheduler;
