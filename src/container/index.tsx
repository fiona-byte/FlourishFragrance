import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routePaths } from '../routes';
import MainApp from './mainApp/mainApp';

const Container = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<MainApp />}>
          {routePaths.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default Container;
