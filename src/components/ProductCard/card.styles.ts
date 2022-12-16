import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ProductsCard = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  background: #e4e3e3;
  box-shadow: 0px 3px 10px rgba(13, 13, 13, 0.15);
  border-radius: 8px;
  position: relative;

  @media only screen and (min-width: 1024px) {
    width: 36.6rem;
    margin-bottom: 6rem;
  }
`;

export const Favourite = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: #f9f9f9;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;

  // @media only screen and (min-width: 500px) {
  //   width: 4rem;
  //   height: 4rem;
  //   top: 16px;
  //   right: 16px;
  // }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 12rem;

  @media only screen and (min-width: 600px) {
    width: 25rem;
    // height: 22.5rem;
  }

  @media only screen and (max-width: 300px) {
    height: 17rem;
  }

  img {
    object-fit: cover;
  }
`;

export const ProductsBox = styled.div`
  padding: 1rem 0.8rem 2rem;

  // @media only screen and (min-width: 500px) {
  //   padding: 2.4rem 2rem 3.2rem;
  // }
`;

export const ProductName = styled.h3`
  font-family: 'Playfair Display';
  font-weight: 600;
  color: #0d0d0d;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;

  // @media only screen and (min-width: 500px) {
  //   font-size: 2.2rem;
  //   padding-bottom: 1.2rem;
  // }
`;

export const ProductPrice = styled.p`
  font-size: 1.8rem;
  color: #1b2021;

  // @media only screen and (min-width: 500px) {
  //   font-size: 2rem;
  // }
`;

export const ProductButton = styledMUI(Button)`
  padding: .8rem 1.6rem;
  background-color: #d9b80c;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
  font-size: 1.6rem;
  color: #1b2021;
  text-transform: unset;
  width: 95%;
  margin-left: 2.5%;
  margin-bottom: 1rem;

  :hover {
    background-color: #d9b80c;
  }

  // @media only screen and (max-width: 500px) {
  //       padding: 1.2rem 2rem;
  // }
`;
