import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';
import styled from 'styled-components';

export const CartWrapper = styled.div`
  padding: 4rem 2rem;

  @media only screen and (min-width: 600px) {
    padding: 4rem 5rem;
  }
`;

export const CartHeading = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.4rem;
  color: #0d0d0d;
`;

export const CartBox = styled.div`
  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: rgba(13, 13, 13, 0.2);
    margin-top: 2.4rem;
  }
`;

export const CartCard = styled.div`
  display: flex;
  padding: 2.4rem 0;
`;

export const CartImage = styled.img`
  width: 10.8rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    width: 11.8rem;
    height: 15rem;
  }
`;

export const ProductCount = styled.p`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  background: #e4e3e3;
  border: 1px solid #1b2021;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #1b2021;
  position: absolute;
  top: -7px;
  right: -5px;
  z-index: 2;
`;

export const CartProductInfo = styled.div`
  margin-left: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartProductName = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2rem;
  color: #0d0d0d;

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const CartPrice = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  color: #1b2021;
  margin-top: 0.8rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const CartRemoveButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: inherit;
  margin-left: auto;
  padding-right: 1.6rem;

  & span {
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: 0.1em;
    color: #0d0d0d;
    text-transform: uppercase;
    padding-left: 0.8rem;

    @media only screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.4rem 0 3.2rem;
`;

export const CartContainerText = styled.p`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2rem;
  color: #0d0d0d;
`;

export const CartContainerTotal = styled.h2`
  font-weight: 600;
  font-size: 2.4rem;
  color: #0d0d0d;
`;

export const CartButtonContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CartButton = styledMUI(Button)`
  padding: 1.2rem 3.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 2rem;
  color: #F4F4F4;
  background-color: #0D0D0D;
  margin: 2.4rem auto;
  text-transform: capitalize;
  display: flex;
  align-item: center;
  justify-content: center;
  width: 100%;

  :hover {
    background-color: #0D0D0D;
  }

  @media only screen and (min-width: 600px) {
    width: 45%;
  }
`;

export const CartLink = styled(Link)`
  display: block;
  font-size: 1.8rem;
  text-align: center;
  color: #1b2021;
`;
