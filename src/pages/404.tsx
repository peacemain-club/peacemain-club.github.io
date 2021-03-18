import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function _404(): React.ReactElement {
  const history = useHistory();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/meet')) {
      history.replace('/login');
    }
  });

  return (
    <Container>404</Container>
  );
}

export default _404;
