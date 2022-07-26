import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  border-radius: 8px;
  margin: 5.6rem 8rem;
  padding: 0;
  background: linear-gradient(rgba(13, 13, 13, 0.2), rgba(13, 13, 13, 0.2)),
    url('https://res.cloudinary.com/dw4rdnuqh/image/upload/v1661635967/FlourishFragrance/sign-up_rqmyjr.jpg');
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media only screen and (min-width: 1500px) {
    margin: 5.6rem 17rem;
  }

  @media only screen and (max-width: 900px) {
    margin: 5.6rem 5rem;
  }

  @media only screen and (max-width: 768px) {
    background: none;
    margin: 4rem 5rem;
  }

  @media only screen and (max-width: 500px) {
    margin: 4rem 2rem;
  }
`;

export const SignUpContainer = styled.div`
  background: #e4e3e3;
  padding: 4rem;
  width: 50%;

  @media only screen and (max-width: 768px) {
    background: inherit;
    padding: 0rem;
    width: 100%;
  }
`;

export const SignUpHeading = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.7rem;
  color: #0d0d0d;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 2.4rem;
  }
`;

export const SignUpSub = styled.p`
  font-size: 1.8rem;
  color: #1b2021;
  padding: 0.8rem 0 3.2rem;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const GoogleButton = styledMUI(Button)`
    padding: 1.2rem 3.2rem;
    border: 2px solid #0D0D0D;
    border-radius: 8px;
    font-weight: 600;
    font-family: 'Source Sans Pro';
    font-size: 2rem;
    color: #0d0d0d;
    text-transform: unset;
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 1.6rem auto 2.4rem;

  @media only screen and (max-width: 500px) {
    width: 70%;
    margin: 1.6rem auto 3.2rem;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const SignUpSpan = styled.span`
  font-size: 2rem;
  color: #0d0d0d;
  margin-top: 3.2rem;
  text-align: center;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }

  ::before,
  ::after {
    content: '';
    display: block;
    opacity: 0.3;
    height: 1px;
    background-color: #0d0d0d;
    width: 100%;
  }

  ::before {
    margin-right: 1.6rem;
  }

  ::after {
    margin-left: 1.6rem;
  }
`;

export const SignUpForm = styled.form`
  margin-top: 4rem;

  & .signUp__link {
    font-size: 1.6rem;
    color: #1b2021;
    text-align: right;
    padding-top: 1.6rem;

    @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export const SignUpFormGroup = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const SignUpLabel = styled.label`
  padding-bottom: 1.6rem;
  font-weight: 400;
  font-size: 2rem;
  color: #0d0d0d;
  display: block;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const SignUpInput = styled.input`
  padding-bottom: 1rem;
  border: none;
  border-bottom: 2px solid #0d0d0d33;
  color: #0D0D0D;
  background: transparent;
  outline: none;
  font-size: 1.8rem;
  font-family: inherit;
  position: relative;
  width: 100%;
  transition: border-bottom: .3s ease-in-out;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ##0D0D0D !important;
  }

  & ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #1B2021;
    transition: 0.4s;
  }

  :focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 0;
`;

export const SignUpButton = styledMUI(Button)`
  padding: 1.2rem 3.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 2rem;
  color: #F4F4F4;
  background-color: #0D0D0D;
  margin: 0 auto 2.4rem;
  text-transform: capitalize;
  display: flex;
  align-item: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;

  :hover {
    background-color: #0D0D0D;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SignUpText = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: #1b2021;
  text-align: center;

  a {
    font-weight: 600;
    font-size: 2rem;
    color: #1b2021;
  }
`;
