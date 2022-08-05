import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation';

const MainApp = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainApp;
