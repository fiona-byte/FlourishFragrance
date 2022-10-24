import Contact from '../pages/Contact/contact';
import FAQ from '../pages/FAQ/faq';
import LandingPage from '../pages/LandingPage/landing-page';
import ProductDetails from '../pages/Product details/product-details';
import ProductsPage from '../pages/ProductsPage/products-page';
import SignIn from '../pages/Sign In/sign-in';
import SignUp from '../pages/Sign Up/sign-up';

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
    path: '/signup',
    Component: <SignUp />,
    exact: true,
  },
  {
    path: '/signin',
    Component: <SignIn />,
    exact: true,
  },
  {
    path: '/products',
    Component: <ProductsPage />,
    exact: true,
  },
  {
    path: '/product-details',
    Component: <ProductDetails />,
    exact: true,
  },
  {
    path: '/faq',
    Component: <FAQ />,
    exact: true,
  },
];
