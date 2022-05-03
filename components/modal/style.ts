import styled from 'styled-components';

export const Background = styled.div<{opened: boolean}>`
  width: 100vw;
  height: 100vh;

  background-color: ${({theme}) => theme.color.BLACK};
  opacity: 0.8;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({opened}) => (!opened ? 'display: none' : '')}
`;

export const ModalContainer = styled.div`
  width: 480px;

  padding: 24px 36px;
  border-radius: 5px;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h4`
  font-size: ${({theme}) => theme.font_size.R125};
  font-weight: bold;

  margin-bottom: 16px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
`;
