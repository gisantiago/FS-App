import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
        <div className="container nav">
            <nav className="main-nav">
                <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>    
                <li><NavLink to='/Cats'>Cats</NavLink></li>
                <li><NavLink to='/Surf'>Surf</NavLink></li>
                <li><NavLink to='/Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;