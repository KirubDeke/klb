// src/HomeSectionTwo.js
import React, { useEffect, useRef, useState } from 'react';
import '../Styles/HomeSectionTwo.css';
import { Link } from 'react-router-dom';

function HomeSectionTwo() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const handleScroll = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
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
        <>
            <div className='HomeTwo'>
                <div className='containerOne'></div>
                <div className={`containerTwo ${isVisible ? 'fade-in' : ''}`} ref={containerRef}>
                    <p className='containerTwoHeading'>We Work Smarter</p>
                    <p>
                        Our approach is rooted in efficiency and innovation. By combining strategic thinking with cutting-edge tools,
                        we deliver solutions that save time, reduce costs, and maximize results—because working smarter means achieving more.
                    </p>
                    <Link to="/about" className='btnTwo'>Explore further</Link>
                </div>
            </div>
        </>
    );
}

export default HomeSectionTwo;