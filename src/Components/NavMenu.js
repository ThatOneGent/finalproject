import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
  } from 'react-router-dom';

import BookcaseList from "./Bookshelf/BookList";
import About from "./About";
import Home from "./Home";
import '../../node_modules/jquery/dist/jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';


export default function NavMenu() {

return(
<div className="navWrapper navbar navbar-expand-md navbar-dark bg-dark">

      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
            
            <span class="navbar-toggler-icon"></span>
        </button>

  

    <div className='collapse navbar-collapse justify-content-center' id='navbarNavDropdown'>
 <div className="navbar-nav">
    <button className='btn btn-outline-secondary nav-item' >
      <NavLink activeClassName="active" className='nav-link' exact to="/">Home</NavLink>

    </button>
    <button  className='btn btn-outline-secondary nav-item'>

      <NavLink activeClassName="active" className='nav-link' to="/Bookshelf">Bookshelf</NavLink>
    </button>

    <button className='btn btn-outline-secondary nav-item'>

      <NavLink  activeClassName="active" className='nav-link' to="/About">About</NavLink>
    </button>
</div>


  </div>
    
    {/* <Switch>
    <Route path='/Bookshelf'>
      <BookcaseList/>
    </Route>
    <Route path='/About'>
      <About/>
    </Route>
    <Route path='/'>
      <Home />
    </Route>

  </Switch> */}
  
  
</div>
);

}