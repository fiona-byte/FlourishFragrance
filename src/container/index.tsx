import { Route, Routes } from 'react-router-dom';
import { routePaths } from '../routes';
import MainApp from './mainApp/mainApp';

const Container = () => {
  return (
    <Routes>
      <Route path='/' element={<MainApp />}>
        {routePaths.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  );
};

export default Container;
