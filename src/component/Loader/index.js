import React from 'react';
import Styled from './style';

// loader will enable only on api calls

const Loader = ({ isLoading }) => {
  return (
    isLoading && <Styled.Container>
      <img className="loaderStyle" src='/loader.gif'></img>
      <span>Loading</span>
    </Styled.Container>
  )
}
export default Loader
