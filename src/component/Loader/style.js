import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.1);
  flex-direction: column;
  .loaderStyle {
    width: 50px
  }
`;

const Styled = {
  Container
};
export default Styled;
