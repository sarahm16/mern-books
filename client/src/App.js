import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import Search from './pages/search';
import Navbar from './components/navbar';
import Saved from './pages/saved';
import Results from './components/results';

function App() {
  return (
    <Router>
    <div className="App">
        {/* <Navbar /> */}
        {/* <Header /> */}
        <Route exact path='/' component={Search} />
        <Route exact path='/saved' component={Saved} />
        <Route exact path='/results/:title' component={Results} />
    </div>
    </Router>
  );
}

//test

export default App;
