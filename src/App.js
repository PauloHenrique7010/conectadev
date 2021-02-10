import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const url = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<h1>Não encontramos sua página</h1>} />          
        </Routes>

      </BrowserRouter>
      {/* {
        url === "http://localhost:3000/"
          ? <Home />
          : <SignIn />
      } */}
    </ThemeProvider >
  );
}

export default App;
