import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { authServices } from '../../services/authServices';
import Google from '../../assets/svgs/googleIcon';
import Eye from '../../assets/svgs/eye';
import EyeClose from '../../assets/svgs/eyeClose';
import {
  SignUpButton,
  SignUpContainer,
  SignUpHeading,
  SignUpSub,
  SignUpSpan,
  Wrapper,
  SignUpInput,
  SignUpForm,
  SignUpFormGroup,
  IconButton,
  SignUpLabel,
  GoogleButton,
  SignUpText,
} from './signup.styles';

type inputValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const defaultFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [formValues, setFormValues] = useState<inputValues>(defaultFormValues);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibilty = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleGoogleAuth = () => {
    const res = authServices.authWithGoogle();
    console.log(res);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    authServices.register(formValues);
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SignUpContainer>
          <SignUpHeading>Create an account</SignUpHeading>
          <SignUpSub>Start for free!</SignUpSub>
          <GoogleButton onClick={handleGoogleAuth}>
            <Google />
            <span style={{ paddingLeft: '1.6rem' }}>Sign up with Google</span>
          </GoogleButton>
          <SignUpSpan>or</SignUpSpan>
          <SignUpForm onSubmit={handleSubmit}>
            <SignUpFormGroup>
              <SignUpLabel htmlFor='firstName'>First Name</SignUpLabel>
              <SignUpInput
                type='text'
                id='firstName'
                name='firstName'
                placeholder='Enter your first name'
                value={formValues.firstName}
                onChange={handleChange}
              />
              <span className='focus-border'></span>
            </SignUpFormGroup>
            <SignUpFormGroup>
              <SignUpLabel htmlFor='lastName'>Last Name</SignUpLabel>
              <SignUpInput
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Enter your last name'
                value={formValues.lastName}
                onChange={handleChange}
              />
              <span className='focus-border'></span>
            </SignUpFormGroup>
            <SignUpFormGroup>
              <SignUpLabel htmlFor='email'>Email</SignUpLabel>
              <SignUpInput
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                value={formValues.email}
                onChange={handleChange}
              />
              <span className='focus-border'></span>
            </SignUpFormGroup>
            <SignUpFormGroup>
              <SignUpLabel htmlFor='password'>Password</SignUpLabel>
              <SignUpInput
                type={passwordVisibility ? 'text' : 'password'}
                id='password'
                name='password'
                placeholder='Enter your password'
                value={formValues.password}
                onChange={handleChange}
              />
              <span className='focus-border'></span>
              <IconButton onClick={handlePasswordVisibilty}>{passwordVisibility ? <EyeClose /> : <Eye />}</IconButton>
            </SignUpFormGroup>
            <SignUpButton type='submit'>Create account</SignUpButton>
            <SignUpText>
              Already have an account?{' '}
              <Link to='/signin' className='signup__text--link'>
                Sign in
              </Link>
            </SignUpText>
          </SignUpForm>
        </SignUpContainer>
      </div>
    </Wrapper>
  );
};

export default SignUp;
