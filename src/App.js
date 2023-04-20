import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/jquery/dist/jquery.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import BookcaseList from './Components/Bookshelf/BookList';
import Header from './Components/Header';
import Footer from './Components/Footer';


//Main app component
export default function App() {

  return (
    <div className='container-fluid g-0' > {/* Sets stage for using entire top portion for header and set gutter to 0*/}

       <Router> 
        <Header /> {/* call the header component */}
       
        <div className='container'>  {/* Contains main body of app within container-- includes the switch component that is the route/navigation */}
        
         {/* switch located here versus NavMenu */}

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
        <Footer/> {/* Call footer component */}

      </Router>
    </div>

  );
}
