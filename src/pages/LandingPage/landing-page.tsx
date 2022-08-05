import About from '../About/about';
import Header from '../Header/header';
import Products from '../Products/products';
import Reviews from '../Reviews/reviews';
import SubFooter from '../SubFooter/sub-footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <About />
      <Products />
      <Reviews />
      <SubFooter />
    </>
  );
};

export default LandingPage;
