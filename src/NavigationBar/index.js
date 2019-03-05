import React from 'react';
import NavLinks from '../NavLinks';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand">Bubble store, i think...</h1>
            <NavLinks />
        </nav>
    )
};

export default NavigationBar;
