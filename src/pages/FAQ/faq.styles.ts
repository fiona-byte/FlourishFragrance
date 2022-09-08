import styled from 'styled-components';

export const FAQWrapper = styled.div`
  padding: 4.8rem 8rem;

  @media only screen and (max-width: 768px) {
    padding: 4.8rem 5rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 4rem 2rem;
  }

  & .heading {
    margin-bottom: 5.2rem;

    @media only screen and (max-width: 500px) {
      margin-bottom: 4rem;
    }
  }
`;

export const QuestionBox = styled.div`
  padding: 2.4rem 2.5rem;
  background-color: #c7c5c5;
  border-radius: 8px;
  position: relative;
  margin-bottom: 4rem;

  @media only screen and (max-width: 500px) {
    padding: 1.6rem;
    margin-bottom: 3.2rem;
  }
`;

export const QuestionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const QuestionHeader = styled.h2`
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2.2rem;
  color: #0d0d0d;

  @media only screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

export const AnswerText = styled.p`
  font-size: 1.8rem;
  color: #1b2021;
  line-height: 22px;
  padding-left: 2.4rem;
  position: relative;
  opacity: 0;
  max-height: 0;
  visibility: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in-out;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 3px;
    background-color: #d9b80c;
    position: absolute;
    left: 1.2rem;
  }

  &.open {
    padding-top: 2.4rem;
    max-height: fit-content;
    opacity: 1;
    visibility: visible;
  }
`;

export const FAQHeader = styled.h3`
  font-family: 'Playfair Display';
  font-weight: 400;
  text-align: center;
  font-size: 2.7rem;
  color: #0d0d0d;
  margin: 4.8rem 0 1.6rem;

  @media only screen and (max-width: 500px) {
    font-size: 2.4rem;
  }
`;

export const FAQSub = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #1b2021;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const FAQLink = styled.a`
  font-weight: 600;
`;
