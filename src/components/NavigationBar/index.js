import React from 'react';
import NavLinks from '../NavLinks';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand">Bubblify</h1>
            <NavLinks />
        </nav>
    )
};

export default NavigationBar;
