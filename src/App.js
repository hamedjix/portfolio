import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
