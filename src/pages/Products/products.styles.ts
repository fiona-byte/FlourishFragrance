import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 3rem;
`;

export const ProductsLink = styled(Link)`
  font-size: 2rem;
  color: #0d0d0d;
  text-transform: capitalize;
  position: absolute;
  right: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-column-gap: 4rem;
  padding-top: 4rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    padding-top: 2.4rem;
    grid-column-gap: 2rem;
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
