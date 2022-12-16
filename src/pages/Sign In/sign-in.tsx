import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/svgs/googleIcon';
import { authServices } from '../../services/authServices';
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
  IconButton,
} from './signin.styles';
import Eye from '../../assets/svgs/eye';
import EyeClose from '../../assets/svgs/eyeClose';

type formValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibilty = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleGoogleAuth = () => {
    authServices.authWithGoogle();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload: formValues = { email, password };
    authServices.login(payload);
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SignInContainer>
          <SignInHeading>Hello again</SignInHeading>
          <SignInSub>Please enter your details to sign in to your account</SignInSub>
          <GoogleButton onClick={handleGoogleAuth}>
            <Google />
            <span style={{ paddingLeft: '1.6rem' }}>Sign in with Google</span>
          </GoogleButton>
          <SignInSpan>or</SignInSpan>
          <SignInForm onSubmit={handleSubmit}>
            <SignInFormGroup>
              <SignInLabel htmlFor='email'>Email</SignInLabel>
              <SignInInput
                type='email'
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='focus-border'></span>
            </SignInFormGroup>
            <SignInFormGroup>
              <SignInLabel htmlFor='password'>Password</SignInLabel>
              <SignInInput
                type={passwordVisibility ? 'text' : 'password'}
                id='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IconButton onClick={handlePasswordVisibilty}>{passwordVisibility ? <EyeClose /> : <Eye />}</IconButton>
              <span className='focus-border'></span>
            </SignInFormGroup>
            <Link to='/forgot-password' className='signin__link'>
              Forgot password?
            </Link>
            <SignInButton type='submit'>Sign in</SignInButton>
            <SignInText>
              Don't have an account?{' '}
              <Link to='/signup' className='signin__text--link'>
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
