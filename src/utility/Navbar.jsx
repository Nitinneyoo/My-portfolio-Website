import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../src/images/menu_open.svg';
import menu_close from '../../src/images/menu_close.svg'

const Navbar = () => {
    const [theme, setTheme] = useState("dark-theme");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]); // Dependency array ensures update on theme change

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
    };

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }


    return (
        <nav className="navbar">
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <ul ref={menuRef} className="navbar-nav">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#education'>Education</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#experience'>Experience</AnchorLink></li>
                {/* <li>Portfolio</li> */}
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
                <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
                <button className="btn" onClick={toggleTheme}>
                    <div className="toggle">
                        <input type="checkbox" />
                        <label></label>
                    </div>

                </button>
            </ul>
        </nav>
    );
};

export default Navbar;
