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
  FooterSocialBox,
  FooterSocialIcon,
  FooterLogoContainer,
} from './footer.styles';
import instagram from '../../assets/svgs/instagram.svg';
import whatsapp from '../../assets/svgs/whatsapp.svg';
import telegram from '../../assets/svgs/telegram.svg';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <FooterLogo
          src='https://res.cloudinary.com/dw4rdnuqh/image/upload/v1660999508/FlourishFragrance/logo-white_ig6nk6.svg'
          alt='logo'
        />
      </FooterLogoContainer>
      <FooterWrapper>
        <FooterBox>
          <FooterHeading>Quick links</FooterHeading>
          <ul className='footer__list'>
            <FooterList>
              <FooterLink to='/'>Home</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink to='/faq'>FAQ</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink to=''>Privacy</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink to='/contact'>Contact</FooterLink>
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
              <FooterLink to='tel:+1 234 567 890'>+1 234 567 890</FooterLink>
            </FooterList>
            <FooterList>
              <FooterSocialBox>
                <FooterLink to='' style={{ paddingRight: '1.6rem' }}>
                  <FooterSocialIcon src={instagram} alt='social-icon' />
                </FooterLink>
                <FooterLink to='' style={{ paddingRight: '1.6rem' }}>
                  <FooterSocialIcon src={whatsapp} alt='social-icon' />
                </FooterLink>
                <FooterLink to='' style={{ paddingRight: '1.6rem' }}>
                  <FooterSocialIcon src={telegram} alt='social-icon' />
                </FooterLink>
              </FooterSocialBox>
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
