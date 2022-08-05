import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const ReviewsContainer = styled.section`
  background: #e4e3e3;
  padding: 8rem;

  @media only screen and (max-width: 500px) {
    padding: 5rem 2rem;
  }
`;

export const ReviewsBox = styledMUI(Box)`
  background: #1B2021;
  border-radius: 8px;
  padding: 4rem 3.2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  
  @media only screen and (max-width: 500px) {
    padding: 3.2rem 2.4rem;
  }
`;

export const ReviewSeperator = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  color: #f4f4f4;
  margin-right: 5.6rem;
  margin-right: 5.3rem;
`;

export const ReviewProfileCard = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 3.2rem;

  @media only screen and (max-width: 375px) {
    width: 65px;
    height: 65px;
    margin-right: 2.4rem;
  }
`;

export const ReviewProfileHeading = styled.h3`
  font-family: 'Playfair Display';
  font-weight: 700;
  font-size: 2.2rem;
  color: #f4f4f4;
  padding-bottom: 0.8rem;

  @media only screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const ReviewProfileSub = styled.p`
  letter-spacing: 0.05em;
  font-weight: 300;
  font-size: 1.8rem;
  color: #f4f4f4;

  @media only screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const ReviewsIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 4%;
  right: 0%;
`;

export const ReviewsIconButton = styled.button`
  padding: 1.2rem 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  background: #323c3e;
  border-radius: 8px;
  margin-right: 1.6rem;

  :hover {
    background: #283234;
  }

  @media only screen and (max-width: 500px) {
    padding: 1rem 1.2rem;
  }
`;

export const ReviewsText = styled.p`
  font-style: italic;
  font-weight: 600;
  font-size: 2.7rem;
  line-height: 145%;
  color: #f4f4f4;
  padding-top: 4rem;

  @media only screen and (max-width: 375px) {
    font-size: 2rem;
    line-height: 150%;
  }
`;
