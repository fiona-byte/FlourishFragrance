import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  border-radius: 8px;
  margin: 5.6rem 8rem;
  padding: 0;
  background: linear-gradient(rgba(13, 13, 13, 0.2), rgba(13, 13, 13, 0.2)),
    url('https://res.cloudinary.com/dw4rdnuqh/image/upload/v1671178436/FlourishFragrance/forgot-password_h7umfd.jpg');
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: 50%;
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

export const ForgotPasswordContainer = styled.div`
  background: #e4e3e3;
  padding: 4rem;
  width: 50%;

  @media only screen and (max-width: 768px) {
    background: inherit;
    padding: 0rem;
    width: 100%;
  }
`;

export const ForgotPasswordHeading = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.7rem;
  color: #0d0d0d;
  text-transform: capitalize;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 2.4rem;
  }
`;

export const ForgotPasswordSub = styled.p`
  font-size: 1.8rem;
  color: #1b2021;
  padding: 0.8rem 0 3.2rem;
  text-align: center;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const ForgotPasswordForm = styled.form`
  margin-top: 2rem;

  & .forgot-password__link {
    display: block;
    font-size: 1.6rem;
    color: #1b2021;
    text-align: right;
    padding-top: 1.6rem;

    @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

export const ForgotPasswordFormGroup = styled.div`
  position: relative;

  :first-of-type {
    margin-bottom: 4rem;
  }
`;

export const ForgotPasswordLabel = styled.label`
  padding-bottom: 1.6rem;
  font-weight: 400;
  font-size: 2rem;
  color: #0d0d0d;
  display: block;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const ForgotPasswordInput = styled.input`
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

export const ForgotPasswordButton = styledMUI(Button)`
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

export const ForgotPasswordText = styled.p`
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
