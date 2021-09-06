import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Skills from './components/Skills/Skills.js';
import Contact from './components/Contact/Contact.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <main>
            <Navbar />
            <Switch>
              <Route exact path="/">
              < Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/skills">
              < Skills />
              </Route>
              <Route exact path="/contact">
              < Contact />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      
      
    //</div>
  );
}

export default App;

