import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Navigation from '../../components/Navigation/navigation';
import theme from './global.styles';

const MainApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default MainApp;
