import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button, Rating } from '@mui/material';

export const ProductDetailsContainer = styled.div`
  padding: 4rem 2rem 4rem;

  @media only screen and (min-width: 600px) {
    padding: 4rem 5rem 4rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 5.6rem 5rem 8rem;
  }

  @media only screen and (min-width: 1500px) {
    padding: 5.6rem 17rem 8rem;
  }
`;

export const ProductsDetailsWrapper = styled.div`
  margin-bottom: 4rem;

  @media only screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProductDetailsBox = styled.div`
  @media only screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    margin-right: 2.4rem;
  }

  @media only screen and (min-width: 1200px) {
    margin-right: 8rem;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 27rem;
  object-fit: cover;
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    height: 40rem;
  }

  @media only screen and (min-width: 900px) {
    width: 37rem;
    height: 42rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 50rem;
    height: 54rem;
  }
`;

export const ProductDetailsImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2.4rem 0;

  @media only screen and (min-width: 900px) {
    flex-direction: column;
    margin: 0 0 0 1.2rem;
  }

  @media only screen and (min-width: 1200px) {
    margin: 0 0 0 2.4rem;
  }
`;

export const ProductDetailsImage = styled.img`
  width: 7.6rem;
  height: 6.8rem;
  border-radius: 5px;
  padding-bottom: 0.8rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.9rem;

    @media only screen and (min-width: 900px) {
      margin-bottom: 1.6rem;
    }
  }

  @media only screen and (min-width: 900px) {
    width: 12.6rem;
    height: 11rem;
  }
`;

export const ProductDetailsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    @media only screen and (min-width: 1200px) {
      width: 2.8rem;
      height: 2.8rem;
    }
  }
`;

export const ProductName = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 32px;
  color: #0d0d0d;

  @media only screen and (min-width: 1200px) {
    font-size: 2.7rem;
  }
`;

export const Ratings = styledMUI(Rating)`
  &.MuiRating-root,
  &.MuiRating-label {
    color: #0d0d0d;
  }
`;

export const ReviewsText = styled.p`
  font-size: 1.8rem;
  color: #1b2021;
`;

export const ProductDescription = styled.p`
  font-size: 1.6rem;
  line-height: 170%;
  color: #1b2021;
  margin: 2.4rem 0 3.2rem;

  @media only screen and (min-width: 1200px) {
    font-size: 2rem;
    margin: 2.4rem 0 5.6rem;
  }
`;

export const ProductPrice = styled.h3`
  font-weight: 700;
  font-size: 3rem;
  color: #0d0d0d;

  @media only screen and (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

export const ProductDetailsBtnContainer = styled.h3`
  margin-top: 3.2rem;

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  @media only screen and (min-width: 900px) {
    margin-top: 6.4rem;
  }
`;

export const OutlinedBtn = styledMUI(Button)`
  padding: 1.2rem 2rem;
  background-color: transparent;
  border: 2px solid #0D0D0D;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
  font-size: 1.8rem;
  color: #0D0D0D;
  text-transform: unset;
  width: 100%;
  margin-bottom: 2.4rem;

  :hover {
    background-color: transparent;
  }

  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
      margin-bottom: 0;
  }

   @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;

export const FilledBtn = styledMUI(Button)`
  padding: 1.2rem 2rem;
  background-color: #0D0D0D;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
  font-size: 1.8rem;
  color: #FFFFFF;;
  text-transform: unset;
  width: 100%;

  :hover {
    background-color: #0D0D0D;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 2rem;
  }

   @media only screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;
