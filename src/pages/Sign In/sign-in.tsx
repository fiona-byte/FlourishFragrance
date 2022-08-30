import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
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
} from './signin.styles';

type formValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');

  const mutation = useMutation((payload: formValues) => authServices.login(payload), {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (response) => {
      console.log(response);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { email, password };
    mutation.mutate(payload);
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SignInContainer>
          <SignInHeading>Hello again</SignInHeading>
          <SignInSub>Please enter your details to sign in to your account</SignInSub>
          <GoogleButton>
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
                type='password'
                id='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='focus-border'></span>
            </SignInFormGroup>
            <p className='signin__link'>Forgot password?</p>
            <SignInButton type='submit'>{mutation.isLoading ? 'Loading' : 'Sign in'}</SignInButton>
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
