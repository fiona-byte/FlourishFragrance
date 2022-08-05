// import styled from "styled-components";
import { styled as styledMUI } from '@mui/material/styles';
import { Button } from '@mui/material';
import './header.css';

const CustomButton = styledMUI(Button)`
  padding: .8rem 5rem;
  background: #0D0D0D;
  border-radius: 8px;
  text-transform: capitalize;
  color: #F4F4F4;
  font-family: 'Playfair Display';
  font-weight: 600;
  font-size: 2rem;
  
  &:hover {
    background: #0D0D0D;
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const Header = () => {
  return (
    <header className='header'>
      <div className='header__hero'>
        <h1 className='header__hero--heading'>
          <span>Wearing your elegance</span>
          <span>everyday</span>
        </h1>
        <p className='header__hero--sub'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit sociis nibh blandit sit massa
          faucibus.
        </p>
        <CustomButton variant='contained'>Shop Now</CustomButton>
      </div>
    </header>
  );
};

export default Header;
