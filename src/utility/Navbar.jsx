import React from 'react';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-connect">Connect With Me</div>

            <ul className='navbar-nav'>
                <li>Home</li>
                <li>About Me</li>
                <li>Education</li>
                <li>Experience</li>
                <li>PortFolio</li>
                <li>Contact</li>
            </ul>

        </div>

    );
}

export default Navbar;