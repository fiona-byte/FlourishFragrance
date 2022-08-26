import Contact from '../pages/Contact/contact';
import LandingPage from '../pages/LandingPage/landing-page';
import SignIn from '../pages/Sign In/sign-in';

interface RouteProps {
  path: string;
  Component: JSX.Element;
  exact: boolean;
}

export const routePaths: RouteProps[] = [
  {
    path: '/',
    Component: <LandingPage />,
    exact: true,
  },
  {
    path: '/contact',
    Component: <Contact />,
    exact: true,
  },
  {
    path: '/signin',
    Component: <SignIn />,
    exact: true,
  },
];