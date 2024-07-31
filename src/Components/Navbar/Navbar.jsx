import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navmain">
      <div className="logo" id="logo">
        <img src={logo} alt="" />
      </div>
      <div className={`navtags ${isOpen ? 'navtags-open' : ''}`}>
        <li><Link to='home' smooth={true} duration={500} id='navp1'>Home</Link></li>
        <li><Link to='work' smooth={true} duration={500} id='navp2'>Work</Link></li>
        <li><Link to='about' smooth={true} duration={500} id='navp3'>About Us</Link></li>
        <li><Link to='service' smooth={true} duration={500} id='navp4'>Service</Link></li>
        <li><Link to='contact' smooth={true} duration={500} id='navp5'>Contact</Link></li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
