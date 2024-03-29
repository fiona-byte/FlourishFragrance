import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  background-color: #c7c5c5;
  border-radius: 42px;
  width: 12.5rem;

  @media only screen and (max-width: 600px) {
    width: 12rem;
  }

  @media only screen and (max-width: 320px) {
    width: 10rem;
  }
`;

export const SwitchText = styled.p`
  font-size: 2rem;
  color: #0d0d0d;
  font-weight: 500;

  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const SwitchButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #e4e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #0d0d0d;

  &:disabled {
    background: #c7c5c5;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media only screen and (max-width: 600px) {
    width: 2.8rem;
    height: 2.8rem;
  }

  @media only screen and (max-width: 320px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
