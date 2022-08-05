// import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Container from './container';
import Header from './pages/Header/header';

function App() {
  // const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <Container />
      {/* <QueryClientProvider client={queryClient}
        <Container />
      </QueryClientProvider> */}
    </BrowserRouter>
  );
}

export default App;
