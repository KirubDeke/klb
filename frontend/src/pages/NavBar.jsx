import React, { useState, useEffect } from 'react';
import '../styles/NavBarStyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/'; 

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="/">
          <img src={logo} alt='KLB Engineering' style={{ width: '100px' }} />
        </a>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li><Link to="/about" className={isHomePage ? 'white-link' : 'black-link'}>About</Link></li>
        <li><Link to="/services" className={isHomePage ? 'white-link' : 'black-link'}>Services</Link></li>
        <li><Link to="/projects" className={isHomePage ? 'white-link' : 'black-link'}>Projects</Link></li>
        <li><Link to="/contact" className={isHomePage ? 'white-link' : 'black-link'}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;