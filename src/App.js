import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/jquery/dist/jquery.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import BookcaseList from './Components/Bookshelf/BookList';

export default function App() {
  
  return (
   <div className='container'>
      <Router>
        <div>
          <h1>Hello World 🌎</h1>

          <div className='btn-group'>

            <button className=' btn btn-outline-secondary'>
              <Link to="/">Home</Link>

            </button>
            <button className=' btn btn-outline-secondary'>

              <Link to="/Bookshelf">Bookshelf</Link>
            </button>

            <button className=' btn btn-outline-secondary'>

              <Link to="/About">About</Link>
            </button>



          </div>



          <Switch>
            <Route path='/Bookshelf'>
              <BookcaseList/>
            </Route>
            <Route path='/About'>
              <About/>
            </Route>
            <Route path='/'>
              <Home />
            </Route>

          </Switch>


        </div>

      </Router>
    </div>

  );
}
