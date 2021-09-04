import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';
import Skills from './components/Skills/Skills.js';
import Contact from './components/Contact/Contact.js';

const App = () => {
  return (
    <div className="App">
      < Navbar />
      < Home />
      < About />
      < Skills />
      < Contact />
    </div>
  );
}

export default App;
