import React from 'react';
import './NavBar.css'
import logo from './../../media/logo.png'
const NavBar = () => {
// TODO: Put navBar more on the top
    return (
        <nav>
            <div className="logo_container">
                <img className="logo" src={logo} alt="Logo"/>
            </div>
            <div className="menu">
                <div className="menu_item">Features</div>
                <div className="menu_item">About</div>
                <div className="menu_item">Signup</div>
                <div className="menu_item">Login</div>
            </div>
        </nav>
    );
};

export default NavBar;
