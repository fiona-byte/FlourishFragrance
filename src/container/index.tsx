import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routePaths } from '../routes';
import ScrollToTop from '../helpers/scrollToTop';
import MainApp from './mainApp/mainApp';

const Container = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainApp />}>
          {routePaths.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
        </Route>
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </QueryClientProvider>
  );
};

export default Container;
