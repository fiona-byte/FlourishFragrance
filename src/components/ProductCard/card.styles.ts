import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ProductsCard = styled.div`
  width: 33rem;
  background: #e4e3e3;
  box-shadow: 0px 3px 10px rgba(13, 13, 13, 0.15);
  border-radius: 8px;
  position: relative;
  margin-bottom: 6rem;

  @media only screen and (max-width: 500px) {
    margin-bottom: 4rem;
  }
`;

export const Favourite = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #f9f9f9;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const ProductImageContainer = styled.div`
  width: 33rem;
  height: 22.5rem;
  object-fit: contain;
`;

export const ProductsBox = styled.div`
  padding: 2.4rem 2rem 3.2rem;
`;

export const ProductName = styled.h3`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.4rem;
  color: #0d0d0d;
  padding-bottom: 1.2rem;

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 400;
  font-size: 2.2rem;
  color: #1b2021;

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const ProductButton = styledMUI(Button)`
  padding: 12px 20px;
  background-color: #d9b80c;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
  font-size: 1.8rem;
  color: #1b2021;
  text-transform: capitalize;
  width: 95%;
  margin-left: 2.5%;
  margin-bottom: 1rem;

  :hover {
    background-color: #d9b80c;
  }
`;
