import React from "react";
import {
    
    NavLink
  } from 'react-router-dom';


import '../../node_modules/jquery/dist/jquery';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';


//Component for the Navigation Menu

export default function NavMenu() {

  //Heavy react, css, and jquery for sytling and responsive design purposes

return(
<div className="navWrapper navbar navbar-expand-md navbar-dark bg-dark">

      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">
            
            <span className="navbar-toggler-icon"></span>
        </button>

  
  {/* NavLink used instead of Link, also the 'exact' parameter was added infront of to... this is to prevent Home from staying active the entire time */}

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
    
    {/* Switch removed and shifted to main App.js so that all components can access it  */}

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