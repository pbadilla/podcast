import styled from 'styled-components';

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  h1 {
    font-size: 1rem;
    color: blue;
    text-align: left;
    width: 98%;
  }
`;

export const Loader = styled.div`
  display: flex;
  display: ${props => props.visibility? 'block': 'none'}
  flex-direction: row;
  justify-content: flex-end;
  margin: 1rem 0;
  width: 20px;
`;

