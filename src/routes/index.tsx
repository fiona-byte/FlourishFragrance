import Cart from '../pages/Cart/cart';
import Contact from '../pages/Contact/contact';
import FAQ from '../pages/FAQ/faq';
import ForgotPassword from '../pages/ForgotPassword/forgot-password';
import LandingPage from '../pages/LandingPage/landing-page';
import ProductDetails from '../pages/Product details/product-details';
import ProductsPage from '../pages/ProductsPage/products-page';
import SignIn from '../pages/Sign In/sign-in';
import SignUp from '../pages/Sign Up/sign-up';

interface RouteProps {
  path: string;
  Component: JSX.Element;
}

export const routePaths: RouteProps[] = [
  {
    path: '/',
    Component: <LandingPage />,
  },
  {
    path: '/contact',
    Component: <Contact />,
  },
  {
    path: '/signup',
    Component: <SignUp />,
  },
  {
    path: '/signin',
    Component: <SignIn />,
  },
  {
    path: '/forgot-password',
    Component: <ForgotPassword />,
  },
  {
    path: '/products',
    Component: <ProductsPage />,
  },
  {
    path: '/product-details/:id',
    Component: <ProductDetails />,
  },
  {
    path: '/cart',
    Component: <Cart />,
  },
  {
    path: '/faq',
    Component: <FAQ />,
  },
];
