import styled from 'styled-components';

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  border: 2px solid;
  border-right: 0;
  border-left: 0;
  padding: 10px 0;
  text-transform: uppercase;
  margin: 0;
  li {
    cursor: pointer;
    transition: 0.3s ease-out;
    font-size: 13px;
    &:hover {
      transform: scale(1.2);
      font-weight: bold;
    }
  }
`;

const Styled = {
    ListContainer
};
export default Styled;
