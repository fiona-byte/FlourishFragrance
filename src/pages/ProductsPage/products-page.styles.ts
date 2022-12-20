import styled from 'styled-components';

export const ProductsContainer = styled.div`
  padding: 4rem 2rem 6.4rem;
`;

export const ProductsSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0;
  position: relative;

  .search__icon {
    position: absolute;
    left: 1rem;
  }
`;

export const ProductsSearchInput = styled.input`
  padding: 1.2rem 1.6rem 1.2rem 4rem;
  background-color: #c7c5c5;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: inherit;
  font-size: 2rem;
  display: flex;
  align-items: center;
  color: #1b2021;
  width: 100%;
`;

export const ProductsWrapper = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  // place-items: center;
  // padding-top: 7rem;

  // @media only screen and (max-width: 500px) {
  //   padding-top: 4rem;
  // }

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  padding-top: 3.2rem;
  grid-gap: 2.4rem;

  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
