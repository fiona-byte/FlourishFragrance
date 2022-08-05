import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/landing-page';
import MainApp from './mainApp';

const Container = () => {
  return (
    <Routes>
      <Route path='/' element={<MainApp />}>
        <Route path='/' element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default Container;
