import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ReviewsContainer = styled.section`
  background: #e4e3e3;
  padding: 8rem;

  @media only screen and (max-width: 768px) {
    padding: 6rem 5rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 5rem 2rem;
  }
`;

export const ReviewsBox = styledMUI(Box)`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 5rem 3.2rem 4rem;
  
  @media only screen and (max-width: 768px) {
    padding-right: 2.4rem;
    max-width: 100%;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 500px) {
    padding: 4rem 2.4rem;
  }
`;

export const ReviewContainer = styledMUI(Box)`
  :first-child {
    margin-right: 3rem;
  }

  :last-child {
    margin-left: 3rem;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex-shrink: 0;

    :first-child {
      margin-right: 0rem;
    }
  }
`;

export const ReviewSeperator = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1px;
  color: #f4f4f4;
  margin: 2.7rem 5.3rem 0 5.6rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
    line-height: 162%;
    padding-top: 3rem;
  }
`;

export const ReviewsDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0 3.2rem;
`;

export const ReviewsDots = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #e4e3e3;

  :first-child {
    background-color: #f2ce16;
  }

  :not(:last-child) {
    margin-right: 0.7rem;
  }
`;
