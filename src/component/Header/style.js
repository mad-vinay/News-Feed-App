import styled from 'styled-components';

const Container = styled.div`
background: url(./newsPaper.jpg);
background-size: cover;
height: 65px;
display: flex;
flex-direction: column;
color: #000;
justify-content: flex-start;
align-items: flex-start;
padding: 20px;
@media only screen and (max-width: 768px) {
  justify-content: center;
  align-items: center;
  height: 140px;
}
  .headingStyle {
    margin: 0;
    text-transform: uppercase;
    font-size: 35px;
  }
`;

const Styled = {
  Container
};
export default Styled;
