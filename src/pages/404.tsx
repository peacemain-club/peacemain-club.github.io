import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


function _404(): React.ReactElement {
  return (
    <Container>404</Container>
  );
}

export default _404;
