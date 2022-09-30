import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  padding-top: 7rem;

  @media only screen and (max-width: 500px) {
    padding-top: 4rem;
  }
`;

export const ProductText = styled.a`
  font-size: 2rem;
  color: #0d0d0d;
  text-transform: capitalize;
  top: 7.2%;
  right: 6.5%;
`;
