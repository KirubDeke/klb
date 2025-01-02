// src/Footer.js
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/FooterStyle.css';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    const handleScroll = () => {
        if (footerRef.current) {
            const rect = footerRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer ${isVisible ? 'fade-in' : ''}`} ref={footerRef}>
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">
                        <img src={logo} alt='KLB Engineering' style={{ width: '100px' }} />
                    </a>
                </div>
                <div className="footer-details">
                    <p style={{ opacity: 0.5 }}>Address</p>
                    <p>Hawassa, Hawassa Haik Building 5th Floor</p>
                    <p style={{ opacity: 0.5 }}>Email</p>
                    <p>Info@klbengineering.com</p>
                    <p style={{ opacity: 0.5 }}>Phone</p>
                    <p>+2519 245 653 25</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-column">
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/projects'>Projects</Link>
                    </div>
                    <div className="footer-links-column">
                        <Link to='/contact'>Contact</Link>
                        <Link to='/vacancy'>Vacancy</Link>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="#" aria-label="Instagram">
                        <img src={instagram} alt="Instagram" style={{ width: '40px', height: '40px' }} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <img src={linkedin} alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p><span>Policy</span></p>
                <p><span>Made by Plegma</span></p>
            </div>
        </footer>
    );
};

export default Footer;