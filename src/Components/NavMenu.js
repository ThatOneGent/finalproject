import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';

import BookcaseList from "./Bookshelf/BookList";
import About from "./About";
import Home from "./Home";


export default function NavMenu() {

return(
<div className="navWrapper">

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
);

}