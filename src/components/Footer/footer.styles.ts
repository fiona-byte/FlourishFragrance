import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Container, Box, Button } from '@mui/material';

export const FooterContainer = styled.footer`
  background-color: #1b2021;
  padding: 8rem 7rem 4rem;

  @media only screen and (max-width: 900px) {
    padding: 8rem 5rem 4rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 8rem 2rem 4rem;
  }
`;

export const FooterLogoContainer = styled.a`
  display: block;
  text-align: center;
  padding-bottom: 3.2rem;

  @media only screen and (max-width: 500px) {
    padding-bottom: 0rem;
  }
`;

export const FooterLogo = styled.img`
  width: 25%;

  @media only screen and (max-width: 768px) {
    width: 30%;
  }

  @media only screen and (max-width: 500px) {
    width: 35%;
  }

  @media only screen and (max-width: 375px) {
    width: 47%;
  }
`;

export const FooterWrapper = styledMUI(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 6.4rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
      margin-top: 4rem;
  }
`;

export const FooterBox = styledMUI(Box)`
    background: transparent;

    @media only screen and (max-width: 900px) {
      padding: 2.4rem 0;
    }
`;

export const FooterHeading = styled.h4`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.4rem;
  color: #ffffff;
  padding-bottom: 3rem;

  @media only screen and (max-width: 375px) {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
`;

export const FooterList = styled.li`
  :not(:first-of-type) {
    padding-top: 2.4rem;
  }
`;

export const FooterLink = styled.a`
  font-weight: 300;
  font-size: 2rem;
  color: #f4f4f4;

  @media only screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const FooterText = styled.p`
  font-weight: 300;
  font-size: 2rem;
  color: #f4f4f4;

  @media only screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const FooterSocialBox = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterSocialIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

export const Input = styled.input`
  padding: 1.4rem 2rem;
  display: block;
  background: transparent;
  border: 2px solid #f4f4f4;
  border-radius: 8px;
  color: #f4f4f4;
  font-weight: 400;
  font-size: 1.8rem;
  outline: none;
  font-family: inherit;
  width: 100%;
  margin-bottom: 1.6rem;

  @media only screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const CTAButton = styledMUI(Button)`
    padding: .8rem 5rem;
    display: block;
    background: #E4E3E3;
    border-radius: 8px;
    color: #0D0D0D;
    text-transform: capitalize;
    font-family: inherit;
    font-weight: 600;
    font-size: 2rem;
    width: 100%;
    letter-spacing: 0;

    &:hover {
        background: #E4E3E3;
    }
`;

export const FooterCopy = styled.p`
  font-weight: 200;
  font-size: 2rem;
  color: #f4f4f4;
  text-align: center;
  margin-top: 6.4rem;

  @media only screen and (max-width: 900px) {
    margin-top: 5.6rem;
  }

  @media only screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;
