import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  padding-top: 7rem;

  @media only screen and (max-width: 500px) {
    padding-top: 4rem;
  }
`;

export const ProductText = styled.a`
  text-align: right;
  font-size: 2rem;
  color: #0d0d0d;
`;
