import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';

export const SubFooterSection = styled.section`
  height: 85vh;
  background: linear-gradient(0deg, rgba(27, 32, 33, 0.3), rgba(27, 32, 33, 0.3)),
    url(${'https://res.cloudinary.com/dw4rdnuqh/image/upload/v1660999843/FlourishFragrance/subFooterImg_dyfom7.png'});
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    height: 45vh;
  }
`;

export const SubFooterHeader = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 3.6rem;
  color: #f4f4f4;
  text-align: center;
  padding-bottom: 4.8rem;

  @media only screen and (max-width: 500px) {
    font-size: 2.7rem;
  }
`;

export const SubFooterButton = styledMUI(Button)`
    padding: 1.2rem 2.4rem;
    background-color: #0D0D0D;
    border-radius: 8px;
    font-weight: 600;
    font-family: 'Source Sans Pro';
    font-size: 1.8rem;
    color: #f4f4f4;
    text-transform: unset;
    margin: 0 auto 1rem;

  :hover {
      background-color: #0D0D0D;
  }

  @media only screen and (max-width: 375px) {
    width: 100%
  }
`;
