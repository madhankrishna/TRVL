import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Services from './pages/Services';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={Signup} />
      </Switch>
    </Router>
  </>
   
  );
}

export default App;
