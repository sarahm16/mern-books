import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import Search from './pages/search';
import Navbar from './components/navbar';
//import Saved from './pages/saved';
//import Results from './components/results';

const Saved = lazy(() => import('./pages/saved'));
const Results = lazy(() => import('./components/results'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
            <Route exact path='/' component={Search} />
            <Route exact path='/saved' component={Saved} />
            <Route exact path='/results/:title' component={Results} />
        </div>
      </Suspense>
    </Router>
  );
}

//test

export default App;
