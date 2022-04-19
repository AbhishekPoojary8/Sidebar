import React from 'react';

import PersistentDrawer from './Pages/atoms/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About'


function App() {
  return (
    <>
      <Router>
        <PersistentDrawer/>
     
        <Switch>
        <Route exact from="/"  >
          <Home/>
        </Route>
        <Route exact path="/contact"  >
          <Contact/>
        </Route>
        <Route exact path="/about" >
          <About/>
          </Route>
      </Switch> 
        
      </Router>
    </>
  );
}

export default App;
