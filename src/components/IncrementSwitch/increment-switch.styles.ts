import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  background-color: #c7c5c5;
  border-radius: 42px;
  width: 15rem;
`;

export const SwitchText = styled.p`
  font-size: 2.4rem;
  color: #0d0d0d;
  font-weight: 500;
`;

export const SwitchButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #e4e3e3;
  display: flex;
  font-family: inherit;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #0d0d0d;

  &:disabled {
    background: #c7c5c5;
  }
`;
