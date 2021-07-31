import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import SmoothScrollbar from './Components/SmoothScrollbar';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
