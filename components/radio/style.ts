import styled from 'styled-components';

export const Container = styled.div<{isError: boolean}>`
  display: flex;
  flex-direction: column;

  width: 100%;

  position: relative;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;

  margin-bottom: 8px;

  ${({theme}) => theme.break_points.MOBILE} {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const Title = styled.div`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;

  margin-bottom: 16px;
`;

export const RadioWrapper = styled.div``;

export const Field = styled.input`
  padding: 24px;
  border: 2px solid ${({theme}) => theme.color.GREY};

  line-height: ${({theme}) => theme.font_size.R175};
`;

export const Label = styled.label`
  margin-left: 8px;

  font-size: ${({theme}) => theme.font_size.R100};
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;

  transform: translateY(100%);

  color: ${({theme}) => theme.color.RED};
  font-size: ${({theme}) => theme.font_size.R75};
`;
