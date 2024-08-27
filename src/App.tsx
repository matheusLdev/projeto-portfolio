import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import { GlobalStyle } from './styles/GlobalStyles';
import Animate from './components/Animate';

function App() {
  return (
    <>
      <GlobalStyle />
      <Animate>
        <Header />
      </Animate>
      <Animate>
        <Home />
      </Animate>
      <Animate>
        <Project />
      </Animate>
      <Animate>
        <About />
      </Animate>
      <Animate>
        <Footer />
      </Animate>
    </>
  )
}

export default App;