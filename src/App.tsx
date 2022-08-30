import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Container from './container';
import Header from './pages/Header/header';

function App() {
  return (
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  );
}

export default App;
