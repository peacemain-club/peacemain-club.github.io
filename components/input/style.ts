import styled, {css} from 'styled-components';

export const Container = styled.div<{isError: boolean}>`
  display: flex;
  flex-direction: column;

  min-width: 340px;

  position: relative;

  &:focus-within label {
    transform: translate(0, 0px) scale(0.75);

    font-weight: bold;
    ${({theme}) => theme.color.GRADIENT_1_TEXT}
  }
  &:focus-within input {
    border-width: 3px;
    border-image: ${({theme}) => theme.color.GRADIENT_1} 1;
  }
`;

export const Field = styled.input`
  width: 100%;
  height: 56px;

  padding-top: 24px;
  padding-bottom: 12px;

  border-bottom: 2px solid ${({theme}) => theme.color.GREY};

  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;
`;

export const Label = styled.label<{isActive: boolean}>`
  position: absolute;

  color: ${({theme}) => theme.color.GREY};

  transform: translate(0, 24px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  ${({isActive}) =>
    isActive &&
    css`
      transform: translate(0, 0) scale(0.75);
    `}
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;

  transform: translateY(100%);

  color: ${({theme}) => theme.color.RED};
  font-size: ${({theme}) => theme.font_size.R75};
`;
