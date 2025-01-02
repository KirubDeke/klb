// src/HomeSectionFour.js
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/HomeSectionFour.css';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img12 from '../assets/img12.jpg';
import { Link } from 'react-router-dom';

function HomeSectionFour() {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);
    const cardsRef = useRef(null);

    const handleScroll = () => {
        if (headerRef.current && cardsRef.current) {
            const headerRect = headerRef.current.getBoundingClientRect();
            const cardsRect = cardsRef.current.getBoundingClientRect();

            if (headerRect.top < window.innerHeight * 0.8) {
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
        <>
            <div className="home-container">
                <div className={`header ${isVisible ? 'fade-in' : ''}`} ref={headerRef}>
                    <div className='headerPartOne'>
                        <h1>Effortless Solutions, Exceptional Results</h1>
                        <p>
                            We believe that simplicity is the ultimate sophistication. By breaking down complex challenges into manageable steps, we make the process seamless, efficient, and tailored to your needs. Experience a stress-free journey with our expertise at your side.
                        </p>
                    </div>
                    <div className='headerPartTwo'>
                        <ul>
                            <li>Strategic Planning</li>
                            <li>Project Management</li>
                            <li>Design and Development</li>
                            <li>Consulting Services</li>
                        </ul>
                    </div>
                </div>

                <div className={`cards-container ${isVisible ? 'fade-in' : ''}`} ref={cardsRef}>
                    {/* Card 1 */}
                    <div className="Imagecard">
                        <img src={img4} alt="Innovation" className="card-image" />
                        <div className="card-content">
                            <h2>1</h2>
                            <h3>Innovation at Every Step</h3>
                            <p>Leverage cutting-edge tools and techniques to deliver exceptional results.</p>
                            <Link to="/about" className='btnSectionFour'>About us</Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="Imagecard">
                        <img src={img3} alt="Client Approach" className="card-image" />
                        <div className="card-content">
                            <h2>2</h2>
                            <h3>Client-Centric Approach</h3>
                            <p>Your vision and goals are at the heart of everything we do.</p>
                            <Link to="/services" className='btnSectionFour'>Services</Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="Imagecard">
                        <img src={img12} alt="End-to-End" className="card-image" />
                        <div className="card-content">
                            <h2>3</h2>
                            <h3>End-to-End Support</h3>
                            <p>From ideation to execution, we’re with you every step of the way.</p>
                            <Link to="/contact" className='btnSectionFour'>Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSectionFour;