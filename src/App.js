import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <div className='app'>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/portfolio'>
            <Home />
          </Route>
          <Route path='portfolio/skills'>
            <Skills />
          </Route>
          <Route path='portfolio/projects'>
            <Projects />
          </Route>
          <Route path='portfolio/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
