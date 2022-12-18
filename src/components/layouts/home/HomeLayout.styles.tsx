import { useRowSelect } from 'react-table';
import styled from 'styled-components';

export const LayoutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-gap: 10px;
  max-width: 1080px;
  width: 1080px;
`;

export const WrapperSkeleton = styled.span`
  margin-top: 50px;
  [aria-live='polite'] {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
`;

export const SkeletonSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Search = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  border: 1px solid rgba(194,188,194,1);
  line-height: 18px;
  padding: 2px 5px;
`
