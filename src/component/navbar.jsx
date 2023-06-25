import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'
class NavBar extends Component {
    state = {}
    render() {
        return ( 
    <div>

    <nav className="navbar navbar-expand-lg navbar-light">
    
  <font   className="navbar-brand text-danger" href="#">Shinda</font>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="show navbar-nav float-start">
      <li className="nav-item">
      <NavLink className="nav-link text-danger" to = { "/home" } > Home</NavLink>  
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link text-danger" to = { "/skills" } > Skills </NavLink>  
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link text-danger" to = { "/contact" } > Contact Us </NavLink>  
      </li>
    </ul>
  </div>
</nav>

           
            </div>




        );
    }
}

export default NavBar;