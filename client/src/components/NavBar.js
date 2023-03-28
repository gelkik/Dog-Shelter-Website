import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
  );
}

export default NavBar;
