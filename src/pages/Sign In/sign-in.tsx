import { Link } from 'react-router-dom';
import Google from '../../assets/svgs/googleIcon';
import {
  SignInButton,
  SignInContainer,
  SignInHeading,
  SignInSub,
  SignInSpan,
  Wrapper,
  SignInInput,
  SignInForm,
  SignInFormGroup,
  SignInLabel,
  GoogleButton,
  SignInText,
} from './signin.styles';

const SignIn = () => {
  return (
    <Wrapper>
      {/* <SignInLeft /> */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SignInContainer>
          <SignInHeading>Hello again</SignInHeading>
          <SignInSub>Please enter your details to sign in to your account</SignInSub>
          <GoogleButton>
            <Google />
            <span style={{ paddingLeft: '1.6rem' }}>Sign in with Google</span>
          </GoogleButton>
          <SignInSpan>or</SignInSpan>
          <SignInForm>
            <SignInFormGroup>
              <SignInLabel htmlFor='email'>Email</SignInLabel>
              <SignInInput type='email' id='email' placeholder='Enter your email' />
              <span className='focus-border'></span>
            </SignInFormGroup>
            <SignInFormGroup>
              <SignInLabel htmlFor='password'>Password</SignInLabel>
              <SignInInput type='password' id='password' placeholder='Enter your password' />
              <span className='focus-border'></span>
            </SignInFormGroup>
            <p className='signin__link'>Forgot password?</p>
            <SignInButton>Sign in</SignInButton>
            <SignInText>
              Don't have an account?{' '}
              <Link to='/' className='signin__text--link'>
                Sign up
              </Link>
            </SignInText>
          </SignInForm>
        </SignInContainer>
      </div>
    </Wrapper>
  );
};

export default SignIn;
