import styled from 'styled-components';

export const Container = styled.div<{isError: boolean}>`
  display: flex;
  flex-direction: column;

  width: 100%;

  position: relative;

  &:focus-within textarea {
    border-image: ${({theme}) => theme.color.GRADIENT_1} 1;
  }
`;

export const Field = styled.textarea`
  width: 100%;
  min-height: 300px;

  padding: 24px;
  border: 2px solid ${({theme}) => theme.color.GREY};

  font-size: ${({theme}) => theme.font_size.R100};
  line-height: ${({theme}) => theme.font_size.R175};
`;

export const Label = styled.label`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;

  margin-bottom: 8px;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;

  transform: translateY(100%);

  color: ${({theme}) => theme.color.RED};
  font-size: ${({theme}) => theme.font_size.R75};
`;
