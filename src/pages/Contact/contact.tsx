import { Link } from 'react-router-dom';
import {
  ContactButton,
  ContactContainer,
  ContactHeading,
  ContactSub,
  Wrapper,
  ContactInput,
  ContactForm,
  ContactFormGroup,
  ContactLabel,
  ContactTextarea,
} from './contact.styles';

const Contact = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ContactContainer>
          <ContactHeading>Get in Touch</ContactHeading>
          <ContactSub>We'd love to hear from you</ContactSub>
          <ContactForm>
            <ContactFormGroup>
              <ContactLabel htmlFor='name'>Name</ContactLabel>
              <ContactInput type='name' id='name' placeholder='Enter your name' />
              <span className='focus-border'></span>
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactLabel htmlFor='email'>Email</ContactLabel>
              <ContactInput type='email' id='email' placeholder='Enter your email' />
              <span className='focus-border'></span>
            </ContactFormGroup>
            <ContactFormGroup>
              <ContactLabel htmlFor='message'>Message</ContactLabel>
              <ContactTextarea id='message' placeholder='Enter your message'></ContactTextarea>
              <span className='focus-border'></span>
            </ContactFormGroup>
            <ContactButton>Send</ContactButton>
          </ContactForm>
        </ContactContainer>
      </div>
    </Wrapper>
  );
};

export default Contact;
