import {
  FooterContainer,
  FooterLogo,
  FooterWrapper,
  FooterBox,
  FooterHeading,
  FooterList,
  FooterLink,
  FooterText,
  Input,
  CTAButton,
  FooterCopy,
} from './styles';
import logo from '../../assets/svgs/logo-white.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={logo} alt='logo' className='footer__logo' />
      </FooterLogo>
      <FooterWrapper>
        <FooterBox>
          <FooterHeading>Quick links</FooterHeading>
          <ul className='footer__list'>
            <FooterList>
              <FooterLink href=''>Home</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href=''>FAQ</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href=''>Privacy</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href=''>Contact</FooterLink>
            </FooterList>
          </ul>
        </FooterBox>
        <FooterBox>
          <FooterHeading>Contact</FooterHeading>
          <ul className='footer__list'>
            <FooterList>
              <FooterText>123, Country, Earth, Universe</FooterText>
            </FooterList>
            <FooterList>
              <FooterText>flourishfragrance@gmail.com</FooterText>
            </FooterList>
            <FooterList>
              <FooterLink href='tel:+1 234 567 890'>+1 234 567 890</FooterLink>
            </FooterList>
          </ul>
        </FooterBox>
        <FooterBox>
          <FooterHeading>Receive updates and new arrivals</FooterHeading>
          <Input placeholder='Enter email address' />
          <CTAButton>Subscribe</CTAButton>
        </FooterBox>
      </FooterWrapper>
      <FooterCopy>&copy; 2022. All rights reserved</FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
