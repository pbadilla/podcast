import styled from 'styled-components';

export const CardDetail = styled.div`
  border: 1px solid rgba(194,188,194,.2);
  box-shadow: 2px 3px 4px 0px rgba(194,188,194,1);
  border-radius; 2px;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  padding-bottom: 20px;
  width: 100%;
`;

export const Photo = styled.div`
  border-bottom: 1px solid rgba(194,188,194,.2);
  margin: 10px auto;
  width: 90%;
`;
export const Title = styled.div`
  border-bottom: 1px solid rgba(194,188,194,.2);
  margin: 10px auto 0 auto;
  padding: 10px;
  text-align: left;
  width: 90%;
  p {
    font-size: .8rem;
    font-style: italic;
  }
`;

export const Description = styled.div`
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  width: 90%;
  p {
    font-size: .8rem;
    font-style: italic;
  }
`;
