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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  padding-top: 7rem;

  @media only screen and (max-width: 500px) {
    padding-top: 4rem;
  }
`;
