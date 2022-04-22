import * as S from './style';

interface ScheduleProps {
  schedule: [string, string][];
}

function Schedule({schedule}: ScheduleProps) {
  return (
    <S.Container>
      {schedule.map(([description, time]) => {
        return (
          <S.ScheduleWrapper key={`${description}-${time}`}>
            <S.ScheduleDescription>{description}</S.ScheduleDescription>
            <S.ScheduleTime>{time}</S.ScheduleTime>
          </S.ScheduleWrapper>
        );
      })}
    </S.Container>
  );
}

export default Schedule;
