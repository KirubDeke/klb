import React from 'react';
import img5 from '../assets/img5.jpg'; 
import '../Styles/AboutSectionFour.css'; 
import { Link } from 'react-router-dom';

function AboutSectionFour() {
    return (
        <div className="AboutSectionFourcontainer">
            <img src={img5} alt="Construction" className="background-image" />
            <div className="overlay">
                <h2 style={{fontSize:'32px', fontWeight:'400'}}>Our Commitment: Your Satisfaction, Always.</h2>
                <p>Reach out to us, and we'll respond in no time.</p>
                <Link to='/contact' className="contact-button">Reach Out</Link>
            </div>
        </div>
    );
}

export default AboutSectionFour;