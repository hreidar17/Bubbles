import React from 'react';
import NavLinks from '../NavLinks';
import Logo from '../../img/logo.png'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img style={{width: '165px', height: '50px'}} src={Logo} alt=""></img>
            <NavLinks />
        </nav>
    )
};

export default NavigationBar;
