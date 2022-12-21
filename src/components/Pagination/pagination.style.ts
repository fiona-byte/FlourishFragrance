import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.6rem;
`;

export const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid #0d0d0d;
  border-radius: 8px;
  font-weight: 600;
  font-family: inherit;
  font-size: 1.6rem;
  color: #0d0d0d;
  text-transform: unset;
  min-width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  height: 3.8rem;
  width: 3.8rem;

  &.active {
    background-color: #0d0d0d;
    color: #f4f4f4;
  }

  &:disabled {
    background-color: #c7c5c5;
    border: 1px solid #c7c5c5;
  }

  @media only screen and (min-width: 900px) {
    height: 4.2rem;
    width: 4.2rem;
  }
`;

export const PaginationList = styled.div`
  &:not(:last-child) {
    margin-right: 0.8rem;
  }

  & .pagination__icon {
    height: 1.8rem;
    width: 2rem;

    @media only screen and (min-width: 900px) {
      height: 2rem;
      width: 2.2rem;
    }
  }

  & .pagination__icon path {
    stroke: #0d0d0d;
  }
`;
