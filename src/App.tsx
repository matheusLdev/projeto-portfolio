import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;