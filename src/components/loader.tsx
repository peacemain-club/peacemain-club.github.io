import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoaderProps {
  type: 'button' | 'page',
  loading: boolean,
}

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function loader(props: LoaderProps): React.ReactElement {
  const {type, loading} = props;

  const size = type === 'button' ? 35 : 55;

  return (
    <LoaderWrapper>
      <ClipLoader color='#2b95ff' loading={loading} size={size} />
    </LoaderWrapper>
  );
}

export default loader;
