import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

interface ButtonProps {
  text: string,
  onClick: () => void,
  loading?: boolean,
}

const Container = styled.button`
  width: 120px;
  margin: 10px;
  outline: none;
  border: none;
  background: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #2b95ff;
`;

const LoaderWrapper = styled.div`
  width: 120px;
  height: 47px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
`;

function Button(props: ButtonProps): React.ReactElement {
  const {text, onClick, loading} = props;

  return (
    <>
      {
        loading ?
          <LoaderWrapper>
            <ClipLoader color='#2b95ff' loading={loading} size={35} />
          </LoaderWrapper> :
          <Container onClick={onClick}>
            <Text>{text}</Text>
          </Container>
      }
    </>
  );
}

export default Button;
