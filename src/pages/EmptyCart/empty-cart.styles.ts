import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';

export const EmptyCartContainer = styled.div`
  padding: 7rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media all and (min-width: 1500px) {
    padding: 7rem 17rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 7rem 5rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 5rem 2rem;
  }

  .empty-cart__svg {
    @media only screen and (max-width: 500px) {
      width: 16.5rem;
      height: 11.7rem;
    }
  }
`;

export const EmptyCartHeading = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 3.2rem;
  text-align: center;
  color: #0d0d0d;
  margin-top: 6.4rem;

  @media only screen and (max-width: 500px) {
    font-size: 2.4rem;
    margin-top: 4rem;
  }
`;

export const EmptyCartSub = styled.p`
  font-size: 2.2rem;
  text-align: center;
  color: #0d0d0d;
  margin: 0.8rem 0 4rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
    margin: 0.8rem 0 3.2rem;
    line-height: 20px;
  }
`;

export const EmptyCartButton = styledMUI(Button)`
  padding: 1.2rem 3.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 2rem;
  color: #F4F4F4;
  background-color: #0D0D0D;
  display: flex;
  align-item: center;
  justify-content: center;
  text-transform: unset;
  width: 20%;
  margin: 0 auto;

  &:hover {
    background-color: #0d0d0d;
  }

  @media only screen and (max-width: 768px) {
    width: 35%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
    font-size: 1.8rem;
  }
`;
