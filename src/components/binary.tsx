import React from 'react';
import styled from 'styled-components';

interface BinaryProps {
  label: string,
  leftLabel: string,
  rightLabel: string,
  state: boolean,
  onClickLeft: () => void;
  onClickRight: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 0;
`;

const Label = styled.div`
  color: #777;
  margin-bottom: 4px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-around;
  align-items: center;
`;

const ButtonLabel = styled.div`
  font-size: 1rem;
  color: #777;
`;

const ButtonOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 13px;
  border: 2px solid #999;
`;

const ButtonChecked = styled.div<{checked: boolean}>`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: ${(props) => props.checked && '#2b95ff'};
  transition: all 0.3s;
  cursor: pointer;
`;

function Binary(props: BinaryProps): React.ReactElement {
  const {
    label,
    leftLabel,
    rightLabel,
    state,
    onClickLeft,
    onClickRight,
  } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <ButtonArea>
        <ButtonWrapper>
          <ButtonLabel>{leftLabel}</ButtonLabel>
          <ButtonOutline onClick={onClickLeft}>
            <ButtonChecked checked={state} />
          </ButtonOutline>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonLabel>{rightLabel}</ButtonLabel>
          <ButtonOutline onClick={onClickRight}>
            <ButtonChecked checked={!state} />
          </ButtonOutline>
        </ButtonWrapper>
      </ButtonArea>
    </Container>
  );
}

export default Binary;
