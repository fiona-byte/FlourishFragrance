import styled from 'styled-components';

export const ProductsContainer = styled.div`
  padding: 4rem 2rem 6.4rem;

  @media only screen and (min-width: 600px) {
    padding: 4rem 5rem 6.4rem;
  }
`;

export const ProductsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductsFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #c7c5c5;
  border-radius: 8px;
  margin-top: 2.4rem;
`;

export const ProductsFilterList = styled.li`
  padding: 1.4rem 2.4rem;
  font-size: 1.6rem;
  color: #0d0d0d;

  &.active {
    background: #d9b80c;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const ProductsSearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .search__icon {
    position: absolute;
    left: 1rem;
  }
`;

export const ProductsSearchInput = styled.input`
  padding: 1.4rem 1.6rem 1.4rem 4rem;
  background-color: #c7c5c5;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: #1b2021;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
    width: 400px;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3.2rem;
  grid-column-gap: 2.4rem;

  @media only screen and (min-width: 768px) {
    grid-column-gap: 4rem;
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
