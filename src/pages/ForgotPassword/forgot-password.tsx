import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ForgotPasswordButton,
  ForgotPasswordContainer,
  ForgotPasswordForm,
  ForgotPasswordFormGroup,
  ForgotPasswordHeading,
  ForgotPasswordInput,
  ForgotPasswordLabel,
  ForgotPasswordSub,
  ForgotPasswordText,
  Wrapper,
} from './forgot-password.styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ForgotPasswordContainer>
          <ForgotPasswordHeading>Forgot password?</ForgotPasswordHeading>
          <ForgotPasswordSub>No worries, input your email and we'll send you reset instructions.</ForgotPasswordSub>
          <ForgotPasswordForm>
            <ForgotPasswordFormGroup>
              <ForgotPasswordLabel htmlFor='email'>Email</ForgotPasswordLabel>
              <ForgotPasswordInput
                type='email'
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
              <span className='focus-border'></span>
            </ForgotPasswordFormGroup>
            <ForgotPasswordButton type='submit'>Send Instructions</ForgotPasswordButton>
            <ForgotPasswordText>
              Remember your password?{' '}
              <Link to='/signin' className='signin__text--link'>
                Sign in
              </Link>
            </ForgotPasswordText>
          </ForgotPasswordForm>
        </ForgotPasswordContainer>
      </div>
    </Wrapper>
  );
};

export default ForgotPassword;
