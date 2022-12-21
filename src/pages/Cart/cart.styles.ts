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
  @media only screen and (min-width: 900px) {
    padding: 0 3.2rem;
  }

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: rgba(13, 13, 13, 0.2);
    margin-top: 2.4rem;
  }
`;

export const CartControl = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CartCard = styled.div`
  display: flex;
  padding-top: 2.4rem;

  @media only screen and (min-width: 1024px) {
    padding-top: 3.2rem;
  }
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
  font-weight: 600;
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

  @media only screen and (max-width: 320px) {
    margin-left: 2rem;
  }
`;

export const CartProductName = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2rem;
  color: #0d0d0d;

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;

    @media only screen and (max-width: 320px) {
      font-size: 1.6rem;
    }
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

  @media only screen and (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

export const ProductPrice = styled.p`
  @media only screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 2.6rem;
    color: #0d0d0d;
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

    @media only screen and (max-width: 320px) {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 320px) {
    padding-right: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 0 3.2rem;

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
  }
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

  @media only screen and (min-width: 768px) {
    padding-left: 3.2rem;
  }
`;

export const CartButtonContainer = styled.div`
  margin: 3.2rem auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: '4rem';
  }
`;

export const CartFilledButton = styledMUI(Button)`
  padding: 1rem 2.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.8rem;
  color: #F4F4F4;
  background-color: #0D0D0D;
  text-transform: capitalize;
  width: 100%;

  :hover {
    background-color: #0D0D0D;
  }

  @media only screen and (min-width: 600px) {
    width: 45%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    width: 28%;
    margin: unset;
    margin-left: 2.4rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 20%;
  }
`;

export const CartOutlinedButton = styled(Link)`
  padding: 1rem 2.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.8rem;
  border: 2px solid #0d0d0d;
  color: #0d0d0d;
  background-color: transparent;
  text-transform: capitalize;
  width: 100%;
  margin-right: 2.4rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    width: 28%;
  }

  @media only screen and (min-width: 1024px) {
    width: 20%;
  }
`;

export const CartLink = styled(Link)`
  font-size: 1.8rem;
  text-align: center;
  color: #1b2021;
  order: 1;
  margin-top: 1.6rem;
`;
