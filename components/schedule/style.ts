import styled from 'styled-components';

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  padding: 12px 20px;

  border-left: 4px solid;
  border-image: ${({theme}) => theme.color.GRADIENT_1} 2;
`;

export const ScheduleWrapper = styled.li`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

export const ScheduleDescription = styled.div`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;
  ${({theme}) => theme.color.GRADIENT_1_TEXT}

  width: fit-content;
`;

export const ScheduleTime = styled.div`
  font-size: ${({theme}) => theme.font_size.R125};
`;
