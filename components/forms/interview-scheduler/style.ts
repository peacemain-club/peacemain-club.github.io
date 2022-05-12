import styled, {css} from 'styled-components';

interface TimeTableRowItem {
  isSelected?: boolean;
  isMine?: boolean;
  isReserved?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 36px;

  button {
    align-self: center;
  }
`;

export const TimeTable = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  width: 100%;

  margin-bottom: 20px;
`;

export const TimeTableRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeTableRowTitle = styled.h3`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;

  margin-bottom: 12px;
`;

export const TimeTableRowItems = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  row-gap: 8px;

  flex-wrap: wrap;
  width: 100%;
`;

export const TimeTableRowItem = styled.button<TimeTableRowItem>`
  box-sizing: border-box;
  padding: 12px 24px;

  border: 2px solid ${({theme}) => theme.color.GREY};

  ${({isSelected}) =>
    isSelected &&
    css`
      border-image: ${({theme}) => theme.color.GRADIENT_1} 1;

      ${({theme}) => theme.color.GRADIENT_1_TEXT}
      font-weight: bold;
    `}

  ${({isMine}) =>
    isMine &&
    css`
      background: ${({theme}) => theme.color.GRADIENT_1};

      color: white;

      border: none;
      padding: 14px 26px;
    `}

  &:disabled {
    background-color: ${({theme}) => theme.color.GREY};

    color: white;

    cursor: not-allowed;
  }
`;
