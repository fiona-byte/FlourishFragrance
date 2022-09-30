import styled from 'styled-components';

export const AboutContainer = styled.section`
  background: #e4e3e3;
  padding: 8rem 17rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 5rem 2rem;
  }
`;

export const AboutText = styled.p`
  font-size: 2rem;
  color: #1b2021;
  line-height: 150%;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
    line-height: 160%;
  }
`;
