import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/bundles" className="nav-link">Bundles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/cart" className="nav-link">Cart</NavLink>
        </li>
        </ul>
    );
};

export default NavLinks;

 /*
    <li className="nav-item">
      <NavLink exact to="/" className="nav-link">Products</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact to="/bundles" className="nav-link">Bundles</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact to="/about" className="nav-link">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact to="/cart" className="nav-link">Cart</NavLink>
    </li>
    //*/
