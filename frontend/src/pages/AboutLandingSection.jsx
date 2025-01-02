// src/AboutLandingSection.js
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/AboutLanding.css';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.jpg'; 

const AboutLandingSection = () => {
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
    <div className={`landing-page ${isVisible ? 'fade-in' : ''}`} ref={sectionRef}>
      <div className='hero-text'>
        <h1>
          <span>Driven by Passion, Built on Excellence,</span>
          <span>Committed to Your Success</span>
        </h1>
      </div>
      <div className='imageSection'>
        <img src={img6} alt="Modern building"/>
        <img src={img4} alt="Under-construction building"/>
      </div> 
      
      <div className="About-content">
        <h2>Our Commitment to Excellence</h2>
        <h3>Dedicated to Delivering Beyond Expectations</h3>
        <p>
          Commitment is at the core of everything we do. We pledge to uphold
          the highest standards of quality, integrity, and reliability in every
          project we undertake. Whether it’s crafting innovative solutions,
          fostering long-term relationships, or ensuring seamless execution,
          our focus remains on delivering exceptional outcomes that stand the
          test of time. Your success is our promise.
        </p>
      </div>
    </div>
  );
};

export default AboutLandingSection;