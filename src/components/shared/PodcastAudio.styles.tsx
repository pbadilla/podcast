import styled from 'styled-components';

export const AudioCard = styled.div`
  border: 1px solid rgba(194,188,194,.3);
  box-shadow: 2px 3px 4px 0px rgba(194,188,194,1);
  min-height: 120px;
  padding: 20px;
  text-align: left;
  width: 100%;
  h2 {
    color: black;
    font-size: 1rem;
    font-weight: 300;
    margin: 10px 0;
    padding-top: 100px;
    text-transform: uppercase;
  }
  p {
    font-size: .8rem;
    padding: .5rem 0 2rem;
  }
  audio {
    background-color: black;
    color: white;
    width: 100%;
  }
`;
