import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Banner />
        <Projects />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
