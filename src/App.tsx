import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Project />
      <About />
      <Footer />
    </>
  )
}

export default App;