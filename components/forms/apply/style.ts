import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 36px;

  button {
    align-self: center;
  }
`;

export const TermStatement = styled.div``;

export const Link = styled.a`
  ${({theme}) => theme.color.GRADIENT_1_TEXT}

  position: relative;

  font-weight: bold;
  &::before {
    content: '';
    position: absolute;
    top: 90%;
    width: 100%;
    left: 0;

    height: 2px;

    border-radius: 2px;
    background: ${({theme}) => theme.color.GRADIENT_1};
  }
`;
