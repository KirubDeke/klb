// src/AboutSectionThree.js
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/AboutSectionThree.css';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import { Link } from 'react-router-dom';

function AboutSectionThree() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const handleScroll = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
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
        <div className={`about-section ${isVisible ? 'fade-in' : ''}`} ref={sectionRef}>
            <h2>Meet the Minds Behind the Mission</h2>
            <h1>A Team Driven by Passion and Expertise</h1>
            <p>
                Our team is the heart of our success. With a diverse
                blend of talent, creativity, and experience, we work 
                collaboratively to bring your vision to life. 
                Each member is dedicated to delivering exceptional
                results and building lasting relationships.
            </p>
            <div className="image-grid">
                <div className="image-item">
                    <img src={img10} alt="Team Member 1" />
                </div>
                <div className="image-item">
                    <img src={img14} alt="Team Member 2" />
                </div>
                <div className="image-item">
                    <img src={img9} alt="Team Member 3" />
                </div>
                <div className="image-item">
                    <img src={img15} alt="Team Member 4" />
                </div>
                <div className="image-item">
                    <img src={img11} alt="Team Member 5" />
                </div>
            </div>
            <div className="apply-button">
                <p>Want to be part of the team? Apply for a vacancy</p>
                <Link to='/vacancy' className='apply-btn'>Apply</Link>
            </div>
        </div>
    );
}

export default AboutSectionThree;